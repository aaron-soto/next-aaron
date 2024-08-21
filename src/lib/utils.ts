import { type ClassValue, clsx } from "clsx";
import { User } from "firebase/auth";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sanitizeInput = (input: string) => {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'/]/gi;
  return input.replace(reg, (match) => map[match]);
};

export function isAdminUser(
  user: User | (User & { isAdmin?: boolean })
): user is User & { isAdmin: boolean } {
  return (user as User & { isAdmin?: boolean }).isAdmin !== undefined;
}
