import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import prisma2 from '@/lib/prisma-second';
import { now, getLocalTimeZone } from '@internationalized/date';

interface Data {
  respuesta: string;
  id_user: string;
}

export async function POST(
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

  const { respuesta, id_user } = (await request.json()) as Data;

  try {
    const answer = await prisma.respuestaFinal.create({
      data: {
        id_ticket: id,
        respuesta,
        id_user,
        fecha: now(getLocalTimeZone()).toDate(),
      },
      include: {
        ticket: true,
      },
    });

    return NextResponse.json(answer, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error al crear respuesta' },
      { status: 500 }
    );
  }
}
