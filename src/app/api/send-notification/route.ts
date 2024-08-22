import { messaging } from "@/lib/firebase/firebase-admin";

export async function POST(request: Request) {
  const { token, title, body } = await request.json();

  if (!token || !title || !body) {
    return new Response("Missing required fields", { status: 400 });
  }

  const message = {
    notification: {
      title,
      body,
    },
    token,
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
