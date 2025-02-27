"use client";
import { X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function CurrentReel() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Initially hidden
  const reelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show component after 3 seconds

    return () => clearTimeout(delayTimeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReelIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000); // Change reel every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (reelRef.current) {
      gsap.from(reelRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [isVisible]); // Run animation when `isVisible` changes

  const handleClose = () => {
    setIsVisible(false); // Hide the reel when cross is clicked
  };

  if (!isVisible) return null; // Don't render the component until it's visible

  return (
    <div
      ref={reelRef}
      className="fixed bottom-0 left-0 m-4 bg-slate-950 h-[25rem] aspect-[9/16] z-50 overflow-hidden "
    >
      {/* Display the current reel */}
      <video
        src={`reel${4 - currentReelIndex}.mp4`}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <X
        className="absolute right-0 top-0 h-5 w-5 m-1 cursor-pointer"
        onClick={handleClose} // Trigger close on click
      />
    </div>
  );
}
