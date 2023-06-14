import {
  removeItemFromCart,
  decreaseItemQuantity,
  increaseItemQuantity
} from '@/pages/reduxStore/reducers/cartReducer'
import { RootState } from '@/pages/reduxStore/store'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleDeleteItemFromCart = (item: number) => {
    dispatch(removeItemFromCart(item))
  }

  return (
    <div className='cartContainer'>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className='cartContainer__productBox' key={item.id}>
              <div className='cartContainer__productBox-sad'>
                <div className='cartContainer__productBox-sad'>
                  <Image
                    src={item.image}
                    alt='image'
                    width={100}
                    height={100}
                  />
                  <div className='cartContainer__productBox-sad__quantity'>
                    <h3>{item.name}</h3>
                    <div>
                      <button
                        onClick={() => dispatch(decreaseItemQuantity(item.id))}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => dispatch(increaseItemQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className='cartContainer__productBox-sad__trash'>
                  <Image
                    src='/assets/images/trash.png'
                    alt='Trashcan'
                    width={30}
                    height={30}
                    onClick={() => handleDeleteItemFromCart(item.id)}
                  />
                  <p>{item.price * item.quantity} $</p>
                </div>
              </div>
            </div>
          ))}
          <div className='cartContainer__checkout'>
            <button className='cartContainer__checkout-button'>
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
