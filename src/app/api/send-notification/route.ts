import { NextResponse } from "next/server";
import { messaging } from "@/lib/firebase/firebase-admin";

export async function POST(request: Request) {
  const { title, body } = await request.json();

  if (!title || !body) {
    return NextResponse.json("Missing required fields", { status: 400 });
  }

  const message = {
    notification: {
      title,
      body,
    },
    token: process.env.IPHONE_FCM_TOKEN!,
  };

  try {
    if (!messaging) {
      return new Response("Messaging not initialized", { status: 500 });
    }

    const response = await messaging.send(message);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error fetching events" },
      { status: 500 }
    );
  }
}
