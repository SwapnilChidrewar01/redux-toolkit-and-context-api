'use client'

import { useCounter } from '@/context/CounterContext'
import Link from 'next/link'

export default function ContextPage() {
    const { count, increment, decrement, incrementByAmount } = useCounter()

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
                    <div className="flex gap-4 mb-4">
                        <Link
                            href="/"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            Redux Toolkit
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
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Context API Learning
                    </h1>

                    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 max-w-md mx-auto w-full border border-zinc-200 dark:border-zinc-800">
                        <div className="text-center mb-6">
                            <p className="text-2xl font-semibold mb-2 text-black dark:text-zinc-50">Counter Value:</p>
                            <p className="text-5xl font-bold text-purple-600 dark:text-purple-400">{count}</p>
                        </div>

                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={decrement}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
                            >
                                Decrement
                            </button>
                            <button
                                onClick={increment}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
                            >
                                Increment
                            </button>
                            <button
                                onClick={() => incrementByAmount(5)}
                                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors"
                            >
                                +5
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg max-w-md">
                        <h2 className="text-lg font-semibold mb-2 text-black dark:text-zinc-50">Context API Notes:</h2>
                        <ul className="text-sm text-left text-zinc-700 dark:text-zinc-300 space-y-1">
                            <li>• No external library needed (built into React)</li>
                            <li>• Simpler setup than Redux</li>
                            <li>• Good for small to medium apps</li>
                            <li>• State lives in the Provider component</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

