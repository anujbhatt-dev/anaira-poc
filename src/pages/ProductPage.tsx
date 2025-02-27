"use client"
import Product from '@/components/Product';
import ProductTabs from '@/components/ProductTabs';
import SimilarProduct from '@/components/SimilarProduct';
import React from 'react'

function ProductPage() {

  return (
    <div className='px-[5rem] py-[1rem]'>
        <Product/>
        <ProductTabs/>
        <SimilarProduct/>
    </div>
  )
}

export default ProductPage