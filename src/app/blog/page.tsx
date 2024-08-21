import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <h1 className="text-4xl mb-8 font-black text-neutral-800">Blog</h1>

      <div className="grid grid-cols-2">
        <Link className="col-span-2 py-4 space-y-2" href="/blog/dev-toolbar">
          <h3 className="font-bold text-lg">
            Supercharge Your Frontend Development with a Custom DevToolbar
          </h3>
          <p className="text-neutral-500">
            Learn how to streamline your Next.js projects with a custom
            DevToolbar, boosting productivity and simplifying testing in your
            frontend development.
          </p>
          <Button size="sm" variant="ghost" className="flex gap-4">
            Read More <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
