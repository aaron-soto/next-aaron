"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const testimonialsData = [
  {
    text: `"Aaron is a great developer and designer. He was able to take our vision and bring it to life with his skills and creativity."`,
    author: "William Douglas",
    position: "CEO - Case Study Coffee Lounge",
  },
  {
    text: `"Working with Aaron was a pleasure. He understands the requirements quickly and delivers outstanding results."`,
    author: "Former Coworker",
    position: "Senior Developer - Allata (Associa)",
  },
  {
    text: `"Aaron is an exceptional talent. His attention to detail and design skills are top-notch."`,
    author: "Former Coworker",
    position: "Senior Developer - Allata",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container pb-24">
      <div className="flex flex-col items-center gap-6">
        <h2
          className={cn(
            montserrat.className,
            "text-2xl font-extrabold text-neutral-800"
          )}
        >
          Testimonials
        </h2>
        <p className="mb-8 text-center">
          People I&apos;ve worked with have said some nice things about me...
          check them out.
        </p>

        <div className="flex flex-col items-center w-full">
          <div
            className="w-full relative max-w-2xl mx-auto flex flex-col text-xl justify-center items-center text-center overflow-hidden"
            style={{ height: "200px" }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={currentTestimonial}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <p className="mb-8 italic">
                  {testimonialsData[currentTestimonial].text}
                </p>
                <p className={cn(montserrat.className, "text-base font-bold")}>
                  {testimonialsData[currentTestimonial].author}
                </p>
                <p className="text-sm font-medium text-neutral-700">
                  {testimonialsData[currentTestimonial].position}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex mt-8 gap-2">
            {testimonialsData.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full relative after:inset-0 after:absolute after:border-white after:border-[2px] after:rounded-full after:transition-all after:duration-200 cursor-pointer transition-all duration-200",
                  currentTestimonial === index
                    ? "bg-[#4801FF] after:-inset-[4px] after:border-[2px] after:absolute after:rounded-full after:border-[#4801FF]"
                    : "bg-neutral-300"
                )}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
