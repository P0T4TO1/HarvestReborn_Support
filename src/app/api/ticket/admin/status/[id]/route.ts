import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { EstadoTicket } from "@/interfaces";

async function changeStatusTicket(
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

  const { estado } = (await request.json()) as { estado: string };

  try {
    const updatedTicket = await prisma.ticket.update({
      where: {
        id_ticket: id,
      },
      data: {
        estado: estado as EstadoTicket,
      },
    });

    return NextResponse.json(updatedTicket, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar ticket" },
      { status: 500 }
    );
  }
}

export { changeStatusTicket as PUT };
