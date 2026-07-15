import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <video
          ref={videoRef}
          className="hero__video"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        />
        <div className="hero__overlay" />
        <div className="hero__gradient" />
      </div>

      <div className="hero__content container">
        <div className="hero__badge">AI 视觉设计师</div>
        <h1 className="hero__title">
          赵志勇
          <span className="hero__title-sub">ZHAO ZHIYONG</span>
        </h1>
        <p className="hero__subtitle">
          AIGC全流程创作 · TVC广告 · 电商设计 · IP设计
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn-primary">
            查看作品
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M11 8L8 5M5 8l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 8 8)"/>
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            联系我
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">滚动探索</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
