//useAuth.ts
"use client";

import { User, onAuthStateChanged } from "firebase/auth";
import { auth, db, initializeMessaging } from "@/lib/firebase/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { getToken } from "firebase/messaging";

interface AuthContextType {
  user: User | null | (User & { isAdmin?: boolean });
  setUser: any;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
  loading: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<
    User | null | (User & { isAdmin?: boolean })
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser({
            ...user,
            ...userData,
          });
        } else {
          const isAdmin = false;
          await setDoc(userRef, { isAdmin });
          setUser({
            ...user,
            isAdmin,
          });
        }

        // Get and store the FCM token
        try {
          const messaging = await initializeMessaging();
          if (messaging) {
            const fcmToken = await getToken(messaging, {
              vapidKey: process.env.FIREBASE_VAPID_KEY,
            });
            if (fcmToken) {
              await setDoc(userRef, { fcmToken }, { merge: true });
            }
          }
        } catch (error) {
          console.error("Error retrieving FCM token:", error);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
