'use client'

import { createContext, useContext, useState } from 'react'

// Create the User Context
const UserContext = createContext(undefined)

// Custom hook to use the user context
export function useUser() {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

// Provider component
export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Actions
    const login = (userData) => {
        setUser(userData)
        setIsLoggedIn(true)
    }

    const logout = () => {
        setUser(null)
        setIsLoggedIn(false)
    }

    const updateUser = (userData) => {
        setUser((prevUser) => ({ ...prevUser, ...userData }))
    }

    const value = {
        user,
        isLoggedIn,
        login,
        logout,
        updateUser,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

