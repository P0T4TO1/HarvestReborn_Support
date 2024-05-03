import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import prisma2 from "@/lib/prisma-second";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Prioridad, Tipo, TipoPregunta } from "@/interfaces";

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

    return NextResponse.json(ticket, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al crear el ticket" },
      { status: 500 }
    );
  }
}

export { createTicket as POST };
