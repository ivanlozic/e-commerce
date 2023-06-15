import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../reduxStore/reducers/cartReducer'
import Link from 'next/link'

const IMAGE_SIZE = 400

export default function ProductItemPage() {
  const [imageSrc, setImageSrc] = useState('/assets/images/1.jpg')
  const productId = 1
  const dispatch = useDispatch()


  const smallImageUrls = [
    '/assets/images/1.jpg',
    '/assets/images/trash.png',
    '/assets/images/1.jpg',
    '/assets/images/1.jpg'
  ]

  const handleSmallImageClick = (imageSrc: string) => {
    setImageSrc(imageSrc)
  }


  const handleAddToCart = () => {
    const product = {
      id: productId,
      name: 'Product name',
      description: 'dasdas',
      price: 36,
      quantity: 1,
      image: '/assets/images/1.jpg'
    }

    dispatch(addItemToCart(product))
  }

  return (
    <div className='productPageContainer'>
      <Link href={'/products'} className='productPageContainer__link'>Back to products</Link> 
      <div className='productPageContainer_img-container'>
      {smallImageUrls.map((imageUrl, index) => (
          <Image
            key={index}
            width={70}
            height={70}
            className='productPageContainer__img-s'
            src={imageUrl}
            alt={`Small image ${index}`}
            onClick={() => handleSmallImageClick(imageUrl)}
          />
        ))}
      </div>
      <Image
        className='productPageContainer__img'
        src={imageSrc}
        alt=''
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
      <div>
        <h2>Product name</h2>
        <p>
          Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Fugit earum deserunt quod, natus debitis tempora? Sunt illum quos
          aspernatur inventore.
        </p>
        <div className='productPageContainer__buttonBox'>
          <p>Price: 36e</p>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
