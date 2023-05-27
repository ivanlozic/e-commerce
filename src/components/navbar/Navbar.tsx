import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/pages/reduxStore/store'
import { login, logout } from '@/pages/reduxStore/reducers/authReducer'
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const cartItems = useSelector((state: RootState) => state.cart)
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  const handleMouseOver = () => {
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }
  const handleLogout = () => {
    // Handle the logout logic here
    dispatch(logout())
  }

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/products'>Products</Link>
        </li>
        <li>
          <Link href='/new-collection'>New collection</Link>
        </li>
        <li>
          <Link href='/about'>About us</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
      <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        {isLoggedIn ? (
          <div>
            <Image
              src='/assets/images/profile-icon.png'
              alt='Profile'
              width={30}
              height={30}
            />
            {isDropdownOpen && (
              <ul className='dropdown'>
                <li>
                  <Link href='/edit-profile'>Edit Profile</Link>
                </li>
                <li>
                  <Link href='/my-reservations'>My Reservations</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div>
            <button>Log in</button>
            {isDropdownOpen && (
              <ul className='dropdown'>
                <li>
                  <Link href='/logInPage'>Sign in</Link>
                </li>
                <li>
                  New customer? <Link href='/signUpPage'> Start here</Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
      <div className='cart'>
        <div className='cart__content'>
          <p>{cartItems.length}</p>
          <Image
            src='/assets/images/cart.png'
            alt='cart'
            width={30}
            height={30}
          />
        </div>
        <h3>Cart</h3>
      </div>
    </nav>
  )
}

export default Navbar
