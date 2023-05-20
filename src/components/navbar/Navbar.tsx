import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleMouseOver = () => {
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
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
        <button>Sign in</button>

        {isDropdownOpen && (
          <ul className='dropdown'>
            <li>
              <Link href='/signInPage'>Sign in</Link>
            </li>
            <li>
              New customer? <Link href='/signUpPage'> Start here</Link>
            </li>
          </ul>
        )}
      </div>
      <div className='cart'>
        <div className='cart__content'>
          <p>0</p>
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
