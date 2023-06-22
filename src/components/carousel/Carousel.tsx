import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Carousel = () => {
  const carouselImages = [
    '/assets/images/slider/1.jpg',
    '/assets/images/slider/2.jpg',
    '/assets/images/slider/3.jpg',
    '/assets/images/slider/4.jpg'
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
    )
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1
    )
  }

  return (
    <div className='carousel'>
      <div className='carousel-slides'>
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <Image
              src={carouselImages[currentSlide]}
              alt={`Slide ${index}`}
              width={1000}
              height={400}
              layout="responsive"
              className="carousel-image"
            />
          </div>
        ))}
      </div>
      <button className='carousel-prev' onClick={handlePrevSlide}>
        Previous
      </button>
      <button className='carousel-next' onClick={handleNextSlide}>
        Next
      </button>
    </div>
  )
}

export default Carousel
