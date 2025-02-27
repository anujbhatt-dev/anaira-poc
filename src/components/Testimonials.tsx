"use client"
import { testimonials } from '@/utils/testimonySeed'
import React, { useRef } from 'react'
import AnimateHeading from './AnimateHeading'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(()=>{
    gsap.from("#testimonial-card-left",{
        opacity:0,
        duration:1,        
        transform:"translateX(80%)",
        ease:"bounce.out",
        stagger:1,
        scrollTrigger:{
          trigger:containerRef.current,
          scroller:"body",
          start: "top 80%",
          end: "bottom 80%",
        }
    })
    gsap.from("#testimonial-card-right",{
      opacity:0,
      duration:1,      
      transform:"translateX(-80%)",
      ease:"bounce.out",
      stagger:1,
      scrollTrigger:{
        trigger:containerRef.current,
        scroller:"body",
        start: "top 80%",
        end: "bottom 80%",
      }
    })
    gsap.from("#progress-down",{
      duration:1,      
      transform:"translatey(100%)",
      ease:"power4.out",
      scrollTrigger:{
        trigger:containerRef.current,
        scroller:"body",
        start: "top 50%",
      }
    })
  },{dependencies:[containerRef]})


  return (
    <div className='px-[5rem]  mx-auto'>
        <AnimateHeading text="testimonials"/>
        <div ref={containerRef} className='flex flex-col items-center relative pt-[5rem]'>
        <div id="progress-down" className='absolute h-full w-[.5rem] bg-green-600 -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] origin-top'>
              <div className='h-[5rem] w-[5rem] absolute bg-green-600 -translate-x-[50%] -translate-y-[50%] top-[0%] left-[50%] rounded-full'>

              </div>
              <div className='h-[3rem] w-[3rem] absolute bg-green-600 -translate-x-[50%] -translate-y-[50%] top-[16.5%] left-[50%] rounded-full'>

              </div>
              <div className='h-[3rem] w-[3rem] absolute bg-green-600 -translate-x-[50%] -translate-y-[50%] top-[32.5%] left-[50%] rounded-full'>

              </div>
              
              <div className='h-[3rem] w-[3rem] absolute bg-green-600 -translate-x-[50%] -translate-y-[50%] top-[48.5%] left-[50%] rounded-full'>

              </div>

              <div className='h-[3rem] w-[3rem] absolute bg-green-600 -translate-x-[50%] -translate-y-[50%] top-[65%] left-[50%] rounded-full'>

              </div>
              <div className='h-[3rem] w-[3rem] absolute bg-green-600 -translate-x-[50%] -translate-y-[50%] top-[81%] left-[50%] rounded-full'>

              </div>
        </div>
        {
          testimonials.map((testimony, i) => (
            <div id={`testimonial-card-${i%2==0?"left":"right"}`} key={testimony.name + i} className={`${i%2==0?"md:translate-x-[20%]":"md:-translate-x-[20%]"} flex justify-between  gap-4 mb-[10rem] p-[1rem] max-w-[60vw] min-h-[35vh]  relative bg-zinc-950`}> 
                <div className='font-bold text-[10rem] absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] opacity-70 font-sans '>
                  {i+1}
                </div>
                <div  className={`h-[35vh] w-[35vh] flex-shrink-0 relative `} >
                  <img src={`/testimony${i}.jpg`} alt="" className='h-full w-full object-cover'/>
                </div>
                <div className='relative'>
                  <h3 className='text-[2rem] mb-[0.8rem]'>{testimony.name}</h3>
                  <p className='text-xl opacity-40 mb-[2rem] '>{testimony.testimony} {testimony.testimony}  </p>
                  <p className='text-right opacity-90 absolute bottom-0 right-0'>{testimony.occupation}</p>
                </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}
