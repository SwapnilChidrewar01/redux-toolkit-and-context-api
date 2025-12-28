'use client'

import { createContext, useContext, useState } from 'react'

// Create the context
const CounterContext = createContext(undefined)

// Custom hook to use the counter context
export function useCounter() {
    const context = useContext(CounterContext)
    if (context === undefined) {
        throw new Error('useCounter must be used within a CounterProvider')
    }
    return context
}

// Provider component
export function CounterProvider({ children }) {
    const [count, setCount] = useState(0)

    // Actions
    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const incrementByAmount = (amount) => {
        setCount((prevCount) => prevCount + amount)
    }

    const value = {
        count,
        increment,
        decrement,
        incrementByAmount,
    }

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}

