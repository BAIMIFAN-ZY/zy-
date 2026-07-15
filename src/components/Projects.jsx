import { useState } from 'react'
import { projectsData } from '../data/projectsData'
import ProjectDetail from './ProjectDetail'
import './Projects.css'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">作品集</span>
          <h2 className="section-title">精选项目</h2>
          <p className="section-subtitle">点击卡片查看完整项目详情，含主图轮播、海报与详情页</p>
        </div>

        <div className="projects__grid">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="projects__card"
              onClick={() => setSelectedProject(project)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            >
              <div className="projects__card-image">
                <img src={project.cover} alt={project.title} loading="lazy" />
                <div className="projects__card-overlay">
                  <span className="projects__card-category">{project.category}</span>
                </div>
                <div className="projects__card-hover">
                  <span>查看详情</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
              <div className="projects__card-info">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.desc}</p>
                <div className="projects__card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="projects__card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
