import { NextRequest, NextResponse } from "next/server";
import prisma2 from "@/lib/prisma-second";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: NextRequest) {
  const data = await request.formData();

  try {
    const html = data.get("html");
    const from = data.get("from");

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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
