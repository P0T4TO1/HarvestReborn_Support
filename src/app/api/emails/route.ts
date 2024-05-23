import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import prisma2 from "@/lib/prisma-second";
import parser from "@sendgrid/inbound-mail-parser";
import mail from "@sendgrid/mail";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  try {
    const html = data.get("html");
    const from = data.get("from");

    const parsed = new parser({ keys: ["Email", "html", "Text"] }, { body: data }).getRawEmail(
      (mail) => console.log(mail)
    );
    console.log(parsed, "parsed");

    const senderEmail = from?.toString().split("<")[1].split(">")[0];

    const user = await prisma2.m_user.findUnique({
      where: {
        email: senderEmail,
      },
    });

    console.log(user, "user");
    console.log(senderEmail, "senderEmail");
    console.log(html, "html");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
