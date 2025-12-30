'use client'

import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import ChildComponent1 from '@/components/memoization/ChildComponent1'
import ChildComponent2 from '@/components/memoization/ChildComponent2'
import ChildComponent3 from '@/components/memoization/ChildComponent3'
import ChildComponent4 from '@/components/memoization/ChildComponent4'
import ChildComponent5 from '@/components/memoization/ChildComponent5'
import ChildComponent6 from '@/components/memoization/ChildComponent6'
import ChildComponent7 from '@/components/memoization/ChildComponent7'
import ChildComponent8 from '@/components/memoization/ChildComponent8'
import ChildComponent9 from '@/components/memoization/ChildComponent9'
import ChildComponent10 from '@/components/memoization/ChildComponent10'

export default function MemoizationPage() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')
  const renderCountRef = useRef(0)

  // Track render count
  useEffect(() => {
    renderCountRef.current += 1
  })

  // useMemo: Memoize expensive calculation
  const expensiveValue = useMemo(() => {
    console.log('🔴 Expensive calculation running... (count changed)')
    let result = count // Start with count
    // Simulate expensive calculation
    for (let i = 0; i < 1000000; i++) {
      result += i * count // Use count in calculation
    }
    return result
  }, [count]) // Only recalculate when count changes

  // useMemo: Memoize derived data
  const greeting = useMemo(() => {
    console.log('🟡 Greeting calculation running...')
    return `Hello, ${name}! Welcome to memoization.`
  }, [name]) // Only recalculate when name changes

  // useCallback: Memoize function to prevent re-renders
  // This function will only be recreated when count changes
  const getExpensiveValue = useCallback(() => {
    console.log('🔴 Expensive calculation running in callback... (count changed)')
    let result = count
    for (let i = 0; i < 1000000; i++) {
      result += i * count
    }
    return result
  }, [count]) // Function recreates when count changes

  // useCallback with EMPTY dependency array - function reference NEVER changes
  // This prevents ChildComponent9 from re-rendering when count changes
  const getExpensiveValueStable = useCallback(() => {
    console.log('🟢 Stable function - reference never changes, prevents re-renders!')
    // This function uses count from closure, but reference stays the same
    // Component won't re-render because function reference is stable
    return expensiveValue
  }, []) // Empty array = function reference NEVER changes, even when count/expensiveValue changes

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col items-center justify-center w-full max-w-6xl py-8">
        {/* Navigation */}
        <div className="flex gap-4 mb-8">
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
            Context
          </Link>
          <Link
            href="/memoization"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Memoization
          </Link>
        </div>

        {/* Memoization Definition */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 mb-8 w-full border border-zinc-200 dark:border-zinc-800">
          <h1 className="text-3xl font-bold mb-4 text-black dark:text-zinc-50">What is Memoization?</h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            In programming, <strong className="text-blue-600 dark:text-blue-400">memoization</strong> is an optimization technique that makes
            applications more efficient and hence faster. It does this by storing
            computation results in cache, and retrieving that same information from
            the cache the next time it's needed instead of computing it again.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 mb-8 w-full border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Parent Component Controls</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition-colors"
              >
                Increment Count: {count}
              </button>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="border border-zinc-300 dark:border-zinc-700 rounded px-4 py-2 bg-white dark:bg-zinc-800 text-black dark:text-zinc-50"
              />
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              <p>Parent Component Render Count: <strong>{renderCountRef.current}</strong></p>
              <p>Expensive Value (useMemo): <strong>{expensiveValue}</strong></p>
              <p>Greeting (useMemo): <strong>{greeting}</strong></p>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8 w-full">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            💡 <strong>Tip:</strong> Open your browser console to see which components re-render.
            Components wrapped with React.memo will only re-render when their props change.
          </p>
        </div>

        {/* Child Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <ChildComponent1 count={count} />
          <ChildComponent2 count={count} />
          <ChildComponent3 name={name} />
          <ChildComponent4 name={name} />
          <ChildComponent5 count={count} name={name} />
          <ChildComponent6 count={count} name={name} />
          <ChildComponent7 />
          <ChildComponent8 />
          <ChildComponent9
            expensiveValue={expensiveValue}
            getExpensiveValue={getExpensiveValue}
            getExpensiveValueStable={getExpensiveValueStable}
          />
          <ChildComponent10 greeting={greeting} />
        </div>

        {/* Explanation */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 mt-8 w-full border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Understanding the Components</h2>

          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">🔑 Key Concept: React.memo + useCallback</h3>
            <p className="text-sm text-blue-600 dark:text-blue-300 mb-2">
              <strong>useCallback Solution:</strong> When <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">count</code> changes:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-blue-600 dark:text-blue-300 ml-2">
              <li>Parent component re-renders</li>
              <li><code>useMemo</code> recalculates <code>expensiveValue</code></li>
              <li><code>useCallback</code> keeps function reference stable (if dependencies don't change)</li>
              <li><code>React.memo</code> with custom comparison: only checks <code>expensiveValue</code></li>
              <li><strong>ChildComponent9 does NOT re-render</strong> if we ignore expensiveValue in comparison!</li>
            </ol>
            <p className="text-xs text-blue-500 dark:text-blue-400 mt-2">
              ⚡ <code>useCallback</code> memoizes functions, keeping the same reference. Combined with custom <code>React.memo</code> comparison, we can prevent re-renders even when values change!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ With React.memo:</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
                <li>ChildComponent1 - Re-renders only when count changes</li>
                <li>ChildComponent3 - Re-renders only when name changes</li>
                <li>ChildComponent5 - Re-renders when count OR name changes</li>
                <li>ChildComponent7 - Never re-renders (no props)</li>
                <li>ChildComponent9 - Uses useCallback + custom memo comparison (won't re-render unnecessarily)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ Without React.memo:</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
                <li>ChildComponent2 - Re-renders on EVERY parent render</li>
                <li>ChildComponent4 - Re-renders on EVERY parent render</li>
                <li>ChildComponent6 - Re-renders on EVERY parent render</li>
                <li>ChildComponent8 - Re-renders on EVERY parent render</li>
                <li>ChildComponent10 - Re-renders on EVERY parent render</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

