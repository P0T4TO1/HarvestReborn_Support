import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

async function getTicketsByUserSupport(
  request: Request,
  { params }: { params: { id: string } },
  req: NextRequest,
  res: NextResponse
) {
  const { id } = params;
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        id_support: id,
      },
      include: {
        comentarios: true,
      },
    });

    return NextResponse.json(tickets, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export { getTicketsByUserSupport as GET }