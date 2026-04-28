import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const options = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ]

  const current = options.find((o) => o.value === theme)
  const CurrentIcon = current?.icon || Monitor

  return (
    <div style={{ position: 'relative' }}>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '7px 12px',
          borderRadius: '8px',
          border: '1px solid var(--border-color)',
          background: 'var(--orange-light)',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 500,
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-hover)'
          e.currentTarget.style.color = 'var(--orange)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-color)'
          e.currentTarget.style.color = 'var(--text-secondary)'
        }}
      >
        <CurrentIcon size={14} />
        <span style={{ display: 'none' }} className="sm-show">
          {current?.label}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <>
          {/* Backdrop to close on outside click */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
            }}
            onClick={() => setOpen(false)}
          />

          {/* Menu */}
          <div
            className="animate-slide-down"
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              zIndex: 50,
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '6px',
              boxShadow: 'var(--shadow-lg)',
              minWidth: '130px',
            }}
          >
            {options.map((option) => {
              const Icon = option.icon
              const isActive = theme === option.value
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    setTheme(option.value)
                    setOpen(false)
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: isActive
                      ? 'var(--orange-light)'
                      : 'transparent',
                    color: isActive
                      ? 'var(--orange)'
                      : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 400,
                    transition: 'all 0.15s ease',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--bg-card-hover)'
                      e.currentTarget.style.color = 'var(--text-primary)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                    }
                  }}
                >
                  <Icon size={14} />
                  {option.label}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}