import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItemToCart,
  decreaseItemQuantity,
  increaseItemQuantity
} from '../reduxStore/reducers/cartReducer'
import Link from 'next/link'
import { RootState } from '../reduxStore/store'

const IMAGE_SIZE = 400

export default function ProductItemPage() {
  const [imageSrc, setImageSrc] = useState('/assets/images/1.jpg')
  const [addToCartClicked, setAddToCartClicked] = useState(false)
  const cartItems = useSelector((state: RootState) => state.cart)
  const [quantity, setQuantity] = useState(0)
  const productId = 1
  const dispatch = useDispatch()

  useEffect(() => {
    const cartItem = cartItems.find((item: any) => item.id === productId)
    if (cartItem) {
      setQuantity(cartItem.quantity)
    }
  }, [cartItems, productId])

  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(productId))
  }

  const handleIncreaseQuantity = () => {
    dispatch(increaseItemQuantity(productId))
  }

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

    setAddToCartClicked(true)

    setTimeout(() => {
      setAddToCartClicked(false)
    }, 100)
  }

  return (
    <div className='productPageContainer'>
      <Link href={'/products'} className='productPageContainer__link'>
        Back to products
      </Link>
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
      <div className='productPageContainer__textContainer'>
        <h2>Product name</h2>
        <p>
          Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Fugit earum deserunt quod, natus debitis tempora? Sunt illum quos
          aspernatur inventore.
        </p>
        <div className='productPageContainer__buttonBox'>
          <p>Price: 36e</p>
          <button
            className={
              addToCartClicked ? 'productPageContainer__buttonBox-clicked' : ''
            }
            onClick={handleAddToCart}
          >
            Add to cart
          </button>

          <div className='productPageContainer__buttonBox-quantity'>
            <button onClick={handleDecreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseQuantity}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
