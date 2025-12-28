'use client'

import { useCounter } from '@/context/CounterContext'
import { useUser } from '@/context/UserContext'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'

export default function MultipleContextsPage() {
    // Using all three contexts
    const { count, increment, decrement } = useCounter()
    const { user, isLoggedIn, login, logout } = useUser()
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`flex min-h-screen items-center justify-center ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
            <main className={`flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} sm:items-start`}>
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
                    <div className="flex gap-4 mb-4">
                        <Link
                            href="/"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            Redux
                        </Link>
                        <Link
                            href="/context"
                            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            Single Context
                        </Link>
                        <Link
                            href="/multiple-contexts"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            Multiple Contexts
                        </Link>
                    </div>

                    <h1 className="text-3xl font-semibold">Multiple Contexts Example</h1>

                    {/* Counter Context */}
                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-lg p-8 max-w-md mx-auto w-full border border-zinc-200 dark:border-zinc-800">
                        <h2 className="text-xl font-semibold mb-4">Counter Context</h2>
                        <div className="text-center mb-4">
                            <p className="text-5xl font-bold text-purple-600">{count}</p>
                        </div>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={decrement}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                            >
                                -
                            </button>
                            <button
                                onClick={increment}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* User Context */}
                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-lg p-8 max-w-md mx-auto w-full border border-zinc-200 dark:border-zinc-800">
                        <h2 className="text-xl font-semibold mb-4">User Context</h2>
                        <div className="text-center mb-4">
                            <p className="text-lg mb-2">
                                Status: <span className="font-bold">{isLoggedIn ? 'Logged In' : 'Not Logged In'}</span>
                            </p>
                            {user && (
                                <p className="text-sm">
                                    User: {user.name} ({user.email})
                                </p>
                            )}
                        </div>
                        <div className="flex gap-4 justify-center">
                            {!isLoggedIn ? (
                                <button
                                    onClick={() => login({ name: 'John Doe', email: 'john@example.com' })}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Login
                                </button>
                            ) : (
                                <button
                                    onClick={logout}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Theme Context */}
                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-lg p-8 max-w-md mx-auto w-full border border-zinc-200 dark:border-zinc-800">
                        <h2 className="text-xl font-semibold mb-4">Theme Context</h2>
                        <div className="text-center mb-4">
                            <p className="text-lg mb-2">
                                Current Theme: <span className="font-bold">{theme}</span>
                            </p>
                        </div>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={toggleTheme}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Toggle Theme
                            </button>
                        </div>
                    </div>

                    {/* Explanation */}
                    <div className="mt-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg max-w-md">
                        <h2 className="text-lg font-semibold mb-2">Multiple Contexts Pattern:</h2>
                        <ul className="text-sm text-left space-y-1">
                            <li>• Each context has its own file</li>
                            <li>• Each context has its own Provider</li>
                            <li>• Providers are nested in layout.js</li>
                            <li>• Components can use any context they need</li>
                            <li>• Order doesn't matter (they're independent)</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

