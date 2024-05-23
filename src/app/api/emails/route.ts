import { NextRequest, NextResponse } from "next/server";
import prisma2 from "@/lib/prisma-second";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: NextRequest) {
  const data = await request.formData();

  try {
    const html = data.get("html");
    const from = data.get("from");
    const text = data.get("text");
    const email = data.get("email");

    const senderEmail = from?.toString().split("<")[1].split(">")[0];

    if (!html) {
      return NextResponse.json(
        { message: "Falta el campo html" },
        { status: 400 }
      );
    }

    if (!senderEmail) {
      return NextResponse.json(
        { message: "Email no encontrado en el campo from" },
        { status: 400 }
      );
    }

    const user = await prisma2.m_user.findUnique({
      where: {
        email: senderEmail,
      },
    });

    const msg = {
      to: "harvestreborn@gmail.com",
      from: "harvestreborn@gmail.com",
      subject: "Nueva respuesta",
      text: text?.toString(),
      html: html.toString(),
    };

    console.log(email, "email");

    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error, "Error sending email");
      throw new Error("Error sending email");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
