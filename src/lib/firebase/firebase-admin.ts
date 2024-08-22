import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

// Check if the admin app has already been initialized to prevent initializing it multiple times
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)
    ),
    databaseURL: "https://aaron-portfolio-96729.firebaseio.com",
  });
}

const messaging = admin.messaging();

export { messaging };
