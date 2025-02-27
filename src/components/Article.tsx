import { articles } from '@/utils/blogSeed'
import React from 'react'

export default function Article() {
const articleContent = articles[0]
  return (
    <div className=''>
        <h1 className='text-7xl mb-8 leading-normal'>            
            {articleContent.title}
        </h1>
        <img className='h-[60vh] w-full object-cover ' src="/4.jpg" alt="" />
        <div className='flex py-2 items-center justify-between'>
            <h4 className='opacity-50'> {articleContent.date}</h4>
            <h4 className=''>Author: <span className='text-green-400'>{articleContent.author}</span></h4>
        </div>
        <p className='mb-8 leading-8 text-[1.1rem] opacity-60'>
            {articleContent.content}
        </p>
        <p className='mb-8 leading-8 text-[1.1rem] opacity-60'>
            {articleContent.content}
        </p>
    </div>
  )
}
