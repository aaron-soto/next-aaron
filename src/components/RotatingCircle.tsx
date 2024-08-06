"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

function RotatingCircle() {
  const rotation = useMotionValue(0);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [initialAngle, setInitialAngle] = useState<number | null>(null);
  const [startRotation, setStartRotation] = useState<number>(0);

  const calculateAngle = (event: PointerEvent) => {
    if (!circleRef.current) return 0;

    const rect = circleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    // Calculate the angle and convert it to degrees
    const angle = Math.atan2(deltaY, deltaX);
    return angle * (180 / Math.PI);
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (initialAngle === null) return;

    // Calculate current angle
    const currentAngle = calculateAngle(event);

    // Calculate the change in angle from initial click
    const angleChange = currentAngle - initialAngle;

    // Update the rotation based on the initial rotation and angle change
    rotation.set(startRotation + angleChange);
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    // Set the initial angle and starting rotation when the user starts dragging
    const angle = calculateAngle(event.nativeEvent);
    setInitialAngle(angle);
    setStartRotation(rotation.get());

    // Add the native pointermove event listener
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const handlePointerUp = () => {
    // Remove the pointermove event listener when the pointer is released
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);

    // Reset initial angle
    setInitialAngle(null);
  };

  return (
    <div className="relative w-[200px] h-[200px]">
      <motion.div
        ref={circleRef}
        className="w-full h-full rounded-full bg-white border relative flex justify-between items-center cursor-grab"
        style={{ rotate: rotation }}
        onPointerDown={handlePointerDown}
      >
        <div className="w-[40px] h-[40px] hover:scale-110 flex justify-center items-center absolute transition-all duration-200 top-[10%] left-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sun"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </div>
        <div className="w-[40px] h-[40px] hover:scale-110 flex justify-center items-center absolute transition-all duration-200 bottom-[10%] left-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

export default RotatingCircle;
