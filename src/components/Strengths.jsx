import './Strengths.css'

const strengths = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'AI生成全流程',
    desc: '精通Midjourney、ComfyUI、Stable Diffusion等主流AI工具，建立标准化提示词库，实现批量化、高品质视觉素材生产',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    title: 'TVC广告制作',
    desc: '涵盖分镜设计、AI生成、后期剪辑全流程，从概念到成片一站式交付TVC广告与AI短片内容',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    title: '电商视觉设计',
    desc: '独立完成主图、详情页、活动长图、品牌海报等成套视觉物料，统一品牌视觉规范，提升转化率',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: '品牌IP设计',
    desc: '从角色设定到视觉落地，完成品牌IP全案设计，含主视觉、衍生品、表情包、包装应用等',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: '内容策划+AI联动',
    desc: '内容选题策划与视觉风格联动，AI图文+视频矩阵运营，提升账号粉丝增速与互动率',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: '全链路视觉执行',
    desc: '从概念构思到成品交付，无缝衔接AI生成与后期软件，高效把控视觉设计的每一环节',
  },
]

export default function 优势() {
  return (
    <section id="strengths" className="strengths">
      <div className="container">
        <div className="strengths__header">
          <span className="section-label">优势</span>
          <h2 className="section-title">个人优势</h2>
          <p className="section-subtitle">
            复合型AI视觉设计师，以技术驱动创意，高效交付高品质视觉作品
          </p>
        </div>

        <div className="strengths__grid">
          {strengths.map((item, i) => (
            <div key={i} className="strengths__card">
              <div className="strengths__icon">{item.icon}</div>
              <h3 className="strengths__title">{item.title}</h3>
              <p className="strengths__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
