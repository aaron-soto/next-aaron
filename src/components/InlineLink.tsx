import Link from "next/link";
import React from "react";

interface InlineLinkProps {
  href: string;
  label: string;
}

const InlineLink = ({ href, label }: InlineLinkProps) => {
  return (
    <>
      {" "}
      <Link
        className="underline hover:no-underline underline-offset-2 text-indigo-500"
        href={href}
      >
        {label}
      </Link>{" "}
    </>
  );
};

export default InlineLink;
