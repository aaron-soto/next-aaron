"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      className="mt-4 flex !bg-transparent items-center gap-2 pointer-events-auto w-auto mr-auto"
      size="sm"
      variant="ghost"
      onClick={() => router.back()}
    >
      <ArrowLeft size={18} /> Back
    </Button>
  );
};

export default BackButton;
