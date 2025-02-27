import AnimateHeading from '@/components/AnimateHeading'
import Article from '@/components/Article'
import HorizontalMarquee from '@/components/HorizontalMarque'
import React from 'react'

export default function ArticlePage() {
  return (
    <div>
    <div className='max-w-[50vw] mx-auto font-sans mt-10'>
    <Article/>
    </div>
    <div className='flex justify-start gap-x-8 px-[10rem]'>
    <AnimateHeading text="Products"/>
    <AnimateHeading text="you"/>
    <AnimateHeading text="may"/>
    <AnimateHeading text="like"/>
    </div>
    
    <HorizontalMarquee/>
    </div>
  )
}
