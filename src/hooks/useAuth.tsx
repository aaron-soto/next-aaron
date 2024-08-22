"use client";

import { User, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";

// Define the shape of the context state, including the isAdmin property
interface AuthContextType {
  user: User | null | (User & { isAdmin?: boolean });
  setUser: any;
  loading: boolean;
}

// Create the Auth context with the default values
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
          // If the user does not exist in Firestore, you can set a default value
          const isAdmin = false; // Change this logic based on your needs
          await setDoc(userRef, { isAdmin });
          setUser({
            ...user,
            isAdmin,
          });
        }

        // Get and store the FCM token
        const messaging = getMessaging();
        try {
          const fcmToken = await getToken(messaging, {
            vapidKey: process.env.FIREBASE_VAPID_KEY,
          });
          if (fcmToken) {
            await setDoc(userRef, { fcmToken }, { merge: true });
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

// Custom hook to access the Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
