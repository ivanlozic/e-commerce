import React from 'react'
import Image from 'next/image'

const IMAGE_SIZE = 300

export default function ProductItem() {
  return (
    <div className='productContainer'>
      <h1>Product name</h1>
      <Image
        src='/assets/images/1.jpg'
        alt=''
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
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
