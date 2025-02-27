"use client";
import { useCursorStore } from "@/store/useCursorStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {  useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const {isActive, innerHtml} = useCursorStore()

  useGSAP(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed -top-[1.2rem] -left-[1.2rem] ${isActive?"w-[10rem] h-[10rem]":"w-6 h-6"} duration-150 bg-white/60 backdrop-blur-sm rounded-full pointer-events-none z-50 flex justify-center items-center text-center text-[1.2rem]`}
    >
        {isActive && innerHtml}
    </div>
  );
}

export default CustomCursor;
