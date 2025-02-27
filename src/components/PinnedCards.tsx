"use client"
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimateHeading from './AnimateHeading';

gsap.registerPlugin(ScrollTrigger)

function PinnedCards() {
  useGSAP(() => {
    gsap.utils.toArray(".card").forEach(card => {
      gsap.set(card as HTMLElement, { transformOrigin: "center" });
      gsap.to(card as HTMLElement, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card as gsap.DOMTarget,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        //   markers: true
        }
      });
    });
  });

  return (
    <main className='w-full flex flex-col gap-y-[5rem] items-center pt-[1vh] pb-[10rem] px-[10rem]'>
      <div> 
            <div className='w-[100vw] md:px-[10rem] px-[1rem] text-right'>
              <AnimateHeading text="Best Seller"/>
            </div>
      </div>  
      <div className='card sticky top-[10vh] md:w-[60vw] md:h-[70vh] px-[20px] py-[15vh] overflow-hidden self-start' >        
        <img src="/1.jpeg" alt="Classic Tailoring" className='h-auto w-full -z-10 absolute top-0 left-0 object-cover' />
        <div className="absolute bottom-0 left-0 p-6 bg-black/40 backdrop-blur-sm text-white w-full">
            <h3 className="text-4xl font-semibold">Silk Blouse</h3>
            <p className="text-xl text-zinc-100 font-sans">Luxurious silk</p>
            <p className="mt-2 text-lg font-bold font-sans"><span className=' text-4xl'>₹1234</span> <span className='line-through opacity-50'> ₹2468</span></p>
        </div>
      </div>

      <div className='card sticky top-[10vh] md:w-[60vw] md:h-[70vh] px-[20px] py-[15vh] overflow-hidden self-end' >        
        <img src="/2.jpg" alt="Classic Tailoring" className='h-auto w-full -z-10 absolute top-0 left-0 object-cover' />
        <div className="absolute bottom-0 left-0 p-6 bg-black/40 backdrop-blur-sm text-white w-full">
            <h3 className="text-4xl font-semibold">Silk Blouse</h3>
            <p className="text-xl text-zinc-100 font-sans">Luxurious silk</p>
            <p className="mt-2 text-lg font-bold font-sans"><span className=' text-4xl'>₹1234</span> <span className='line-through opacity-50'> ₹2468</span></p>
        </div>
      </div>

      <div className='card sticky top-[10vh] md:w-[60vw] md:h-[70vh] px-[20px] py-[15vh] overflow-hidden self-start' >        
        <img src="/3.jpg" alt="Classic Tailoring" className='h-auto w-full -z-10 absolute top-0 left-0 object-cover' />
        <div className="absolute bottom-0 left-0 p-6 bg-black/40 backdrop-blur-sm text-white w-full">
            <h3 className="text-4xl font-semibold">Silk Blouse</h3>
            <p className="text-xl text-zinc-100 font-sans">Luxurious silk</p>
            <p className="mt-2 text-lg font-bold font-sans"><span className=' text-4xl'>₹1234</span> <span className='line-through opacity-50'> ₹2468</span></p>
        </div>
      </div>

      <div className='card sticky top-[10vh] md:w-[60vw] md:h-[70vh] px-[20px] py-[15vh] overflow-hidden self-end' >        
        <img src="/4.jpg" alt="Classic Tailoring" className='h-auto w-full -z-10 absolute top-0 left-0 object-cover' />
        <div className="absolute bottom-0 left-0 p-6 bg-black/40 backdrop-blur-sm text-white w-full">
            <h3 className="text-4xl font-semibold">Silk Blouse</h3>
            <p className="text-xl text-zinc-100 font-sans">Luxurious silk</p>
            <p className="mt-2 text-lg font-bold font-sans"><span className=' text-4xl'>₹1234</span> <span className='line-through opacity-50'> ₹2468</span></p>
        </div>
      </div>
    </main>
  )
}

export default PinnedCards;
