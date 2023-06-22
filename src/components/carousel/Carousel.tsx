import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Carousel = () => {
  const carouselImages = [
    '/assets/images/slider/5.jpg',
    '/assets/images/slider/6.jpg',
    '/assets/images/slider/7.jpg',
    '/assets/images/slider/8.jpg'
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const handleNextSlide = () => {
    if (transitioning) return
    setTransitioning(true)
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
    )
  }

  const handlePrevSlide = () => {
    if (transitioning) return
    setTransitioning(true)
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1
    )
  }
  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setTransitioning(false)
    }, 1000)

    return () => clearTimeout(transitionTimeout)
  }, [currentSlide])

  const slideStyles = {
    display: 'flex',
    width: `${carouselImages.length * 100}%`,
    height: '800px',
    transition: transitioning ? 'opacity 0.5s linear' : 'none',
    transform: `translateX(-${(currentSlide * 100) / carouselImages.length}%)`
  }

  return (
    <div className='carousel'>
      <div className='carousel-slides' style={slideStyles}>
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <div className='carousel-image-container'>
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={200}
                height={200}
                layout='responsive'
                className='carousel-image'
              />
            </div>
          </div>
        ))}
      </div>
      <button className='carousel-prev' onClick={handlePrevSlide}>
        &lt;
      </button>
      <button className='carousel-next' onClick={handleNextSlide}>
        &gt;
      </button>
    </div>
  )
}

export default Carousel
