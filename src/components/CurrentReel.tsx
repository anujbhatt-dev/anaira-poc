"use client";
import { X } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function CurrentReel() {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility
  const reelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReelIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000); // Change reel every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  useGSAP(() => {
    if (reelRef.current) {
      gsap.from(reelRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        delay: 3, // 3-second delay before the animation starts
        ease: 'power3.out',
      });
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Hide the reel when cross is clicked
  };

  if (!isVisible) return null; // If not visible, return nothing (remove component)

  return (
    <div
      ref={reelRef}
      className='fixed bottom-0 left-0 m-4 bg-slate-950 h-[25rem] aspect-[9/16] z-50 overflow-hidden shadow-sm shadow-black'
    >
      {/* Display the current reel */}
      <video 
        src={`reel${4 - currentReelIndex}.mp4`} 
        autoPlay 
        loop 
        muted 
        className='w-full h-full object-cover'
      />
      <X 
        className='absolute right-0 top-0 h-5 w-5 m-1 cursor-pointer' 
        onClick={handleClose} // Trigger close on click
      />
    </div>
  );
}
