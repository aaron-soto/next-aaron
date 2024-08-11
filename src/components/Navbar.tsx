import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import React from "react";
import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const NavLink = ({ href, label }: any) => {
  return (
    <Link
      className="hover:underline underline-offset-2 hover:text-[#4801FF]"
      href={href}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="container my-4 flex justify-between items-center mb-8">
      <span
        className={cn(
          montserrat.className,
          "text-xl font-black text-[#ff6e41]"
        )}
      >
        Aaron Soto
      </span>
      <div className="flex h-full  gap-4">
        <NavLink href="/" label="Home" />
        <NavLink href="/contact" label="Contact" />
      </div>
    </div>
  );
};

export default Navbar;
