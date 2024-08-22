import { doc, getDoc } from "firebase/firestore";

import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebase";
import { messaging } from "@/lib/firebase/firebase-admin";

export async function POST(request: Request) {
  const { title, body } = await request.json();

  if (!title || !body) {
    return NextResponse.json("Missing required fields", { status: 400 });
  }

  const token = await getDoc(doc(db, "users", "UgkStTgv19cCjzK9AP5MNFO0Qx32"));
  let tokenRes = "";

  if (!token.exists()) {
    return NextResponse.json("Token not found", { status: 404 });
  } else {
    tokenRes = token.data().fcmToken;
  }

  const message = {
    notification: {
      title,
      body,
    },
    token: tokenRes,
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
