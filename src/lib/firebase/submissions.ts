import { addDoc, collection } from "firebase/firestore";

import { db } from "@/lib/firebase/firebase";

export type ContactFormParams = {
  name: string;
  email: string;
  message: string;
};

export const submitContactForm = async (data: ContactFormParams) => {
  try {
    const collectionRef = collection(db, "submissions");
    await addDoc(collectionRef, {
      ...data,
      form: "contact",
      createdAt: new Date(),
    });
  } catch (error: any) {
    console.error(error);
  }
};
