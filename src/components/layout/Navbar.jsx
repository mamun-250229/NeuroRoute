import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Models', href: '#models' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-nav)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--border-color)'
          : '1px solid transparent',
      }}
    >
      <div className="max-container section-padding">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'var(--orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-orange)',
              }}
            >
              <Zap size={16} color="white" />
            </div>
            <span
              className="serif"
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.3px',
              }}
            >
              Neuro<span style={{ color: 'var(--orange)' }}>Route</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = 'var(--text-primary)')
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = 'var(--text-muted)')
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <ThemeToggle />

            <Link
              to="/chat"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              className="desktop-nav"
              onMouseEnter={(e) =>
                (e.target.style.color = 'var(--text-primary)')
              }
              onMouseLeave={(e) =>
                (e.target.style.color = 'var(--text-muted)')
              }
            >
              Sign in
            </Link>

            <Link to="/chat" className="btn-primary desktop-nav">
              Try Free
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-nav"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="animate-slide-down"
          style={{
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-color)',
            padding: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              maxWidth: '75rem',
              margin: '0 auto',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '10px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--orange-light)'
                  e.currentTarget.style.color = 'var(--orange)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                {link.label}
              </a>
            ))}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '12px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border-color)',
              }}
            >
              <Link
                to="/chat"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Sign in
              </Link>
              <Link
                to="/chat"
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Try Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}