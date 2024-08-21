"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { auth } from "@/lib/firebase/firebase";
import { isAdminUser } from "@/lib/utils";
import { signOut } from "firebase/auth";
import { useAuth } from "@/hooks/useAuth";
import useNotification from "@/hooks/useNotification";

const AdminPage = () => {
  const { user, loading } = useAuth();

  // Call useNotification hook to handle notification logic
  useNotification();

  if (loading) {
    return (
      <div className="container pt-8">
        <h1 className="text-2xl font-black">Loading...</h1>
      </div>
    );
  }

  if (!user || !isAdminUser(user)) {
    return (
      <div className="container pt-8">
        <h1 className="text-2xl font-black">Login to view this page</h1>
      </div>
    );
  }

  return (
    <div className="container pt-8">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-black">Admin</h1>
        <Button size="sm" onClick={() => signOut(auth)}>
          logout
        </Button>
      </div>
    </div>
  );
};

export default AdminPage;
