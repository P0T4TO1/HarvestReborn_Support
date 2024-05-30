import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import prisma2 from '@/lib/prisma-second';
import { ITicket } from '@/interfaces';

async function getTicketById(
  request: Request,
  { params }: { params: { id: string } },
  req: NextRequest,
  res: NextResponse
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json(
      { error: 'Ticket no encontrado' },
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

    const userAnswer = await prisma2.m_user.findUnique({
      where: {
        id: ticket?.id_user ?? '',
      },
      select: {
        duenonegocio: {
          select: {
            nombre_dueneg: true,
          },
        },
        cliente: {
          select: {
            nombre_cliente: true,
          },
        },
      },
    });

    const ticketResponse = {
      ...ticket,
      respuestas: ticket?.respuestas.map((respuesta) => ({
        ...respuesta,
        user: userAnswer,
      })),
      comentarios: ticket?.comentarios.map((comentario) => ({
        ...comentario,
        user: userAnswer,
      })),
      respuesta: {
        user: userAnswer,
      },
    } as ITicket;

    return NextResponse.json(ticketResponse, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al buscar ticket' },
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
      { error: 'Ticket no encontrado' },
      { status: 400 }
    );
  }

  try {
    await prisma.ticket.delete({
      where: {
        id_ticket: id,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al eliminar ticket' },
      { status: 500 }
    );
  }
}

export { getTicketById as GET, deleteTicket as DELETE };
