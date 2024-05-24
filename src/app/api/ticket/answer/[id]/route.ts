import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import prisma2 from "@/lib/prisma-second";
import { now, getLocalTimeZone } from "@internationalized/date";
import mailgun from "mailgun-js";
import { render } from "@react-email/components";
import { TicketAnswerEmail } from "@/components";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: process.env.MAILGUN_DOMAIN || "",
});

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
      { error: "Ticket no encontrado" },
      { status: 400 }
    );
  }

  const { respuesta, id_user } = (await request.json()) as Data;

  try {
    const answer = await prisma.ticketRespuestas.create({
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

    if (answer.ticket.id_user) {
      const user = await prisma2.m_user.findUnique({
        where: {
          id: answer.ticket.id_user,
        },
      });

      if (!user) {
        return NextResponse.json(
          { error: "Usuario no encontrado" },
          { status: 400 }
        );
      }

      const emailHtml = render(
        TicketAnswerEmail({
          ticket: answer.ticket as any,
          answer: answer.respuesta,
        })
      );

      const msg = {
        from: "Support<support@harvestreborn.me>",
        to: user.email,
        subject: `Respuesta a ticket #${answer.ticket.id_ticket}`,
        html: emailHtml,
      };

      await mg.messages().send(msg);

      return NextResponse.json(answer, { status: 200 });
    }

    const emailHtml = render(
      TicketAnswerEmail({
        ticket: answer.ticket as any,
        answer: answer.respuesta,
      })
    );

    const msg = {
      from: "Support<support@harvestreborn.me>",
      to: answer.ticket.email ?? "",
      subject: `Respuesta a ticket #${answer.ticket.id_ticket}`,
      html: emailHtml,
    };

    await mg.messages().send(msg);

    return NextResponse.json(answer, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al crear respuesta" },
      { status: 500 }
    );
  }
}
