import Cart from '@/components/cart/Cart'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import ProductItem from '@/components/productItem/ProductItem'

export default function ProductsPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='products'>
      <div className='products__list'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className='products__cart'>
        <Cart />
      </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}
