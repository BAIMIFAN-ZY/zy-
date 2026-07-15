import { useState, useEffect, useRef, useCallback } from 'react'
import './Carousel.css'

export default function Carousel({ images, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!autoPlay || isHovered || images.length <= 1) return
    timerRef.current = setInterval(next, interval)
    return () => clearInterval(timerRef.current)
  }, [autoPlay, isHovered, interval, next, images.length])

  if (!images || images.length === 0) return null

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel__track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, i) => (
          <div key={i} className="carousel__slide">
            <img src={img.src} alt={img.label || ''} />
            {img.label && <span className="carousel__label">{img.label}</span>}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="上一个">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="下一个">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          <div className="carousel__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`第${i + 1}张`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
