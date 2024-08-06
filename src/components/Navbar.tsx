import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Sun } from "lucide-react";

const NavLink = ({ href, label }: any) => {
  return (
    <Link
      className="hover:underline underline-offset-2 hover:text-indigo-600"
      href={href}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="container my-4 flex justify-between items-center mb-8">
      <div className="flex h-full  gap-4">
        <NavLink href="/" label="home" />
        <NavLink href="/work" label="work" />
        <NavLink href="/projects" label="projects" />
        <NavLink href="/about" label="about" />
      </div>
      <Button
        size="sm"
        className="flex gap-4 items-center !border-green-500/50 text-green-500"
        variant="outline"
      >
        Open to Work
        <div className="h-2.5 w-2.5 before:absolute bg-green-500 rounded-full relative before:h-full before:left-0 before:w-full before:bg-green-500 before:animate-ping before:delay-75 before:rounded-full "></div>
      </Button>
    </div>
  );
};

export default Navbar;
