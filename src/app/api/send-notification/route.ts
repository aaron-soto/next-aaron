import { messaging } from "@/lib/firebase/firebase-admin";

export async function POST(request: Request) {
  const { title, body } = await request.json();

  if (!title || !body) {
    return new Response("Missing required fields", { status: 400 });
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
      throw new Error("Messaging not initialized");
    }

    const response = await messaging.send(message);
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
