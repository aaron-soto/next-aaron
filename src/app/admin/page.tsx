"use client";

import { auth, initializeMessaging, messaging } from "@/lib/firebase/firebase";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import copy from "copy-to-clipboard";
import { getToken } from "firebase/messaging";
import { isAdminUser } from "@/lib/utils";
import { redirect } from "next/navigation";
import router from "next/router";
import { signOut } from "firebase/auth";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const AdminPage = () => {
  const { user, loading } = useAuth();
  const [token, setToken] = useState<string | null>(null);
  const { toast } = useToast();

  const generateToken = async () => {
    try {
      if (!messaging) {
        await initializeMessaging();
        if (!messaging) {
          console.error("Messaging still not initialized.");
          return;
        }
      }

      const currentToken = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
      });

      if (currentToken) {
        setToken(currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    } catch (error) {
      console.error("Error generating FCM token:", error);
    }
  };

  if (loading) {
    return (
      <div className="container pt-8">
        <h1 className="text-2xl font-black">Loading...</h1>
      </div>
    );
  }

  if (!user || !isAdminUser(user)) {
    redirect("/admin/auth");
  }

  const sendTestNotification = async () => {
    console.log("Sending test notification");
  };

  return (
    <div className="container pt-8">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-black">Admin</h1>
        <Button size="sm" onClick={() => signOut(auth)}>
          logout
        </Button>
      </div>
      <div className="flex items-center gap-4 my-4">
        <div className="flex">
          <span>Token: </span>
          <span className="text-neutral-300 text-nowrap pl-2 overflow-hidden text-ellipsis w-[200px]">
            {token || "None"}
          </span>
        </div>
        <Button
          size="sm"
          disabled={!token}
          className=""
          onClick={() => {
            if (token) {
              copy(token);
              toast({
                title: "Token copied",
              });
            }
          }}
        >
          Copy
        </Button>
      </div>
      <div className="w-[200px] h-[2px] bg-neutral-300/20 my-6"></div>

      <Button size="sm" onClick={generateToken}>
        Generate FCM Token
      </Button>

      <div className="flex">
        <div className="flex flex-col gap-4 mt-4">
          <Button size="sm" variant="outline" onClick={sendTestNotification}>
            Send Notification
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
