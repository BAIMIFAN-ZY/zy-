import './Experience.css'

const stats = [
  { value: '1', label: '年经验' },
  { value: '50+', label: '落地项目' },
  { value: '30+', label: '品牌合作' },
  { value: '3', label: '岗位历练' },
]

const experiences = [
  {
    period: '2026.01 - 2026.06',
    company: '珠海奥库商贸有限公司',
    role: 'AI视觉设计实习生',
    desc: '搭建电商AI出图流程，独立完成商品主图、详情页、活动长图等成套视觉50+套，素材效率提升60%',
  },
  {
    period: '2025.06 - 2025.12',
    company: '珠海长隆海洋发展有限公司',
    role: '新媒体运营实习生',
    desc: '负责品牌新媒体账号矩阵，策划全平台种草内容，账号粉丝月增速从5%提升至18%，互动率上涨35%',
  },
  {
    period: '2026.06 - 至今',
    company: '成都银杏酒店管理学院',
    role: '班级校友大使',
    desc: '收集校友发展动态，策划班级活动，协助学校就业办开展校友企业校招与实习推荐',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience__header">
          <span className="section-label">About</span>
          <h2 className="section-title">关于我</h2>
          <p className="section-subtitle">
            文化产业管理专业背景与AIGC设计实战经验的复合型人才，
            擅长将AI生成工具与后期制作技术深度融合，高效产出符合市场需求的创意内容。
          </p>
        </div>

        <div className="experience__grid">
          <div className="experience__profile">
            <div className="experience__avatar-wrapper">
              <img
                className="experience__avatar"
                src="/images/avatar.jpg"
                alt="赵志勇"
              />
              <div className="experience__avatar-ring" />
            </div>
            <h3 className="experience__name">赵志勇</h3>
            <p className="experience__name-sub">Zhao Zhiyong</p>
            <div className="experience__contacts">
              <div className="experience__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>zhiyong1673@163.com</span>
              </div>
              <div className="experience__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>17673411673</span>
              </div>
              <div className="experience__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>湖南省永州市</span>
              </div>
            </div>
          </div>

          <div className="experience__info">
            <div className="experience__stats">
              {stats.map((stat, i) => (
                <div key={stat.label} className="experience__stat">
                  <span className="experience__stat-value">{stat.value}</span>
                  <span className="experience__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="experience__timeline">
              {experiences.map((exp, i) => (
                <div key={i} className="experience__timeline-item">
                  <div className="experience__timeline-dot" />
                  <div className="experience__timeline-content">
                    <span className="experience__timeline-period">{exp.period}</span>
                    <h4 className="experience__timeline-role">{exp.role}</h4>
                    <p className="experience__timeline-company">{exp.company}</p>
                    <p className="experience__timeline-desc">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
