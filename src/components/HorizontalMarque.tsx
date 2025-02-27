"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productsData } from "@/utils/productsData";
import { div } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

function HorizontalMarquee() {
  const HorizontalRef = useRef<HTMLHeadingElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!HorizontalRef.current || !wrapperRef.current) return;

    let textWidth = HorizontalRef.current.offsetWidth;
    let viewportWidth = window.innerWidth;

    gsap.to(HorizontalRef.current, {
      x: `-${textWidth - viewportWidth}px`, // Move based on text width
      duration: 10,
      // ease:"back.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 0",
        end: "top -200%",
        scrub: 1,
        // markers: true,
        pin: wrapperRef.current, // Pinning the wrapper instead of text
      },
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="h-[100vh] w-[100vw] flex items-center overflow-hidden bg-cover bg-center relative"      
    >
      <div className="h-full w-full absolute top-0 left-0 -z-10">
            {/* <img src="5.jpg" alt="" className="w-full h-full object-cover" /> */}
            <div className="h-full w-full backdrop-blur-sm absolute top-0 left-0 "></div>
      </div>
      <div
        ref={HorizontalRef}
        className="px-[50vw]"        
      >
        <div className="w-[300vw] flex gap-x-10">
            {productsData.map((product, i)=>(
              <div className="relative" key={product.name+i} >
                  <img className="h-[70vh] w-[60vh] object-cover" src={`/${product.image+(i+1)}.webp`} alt="" />
                  <div className="absolute bottom-0 left-0 p-6 bg-white/40 backdrop-blur-sm text-black w-full">
                        <h3 className="text-4xl font-semibold">{product.name}</h3>
                        <p className="text-xl text-zinc-950 font-sans">{product.description}</p>
                        <p className="mt-2 text-lg font-bold font-sans"><span className=' text-4xl'>₹{product.price}</span> <span className='line-through opacity-50'> ₹{ product.price * 2}</span></p>
                    </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalMarquee;
