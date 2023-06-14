import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/pages/reduxStore/reducers/cartReducer';

const IMAGE_SIZE = 300

export default function ProductItem() {
  const productId = 1;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      id: productId,
      name: 'Product name',
      description: 'dasdas',
      price: 36,
      quantity:1,
      image: '/assets/images/1.jpg'
    };

    dispatch(addItemToCart(product));
  };

  return (
    <div className='productContainer'>
      <h2>Product name</h2>
      <Link href={`/products/${productId}`}>
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
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  )
}
