import InlineLink from "@/components/InlineLink";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import React from "react";
import RotatingCircle from "@/components/RotatingCircle";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const page = () => {
  return (
    <main className="container flex flex-col gap-8 mb-16 text-neutral-600">
      <h1 className={cn("text-3xl font-bold text-white", montserrat.className)}>
        About
      </h1>

      <p>
        I&apos;m a former Army Ranger turned software developer. I have done
        fullstack work in the past, but that has lead me to learn that I have a
        huge passion in frontend development. I still do backend work but
        frontend is where I shine.
      </p>

      <p>
        I am currently open to work. Previously I worked at Allata as a
        consultant developer where I worked on multiple projects that often
        required me to switch the stack I was working on.
      </p>

      <p>
        For more details, see my{" "}
        <InlineLink href="/" target="_blank" label="resume" /> or add me on{" "}
        <InlineLink
          href="https://www.linkedin.com/in/aaron-soto1/"
          label="LinkedIn"
        />
        .
      </p>

      {/* <RotatingCircle /> */}
    </main>
  );
};

export default page;
