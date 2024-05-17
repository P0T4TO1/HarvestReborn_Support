import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Prioridad, Tipo, TipoPregunta, ITicket } from "@/interfaces";

import { NewTicketNotification } from "@/components";
import sgMail from "@sendgrid/mail";
import { render } from "@react-email/render";

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
        fecha_inicio: today(getLocalTimeZone()).toDate(getLocalTimeZone()),
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
      from: "Support<harvestreborn@gmail.com>",
      subject: "Nuevo ticket creado",
      html: emailHtml,
    };

    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
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
