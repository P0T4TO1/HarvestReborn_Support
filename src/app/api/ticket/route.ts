import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import prisma2 from "@/lib/prisma-second";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Prioridad, Tipo, TipoPregunta, ITicket } from "@/interfaces";

import sgMail from "@sendgrid/mail";
import { render } from "@react-email/render";
import { NewTicketNotification } from "@/components";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

interface Data {
  tipo: Tipo;
  area: TipoPregunta;
  motivo: string;
  descripcion: string;
  id_user: string;
}

async function createTicket(req: NextRequest, res: NextResponse) {
  const { tipo, motivo, area, descripcion, id_user } =
    (await req.json()) as Data;

  try {
    const user = await prisma2.m_user.findUnique({
      where: {
        id: id_user,
      },
      include: {
        duenonegocio: {
          select: {
            nombre_dueneg: true,
            apellidos_dueneg: true,
          },
        },
        cliente: {
          select: {
            nombre_cliente: true,
            apellidos_cliente: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 400 }
      );
    }

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
        tipo: tipo,
        area: area,
        estado: "ABIERTO",
        prioridad,
        motivo,
        descripcion,
        fecha_inicio: today(getLocalTimeZone()).toDate(getLocalTimeZone()),
        id_user: user.id,
      },
    });

    const name =
      user.cliente?.nombre_cliente + " " + user.cliente?.apellidos_cliente ||
      user.duenonegocio?.nombre_dueneg +
        " " +
        user.duenonegocio?.apellidos_dueneg;

    const emailHtml = render(
      NewTicketNotification({
        email: user.email,
        userName: name,
        ticket: ticket as unknown as ITicket,
      })
    );

    const msg = {
      to: user.email,
      from: "Support<harvestreborn@gmail.com>",
      subject: "Nuevo ticket creado",
      html: emailHtml,
      msg_id: ticket.id_ticket,
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

async function getTickets(req: NextRequest, res: NextResponse) {
  try {
    const tickets = await prisma.ticket.findMany();

    return NextResponse.json(tickets);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al obtener los tickets" },
      { status: 500 }
    );
  }
}

export { createTicket as POST, getTickets as GET };
