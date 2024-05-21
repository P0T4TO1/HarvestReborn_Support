import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

async function assingTicket(req: NextRequest) {
  const { id_ticket, id_user_support } = (await req.json()) as {
    id_ticket: string;
    id_user_support: string;
  };

  if (!id_ticket || !id_user_support) {
    return NextResponse.json(
      { message: "id_ticket and id_user are required" },
      { status: 400 }
    );
  }

  try {
    const ticket = await prisma.ticket.update({
      where: {
        id_ticket,
      },
      data: {
        id_support: id_user_support,
      },
    });

    return NextResponse.json(ticket, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error assigning ticket" },
      { status: 500 }
    );
  }
}

export { assingTicket as PUT };
