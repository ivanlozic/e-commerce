import Link from 'next/link'
import React, { useState } from 'react'

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
              <Link href='/login'>
                Sign in
              </Link>
            </li>
            <li>
              New customer? <Link href='/registration'> Start here</Link>
            </li>
          </ul>
        )}
      </div>
      <div>
        <h3>Cart</h3>
      </div>
    </nav>
  )
}

export default Navbar
