import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { now, getLocalTimeZone } from "@internationalized/date";
import { Prioridad, Tipo, TipoPregunta, ITicket } from "@/interfaces";

import { NewTicketNotification } from "@/components";
import sgMail from "@sendgrid/mail";
import { render } from "@react-email/render";

import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: process.env.MAILGUN_DOMAIN || "",
});


sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

interface Data {
  email: string;
  tipo: Tipo;
  motivo: string;
  descripcion: string;
}

async function createGuestTicket(req: NextRequest) {
  const { email, tipo, motivo, descripcion } = (await req.json()) as Data;

  try {
    let prioridad = "" as Prioridad;

    if (tipo === Tipo.INCIDENCIA) {
      prioridad = Prioridad.INMEDIATA;
    } else if (tipo === Tipo.PETICION) {
      prioridad = Prioridad.BAJA;
    } else if (tipo === Tipo.QUEJA) {
      prioridad = Prioridad.MEDIA;
    } else if (tipo === Tipo.RECLAMACION) {
      prioridad = Prioridad.ALTA;
    }

    const ticket = await prisma.ticket.create({
      data: {
        email,
        tipo: tipo,
        area: TipoPregunta.CUENTA,
        estado: "ABIERTO",
        prioridad,
        motivo,
        descripcion,
        fecha_inicio: now(getLocalTimeZone()).toDate(),
      },
    });

    const emailHtml = render(
      NewTicketNotification({
        email: email,
        userName: email,
        ticket: ticket as unknown as ITicket,
      })
    );

    const msg = {
      to: email,
      from: "Support<support@harvestreborn.me>",
      subject: "Nuevo ticket creado",
      html: emailHtml,
    };

    try {
      await mg.messages().send(msg);
      // await sgMail.send(msg);
    } catch (error) {
      console.error(error, "error al enviar el correo");
      return NextResponse.json(
        { message: "Error al enviar el correo" },
        { status: 500 }
      );
    }

    return NextResponse.json(ticket, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al crear el ticket" },
      { status: 500 }
    );
  }
}

export { createGuestTicket as POST };
