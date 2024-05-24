import { NextRequest, NextResponse } from "next/server";
import prisma2 from "@/lib/prisma-second";
import prisma from "@/lib/prisma";
import { now, getLocalTimeZone } from "@internationalized/date";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const html = data.get("stripped-html");
  const body = data.get("body-plain");
  const from = data.get("from");
  const attachment = data.get("attachment-1");

  if (!from) {
    return NextResponse.json({ error: "No Sender Provided" }, { status: 400 });
  }

  const sender = from.toString().split("<")[1].split(">")[0];

  if (!html) {
    return NextResponse.json({ error: "No HTML Provided" }, { status: 400 });
  }

  if (!body) {
    return NextResponse.json({ error: "No Body Provided" }, { status: 400 });
  }

  const user = await prisma2.m_user.findUnique({
    where: {
      email: sender,
    },
  });

  if (!user) {
    const answer = await prisma.ticketRespuestas.create({
      data: {
        respuesta:
          body.toString().split("________________________________")[0] ?? "",
        id_ticket:
          body.toString().split("No. de ticket: ")[1].split("Si")[0] ?? "",
        fecha: now(getLocalTimeZone()).toDate(),
        email_user: sender,
      },
    });
    return NextResponse.json(
      { ...answer, message: "Respuesta de usuario no registrado" },
      { status: 200 }
    );
  }

  const answer = await prisma.ticketRespuestas.create({
    data: {
      respuesta:
        body.toString().split("________________________________")[0] ?? "",
      id_ticket:
        body.toString().split("No. de ticket: ")[1].split(" ")[0] ?? "",
      fecha: now(getLocalTimeZone()).toDate(),
      id_user: user.id ?? "",
    },
  });

  return NextResponse.json(answer, { status: 200 });
}
