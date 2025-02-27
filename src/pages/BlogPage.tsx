import AnimateHeading from '@/components/AnimateHeading'
import { articles } from '@/utils/blogSeed'
import Link from 'next/link'
import React from 'react'

export default function BlogPage() {
  return (
    <div className='px-[1rem] md:px-[10rem] pb-[5rem]'>
        <AnimateHeading text="Blog" />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-6 xl:gap-10'>
            {articles.map((article,i)=>(
              <div key={article.id+i} className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-950">
              <img className="w-full h-48 object-cover" src={`/${(i%3)+2}.jpg`} alt="Blog Image"/>
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl  mb-2 truncate">{article.title}</h2>
                <p className=" text-sm truncate opacity-60">
                  {article.content}
                </p>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className=" text-sm">{article.date}</span>
                <Link href="/blog/blogSlug" className="text-blue-500 text-sm hover:underline">Read More</Link>
              </div>
            </div>
            
            ))}
        </div>
    </div>
  )
}
