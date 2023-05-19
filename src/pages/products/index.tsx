import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import ProductItem from '@/components/productItem/ProductItem'

export default function ProductsPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='productsList'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}
