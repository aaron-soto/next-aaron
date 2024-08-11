import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface InlineLinkProps {
  href: string;
  label: string;
  target?: string;
}

const InlineLink = ({ href, label, target }: InlineLinkProps) => {
  return (
    <>
      {" "}
      <Link
        {...(target && { target })}
        className="font-[400] text-indigo-500 underline-offset-2 underline  underline-thick hover:text-indigo-500 transition-all duration-100"
        href={href}
      >
        {label}
        {/* <ArrowUpRight size={24} className="inline -mt-[2px]" /> */}
      </Link>{" "}
    </>
  );
};

export default InlineLink;
