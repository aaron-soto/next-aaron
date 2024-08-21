"use client";

import React, { useEffect } from "react";
import { getMessaging, onMessage } from "firebase/messaging";

import { app } from "@/lib/firebase/firebase";
import { useToast } from "@/components/ui/use-toast";

const PushNotifications = () => {
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const messaging = getMessaging(app);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log("Foreground push notification received:", payload);
        // Handle the received push notification while the app is in the foreground

        toast({
          title: payload?.notification?.title!,
          description: payload?.notification?.body!,
        });

        // You can display a notification or update the UI based on the payload
      });
      return () => {
        unsubscribe();
      };
    }
  }, []);

  return <></>;
};

export default PushNotifications;
