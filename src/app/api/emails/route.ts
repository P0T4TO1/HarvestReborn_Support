import { NextRequest, NextResponse } from "next/server";
import client from "@sendgrid/client";

client.setApiKey(process.env.SENDGRID_API_KEY || "");

const data = {
  url: "http://localhost:4000/api/emails",
  hostname: "harvest-reborn.me",
  spam_check: false,
  send_raw: false,
};

const request = {
  url: `/v3/user/webhooks/parse/settings`,
  method: "POST" as "POST",
  body: data,
};

export async function POST(request: NextRequest) {
  const data = await request.formData();

  console.log(data, "data");

  return NextResponse.json({ success: true }, { status: 200 });
}

export async function GET(req: NextRequest) {
  client
    .request(request)
    .then(([response, body]) => {
      console.log(response.statusCode, "response.statusCode");
      console.log(response.body, "response.body");
    })
    .catch((error) => {
      console.log(error, "error");
      return NextResponse.json({ success: false }, { status: 500 });
    });
  return NextResponse.json({ success: true }, { status: 200 });
}
