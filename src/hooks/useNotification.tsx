"use client";

import { getToken } from "firebase/messaging";
import { isAdminUser } from "@/lib/utils";
import { messaging } from "@/lib/firebase/firebase";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

const useNotification = () => {
  const { user } = useAuth();

  useEffect(() => {
    const requestPermission = async () => {
      if (!messaging) {
        return;
      }

      if (user && !isAdminUser(user)) {
        try {
          const permission = await Notification.requestPermission();
          if (permission === "granted") {
            const token = await getToken(messaging, {
              vapidKey: process.env.FIREBASE_VAPID_KEY,
            });
            if (token) {
              console.log("Device token:", token);
              // Send the token to your server to store and use it for sending notifications
            }
          } else {
            console.error("Permission not granted for notifications.");
          }
        } catch (error) {
          console.error("Error getting permission or token:", error);
        }
      }
    };

    requestPermission();
  }, [user]);
};

export default useNotification;
