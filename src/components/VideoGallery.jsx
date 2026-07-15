import { useState } from 'react'
import { videoData, videoCategories } from '../data/projectsData'
import './VideoGallery.css'

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [playingVideo, setPlayingVideo] = useState(null)

  const filtered = activeCategory === 'all'
    ? videoData
    : videoData.filter(v => {
        const cat = videoCategories.find(c => c.label === v.category)
        return cat && cat.id === activeCategory
      })

  return (
    <div className="video-gallery">
      <div className="video-gallery__tabs">
        <button
          className={`video-gallery__tab ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          全部
        </button>
        {videoCategories.map(cat => (
          <button
            key={cat.id}
            className={`video-gallery__tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="video-gallery__grid">
        {filtered.map((video, i) => (
          <div
            key={i}
            className={`video-gallery__card ${playingVideo === i ? 'is-playing' : ''}`}
            onClick={() => setPlayingVideo(playingVideo === i ? null : i)}
          >
            {playingVideo === i ? (
              <video
                className="video-gallery__video"
                src={video.file}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <>
                <div className="video-gallery__poster">
                  <img src={video.poster} alt={video.name} />
                  <div className="video-gallery__play">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="rgba(0,0,0,0.4)"/>
                      <polygon points="10,7 17,12 10,17" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="video-gallery__info">
                  <h4>{video.name}</h4>
                  <span className="video-gallery__size">{video.size}</span>
                  <span className="video-gallery__cat">{video.category}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="video-gallery__empty">
          <p>暂无此分类的视频</p>
        </div>
      )}
    </div>
  )
}
