import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  try {
    const body = data.get("html");
    const from = data.get("from");
    const subject = data.get("subject");

    console.log(from, "from");
    console.log(subject, "subject");
    console.log(body, "body html");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
