"use client"
import { motion } from 'framer-motion';
import { useCursorStore } from '@/store/useCursorStore';
import { Product, productsData } from '@/utils/productsData';
import { useRouter } from 'next/navigation';
import { Circle, Plus, Star } from 'lucide-react';



  

const ZigzagGrid = () => {  
  const { scaleUp, scaleDown} = useCursorStore()
  const router = useRouter();

  const handleCursorEnter = ()=>{
      scaleUp("View Product")
  }

  const handleCursorLeave = ()=>{
    scaleDown()
  }

  const handleClick = (product:Product) => {
    handleCursorLeave()
    router.push(`/f/f/${product.name.replaceAll(" ","-").toLowerCase()}`)
  };


  

  return (
    <section className="pt-0">
      <div className="mx-auto">        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[4rem]">
        {productsData.map((product, index) => (
                    <motion.div
                    key={product.id}
                    className={`relative overflow-hidden bg-white shadow-lg ₹{
                        index % 2 === 0 ? 'transform translate-x-4' : 'transform -translate-x-4'
                    } cursor-pointer`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 50 }}
                    >
                    <img
                        src={product.image+product.id+".webp"}
                        alt={product.name}
                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"                        
                        onClick={()=>handleClick(product)}                        
                        onMouseEnter={handleCursorEnter}
                        onMouseLeave={handleCursorLeave}
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-white/80 backdrop-blur-sm text-black w-full">
                        <h3 className="text-3xl font-semibold">{product.name}</h3>
                        <p className="text-md text-zinc-950 font-sans">{product.description}</p>
                        <div className='flex gap-4 justify-between items-baseline'>
                            <p className="mt-2 text-md font-bold font-sans"><span className=' text-2xl'>₹{product.price}</span> <span className='line-through  text-[#497D74]'> ₹{ product.price * 2}</span></p>
                            <button className=' gap-x-4 p-2 px-4 bg-[beige] uppercase font-bold font-sans tracking-widest flex'><Plus className='font-extrabold'/> quick add</button>
                        </div>
                    </div>
                    <div className='absolute top-0 right-0 p-2 flex items-center bg-black/50 backdrop-blur-sm'>
                        <Star className='fill-[#B9B28A] text-[#B9B28A] h-5 w-5'/>
                        <Star className='fill-[#B9B28A] text-[#B9B28A] h-5 w-5'/>
                        <Star className='fill-[#B9B28A] text-[#B9B28A] h-5 w-5'/>
                        <Star className='fill-[#B9B28A] text-[#B9B28A] h-5 w-5'/>
                        <Star className='fill-[#B9B28A] text-[#B9B28A] h-5 w-5'/>
                        <span className='ml-2 font-sans font-semibold'>{"("} 10 {")"}</span>
                    </div>
                    <div className='absolute top-0 left-0 p-2 flex items-center bg-black/50 backdrop-blur-sm gap-x-1'>
                        <Circle className='fill-[#8a7503] h-5 w-5'/>
                        <Circle className='fill-[#e1c7ff] h-5 w-5'/>
                        <Circle className='fill-[#fffedf] h-5 w-5'/>
                        <span className='ml-2 font-sans font-semibold'>+3</span>
                    </div>
                    </motion.div>
                ))}
        </div>
      </div>
    </section>
  );
};

export default ZigzagGrid;
