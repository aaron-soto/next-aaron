"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Mouse } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface DesktopDemoProps {
  className?: string;
  src: string;
}

const DesktopDemo = ({ className, src }: DesktopDemoProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);

  // Function to hide the overlay and reset the timeout
  const handleInteraction = () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    setIsOverlayVisible(false);

    const timeoutId = window.setTimeout(() => {
      setIsOverlayVisible(true);
    }, 5000); // Show the overlay again after 5 seconds of inactivity

    setScrollTimeout(timeoutId);
  };

  // Function to handle mouse enter (hover) on desktop
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOverlayVisible(false);
    }
  };

  // Function to handle mouse leave on desktop
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOverlayVisible(true);
    }
  };

  // Effect to clean up the timeout on component unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <div
      className={cn(
        "w-full relative group overflow-hidden rounded-lg",
        className
      )}
      onTouchStart={isMobile ? handleInteraction : undefined} // Handle touch events for mobile
      onMouseEnter={handleMouseEnter} // Handle hover for desktop
      onMouseLeave={handleMouseLeave} // Reset overlay on mouse leave for desktop
    >
      <div
        className="w-full max-h-96 aspect-video no-scrollbar relative overflow-x-hidden overflow-scroll"
        onScroll={isMobile ? handleInteraction : undefined} // Handle scroll events for mobile
      >
        <div className="absolute w-full h-full">
          <Image
            src={src}
            alt="NextJS"
            layout="responsive"
            width={1600}
            height={900}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: isOverlayVisible ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {isMobile ? (
          <h3 className="text-lg font-bold text-white">
            Click and drag to scroll page
          </h3>
        ) : (
          <h3 className="text-lg font-bold text-white">Hover to scroll page</h3>
        )}
        <Mouse size={24} className="text-white mt-4 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default DesktopDemo;
