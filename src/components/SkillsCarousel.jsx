import { useState, useRef, useEffect } from "react"
import "./SkillsCarousel.css"

const skillIcons = [
  { src: "/images/skills/34242f3b760690c87bfb681cfffa0bc4~tplv-a9rns2rl98-pc_smart_face_crop-v1_512_384.png", name: "AI 工具", width: 120 },
  { src: "/images/skills/a53283794648011cbaec9f669fbb36b0~tplv-a9rns2rl98-pc_smart_face_crop-v1_512_384.png", name: "创意工具", width: 120 },
  { src: "/images/skills/e564719da2987736b58afde68cda5240~tplv-a9rns2rl98-pc_smart_face_crop-v1_512_384.png", name: "生成工具", width: 120 },
  { src: "/images/skills/8068b132a46b40e4596cef4118d2fb9c~tplv-be4g95zd3a-image.jpg", name: "后期处理", width: 120 },
  { src: "/images/skills/add397760bb01e0b2882009a677ad445~tplv-be4g95zd3a-image.jpg", name: "视频编辑", width: 120 },
  { src: "/images/skills/c0b628886e59d49c32a5de29bb43c2f3~tplv-be4g95zd3a-image.jpg", name: "设计工具", width: 120 },
  { src: "/images/skills/c8e4bb78a46f855db3d7c478b6551540~tplv-be4g95zd3a-image.jpg", name: "创意套件", width: 120 },
  { src: "/images/skills/DM_20260713023310_001.webp", name: "AI 视觉", width: 120 },
  { src: "/images/skills/DM_20260713023310_002.webp", name: "AI 调色", width: 120 },
  { src: "/images/skills/DM_20260713023310_003.webp", name: "AI 渲染", width: 120 },
  { src: "/images/skills/DM_20260713023310_004.webp", name: "AI 模型", width: 120 },
  { src: "/images/skills/DM_20260713023310_005.webp", name: "AI 动画", width: 120 },
  { src: "/images/skills/DM_20260713023310_006.webp", name: "AI 合成", width: 120 },
  { src: "/images/skills/DM_20260713023310_007.webp", name: "AI 工作流", width: 120 },
  { src: "/images/skills/DM_20260713023431_001.webp", name: "AI 素材", width: 120 },
  { src: "/images/skills/DM_20260713024803_001.webp", name: "AI 设计", width: 120 },
  { src: "/images/skills/DM_20260713024855_001.webp", name: "创意产出", width: 120 },
  { src: "/images/skills/DM_20260713024855_002.webp", name: "视觉表达", width: 120 },
]

const tools = [
  { name: "ChatGPT", icon: "R", color: "#00d4ff" },
  { name: "Deepseek", icon: "D", color: "#7c3aed" },
  { name: "Midjourney", icon: "M", color: "#ff6b6b" },
  { name: "ComfyUI", icon: "C", color: "#ffd93d" },
  { name: "Photoshop", icon: "P", color: "#001e36" },
  { name: "Premiere Pro", icon: "Pr", color: "#9999ff" },
  { name: "剪映", icon: "Cc", color: "#00b894" },
  { name: "达芬奇", icon: "Dv", color: "#e17055" },
  { name: "C4D", icon: "C4", color: "#a29bfe" },
  { name: "即梦", icon: "J", color: "#fd79a8" },
  { name: "Illustrator", icon: "Ai", color: "#ff9ff3" },
  { name: "Stable Diffusion", icon: "SD", color: "#00cec9" },
]

export default function SkillsCarousel() {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    let animationId
    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 0.5
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(scroll)
    }
    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section id="toolbox" className="skills-carousel">
      <div className="container">
        <div className="skills-carousel__header">
          <span className="section-label">工具箱</span>
          <h2 className="section-title">技能工具</h2>
          <p className="section-subtitle">AI生成工具与后期软件的深度融合，覆盖全流程视觉创作</p>
        </div>
        <div className="skills-carousel__tools">
          {tools.map((tool, i) => (
            <div key={i} className="skills-carousel__tool-badge" style={{ borderColor: tool.color }}>
              <span className="skills-carousel__tool-icon">{tool.icon}</span>
              <span className="skills-carousel__tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
        <div className="skills-carousel__track-wrapper" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="skills-carousel__track" ref={scrollRef}>
            {[...skillIcons, ...skillIcons].map((item, i) => (
              <div key={i} className="skills-carousel__item">
                <img src={item.src} alt={item.name} loading="lazy" />
                              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}