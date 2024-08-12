import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const Footer = () => {
  return (
    <div className="w-full min-h-[200px] bg-[#4801ff] relative flex flex-col pb-4 pt-8 justify-end gap-4 items-center">
      <ul className=" text-white mb-4 mt-2">
        <ul className="flex gap-4">
          <Link href="/snippets">snippets</Link>
          <Link href="/snippets">writing</Link>
        </ul>
      </ul>
      <div className="p-4 w-[55px] h-[55px] flex opacity-25 justify-center relative items-center  rounded-full bg-white aspect-square">
        <Image
          src="/images/as-logo.png"
          alt="Hero"
          height={40}
          width={40}
          className="mx-auto absolute "
        />
      </div>

      <p className="text-center text-gray-400 text-md">
        &copy; {new Date().getFullYear()} <strong>Aaron Soto</strong>. All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
