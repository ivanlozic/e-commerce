import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'
import Product from '@/components/productItem/ProductItem'

export default function ProductsPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Product />
      </div>
    </>
  )
}
