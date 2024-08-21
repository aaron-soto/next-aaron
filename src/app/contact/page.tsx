"use client";

import {
  ContactFormParams,
  submitContactForm,
} from "@/lib/firebase/submissions";
import { FieldValues, useForm } from "react-hook-form";
import { cn, sanitizeInput } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import React from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const Page = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      message: sanitizeInput(data.message),
    } as ContactFormParams;

    submitContactForm(sanitizedData);

    toast({
      title: "Success",
      description: "Your message has been sent successfully",
    });

    reset();
  };

  return (
    <div className="container mt-8 ">
      <h1
        className={cn(montserrat.className, "text-2xl font-black text-center")}
      >
        Contact
      </h1>
      <p className="text-center mt-2 mb-4">
        You can reach me at{" "}
        <Link
          href="mailto:aaron.m.soto1@gmail.com"
          className="text-[#4801FF] underline underline-offset-2"
        >
          aaron.m.soto1@gmail.com
        </Link>{" "}
        or using the contact form below.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-md mx-auto mt-8 pb-8"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="rounded-none text-base border-neutral-400 p-2 border-b-[3px] active:border-[#4801FF] focus:border-[#4801FF] focus:ring-0 focus:outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              {errors.name.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="rounded-none text-base border-neutral-400 p-2 border-b-[3px] active:border-[#4801FF] focus:border-[#4801FF] focus:ring-0 focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="message" className="text-lg font-semibold">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="rounded-none text-base border-neutral-400 p-2 border-b-[3px] active:border-[#4801FF] focus:border-[#4801FF] focus:ring-0 focus:outline-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message?.toString()}
            </span>
          )}
        </div>

        <Button type="submit" className="mt-4">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Page;
