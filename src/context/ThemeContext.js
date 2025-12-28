'use client'

import { createContext, useContext, useState, useEffect } from 'react'

// Create the Theme Context
const ThemeContext = createContext(undefined)

// Custom hook to use the theme context
export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

// Provider component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    // Toggle between light and dark theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    // Set specific theme
    const setLightTheme = () => {
        setTheme('light')
    }

    const setDarkTheme = () => {
        setTheme('dark')
    }

    const value = {
        theme,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

