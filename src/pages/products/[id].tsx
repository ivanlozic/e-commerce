import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const IMAGE_SIZE = 300

export default function ProductItemPage() {
  return (
    <div className='productContainer'>
      <h2>Product name</h2>
      <Link href='/products/0'>
      <Image
        className='productContainer__img'
        src='/assets/images/1.jpg'
        alt=''
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
      </Link>
   
      <p>
        Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fugit earum deserunt quod, natus debitis tempora? Sunt illum quos
        aspernatur inventore.
      </p>
      <div className='productContainer__buttonBox'>
        <p>Price: 36e</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
