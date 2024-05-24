import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import prisma2 from "@/lib/prisma-second";
import {
  Tipo,
  TipoPregunta as Area,
  Prioridad,
  EstadoTicket,
} from "@/interfaces";

async function getTicketById(
  request: Request,
  { params }: { params: { id: string } },
  req: NextRequest,
  res: NextResponse
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { error: "Ticket no encontrado" },
      { status: 400 }
    );
  }

  try {
    const ticket = await prisma.ticket.findUnique({
      where: {
        id_ticket: id,
      },
      include: {
        comentarios: true,
        respuestas: true,
      },
    });

    const user = await prisma2.m_user.findUnique({
      where: {
        id: ticket?.id_user ?? "",
      },
      include: {
        cliente: {
          select: {
            nombre_cliente: true,
          },
        },
        duenonegocio: {
          select: {
            nombre_dueneg: true,
          },
        },
      },
    });

    const user_support = await prisma2.m_user.findUnique({
      where: {
        id: ticket?.id_support ?? "",
      },
      include: {
        cliente: {
          select: {
            nombre_cliente: true,
          },
        },
        duenonegocio: {
          select: {
            nombre_dueneg: true,
          },
        },
      },
    });

    if (user && !user_support) {
      return NextResponse.json(
        {
          ...ticket,
          user: {
            id: user.id,
            nombre:
              user.cliente?.nombre_cliente ??
              user.duenonegocio?.nombre_dueneg ??
              "",
            email: user.email,
          },
          respuestas: ticket?.respuestas.map((respuesta) => ({
            ...respuesta,
            user,
          })),
        },
        { status: 200 }
      );
    }

    if (user && user_support) {
      return NextResponse.json(
        {
          ...ticket,
          user: {
            id: user.id,
            nombre:
              user.cliente?.nombre_cliente ??
              user.duenonegocio?.nombre_dueneg ??
              "",
            email: user.email,
          },
          user_soporte: {
            id: user_support.id,
            nombre:
              user_support.cliente?.nombre_cliente ??
              user_support.duenonegocio?.nombre_dueneg ??
              "",
            email: user_support.email,
          },
          respuestas: ticket?.respuestas.map((respuesta) => ({
            ...respuesta,
            user,
          })),
        },
        { status: 200 }
      );
    }

    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener el ticket" },
      { status: 500 }
    );
  }
}

async function deleteTicket(
  request: Request,
  { params }: { params: { id: string } },
  req: NextRequest,
  res: NextResponse
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { error: "Ticket no encontrado" },
      { status: 400 }
    );
  }

  try {
    const ticket = await prisma.ticket.delete({
      where: {
        id_ticket: id,
      },
    });

    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al eliminar el ticket" },
      { status: 500 }
    );
  }
}

interface Data {
  tipo: string;
  prioridad: string;
  area: string;
  estado: string;
  fecha_inicio: Date;
  fecha_cierre?: Date;
  motivo: string;
  descripcion: string;
}

async function putTicket(
  request: Request,
  { params }: { params: { id: string } },
  req: NextRequest,
  res: NextResponse
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { error: "Ticket no encontrado" },
      { status: 400 }
    );
  }

  const body = (await request.json()) as Data;

  try {
    const ticket = await prisma.ticket.update({
      where: {
        id_ticket: id,
      },
      data: {
        tipo: body.tipo as Tipo,
        prioridad: body.prioridad as Prioridad,
        area: body.area as Area,
        estado: body.estado as EstadoTicket,
        fecha_inicio: body.fecha_inicio,
        fecha_cierre: body.fecha_cierre,
        motivo: body.motivo,
        descripcion: body.descripcion,
      },
    });

    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al actualizar el ticket" },
      { status: 500 }
    );
  }
}

export { getTicketById as GET, deleteTicket as DELETE, putTicket as PUT };
