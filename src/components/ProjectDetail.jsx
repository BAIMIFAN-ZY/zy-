import { useEffect } from 'react'
import Carousel from './Carousel'
import VideoGallery from './VideoGallery'
import './ProjectDetail.css'

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  if (!project) return null
  const { detail } = project
  const hasBanners = detail.banners && detail.banners.length > 0
  const hasMainImages = detail.mainImages && detail.mainImages.length > 0
  const hasPosters = detail.posters && detail.posters.length > 0
  const hasDetails = detail.details && detail.details.length > 0
  const isVideo = project.type === 'video'

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={e => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="关闭">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="detail-header">
          <h2 className="detail-title">{project.title}</h2>
          <span className="detail-category">{project.category}</span>
        </div>

        <div className="detail-summary">
          <p>{detail.summary}</p>
          <div className="detail-tags">
            {project.tags.map(tag => (
              <span key={tag} className="detail-tag">{tag}</span>
            ))}
          </div>
        </div>

        {isVideo ? (
          <VideoGallery />
        ) : (
          <div className="detail-body">
            {hasBanners && (
              <section className="detail-section">
                <h3 className="detail-section-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  主图与 Banner
                </h3>
                <Carousel images={detail.banners} />
              </section>
            )}

            {hasMainImages && (
              <section className="detail-section">
                <h3 className="detail-section-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  产品主图
                </h3>
                <Carousel images={detail.mainImages} />
              </section>
            )}

            {hasPosters && (
              <section className="detail-section">
                <h3 className="detail-section-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  海报设计
                </h3>
                <div className="detail-gallery-vertical">
                  {detail.posters.map((img, i) => (
                    <div key={i} className="detail-gallery-item">
                      <img src={img.src} alt={img.label} loading="lazy" />
                      <span className="detail-gallery-label">{img.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {hasDetails && (
              <section className="detail-section">
                <h3 className="detail-section-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  详情页
                </h3>
                <div className="detail-gallery-vertical">
                  {detail.details.map((img, i) => (
                    <div key={i} className="detail-gallery-item">
                      <img src={img.src} alt={img.label} loading="lazy" />
                      <span className="detail-gallery-label">{img.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
