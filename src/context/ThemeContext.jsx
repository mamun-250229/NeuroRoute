import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Load saved theme or default to 'system'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('neuroroute-theme') || 'system'
  })

  // Apply theme to root element whenever it changes
  useEffect(() => {
    const root = document.documentElement

    // Remove all theme classes first
    root.classList.remove('light', 'dark', 'system')

    // Add current theme class
    root.classList.add(theme)

    // Save to localStorage
    localStorage.setItem('neuroroute-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook — use this in any component
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return context
}