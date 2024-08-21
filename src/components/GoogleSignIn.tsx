"use client";

import {
  GoogleAuthProvider,
  browserLocalPersistence,
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithRedirect,
} from "firebase/auth";
import React, { useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { db } from "@/lib/firebase/firebase";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuth();
  const router = useRouter();
  const auth = getAuth();

  const signInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      // Optionally, set persistence if needed
      await setPersistence(auth, browserSessionPersistence);

      const result: any = await signInWithRedirect(auth, provider);
      const signedInUser = result.user;

      // Check Firestore for isAdmin status
      const userRef = doc(db, "users", signedInUser.uid);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        setUser({
          ...signedInUser,
          ...userData,
        });
      } else {
        // Default to non-admin if the user does not have a document
        await setDoc(userRef, { isAdmin: false });
        setUser({
          ...signedInUser,
          isAdmin: false,
        });
      }

      router.push("/"); // Redirect after successful sign-in
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container pt-8">
        <h1 className="text-2xl font-black">Loading...</h1>
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      </div>
    );
  }

  if (user) {
    return (
      <div className="container pt-8">
        <h1 className="text-2xl font-black">Welcome, {user.displayName}!</h1>
        <Button onClick={() => auth.signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="container flex my-16 items-center">
      <div className="w-[400px] mx-auto">
        <h1 className="text-2xl font-bold text-center">Welcome back</h1>
        <p className="mb-6 text-center text-gray-500">
          Sign in to your account to continue
        </p>

        <div className="flex gap-2 my-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={signInWithGoogle}
          >
            <img src="/images/logos/google_logo.svg" className="h-5" />
            <span className="ml-2">Sign in with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
