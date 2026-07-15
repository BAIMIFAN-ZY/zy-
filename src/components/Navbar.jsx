import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '经历', href: '#experience' },
  { label: '作品', href: '#projects' },
  { label: '优势', href: '#strengths' },
  { label: '工具', href: '#toolbox' },
]

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className={'navbar' + (scrolled ? ' navbar--scrolled' : '')}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <svg className="navbar__logo-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span className="navbar__logo-text">Zhao Zhiyong</span>
        </a>

        <div className={'navbar__links' + (mobileOpen ? ' navbar__links--open' : '')}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="navbar__link" onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="navbar__cta">联系我</a>

        <button className="navbar__toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="菜单">
          <span className={'navbar__toggle-line' + (mobileOpen ? ' open' : '')}>
            <svg width="22" height="2" viewBox="0 0 22 2" fill="currentColor"><rect width="22" height="2" rx="1"/></svg>
          </span>
          <span className={'navbar__toggle-line' + (mobileOpen ? ' open' : '')}>
            <svg width="22" height="2" viewBox="0 0 22 2" fill="currentColor"><rect width="22" height="2" rx="1"/></svg>
          </span>
        </button>
      </div>
    </nav>
  )
}
