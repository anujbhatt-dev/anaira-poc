"use client"
import Product from '@/components/Product';
import ProductTabs from '@/components/ProductTabs';
import SimilarProduct from '@/components/SimilarProduct';
import { productsData } from '@/utils/productsData'
import { CarTaxiFront, Plus, Star, StarHalf } from 'lucide-react';
import React, { useState } from 'react'

type Props = {}

function ProductPage({}: Props) {

  return (
    <div className='px-[5rem] py-[1rem]'>
        <Product/>
        <ProductTabs/>
        <SimilarProduct/>
    </div>
  )
}

export default ProductPage