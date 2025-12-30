import { memo, useState, useRef, useEffect } from 'react'

// This component demonstrates useCallback
// useCallback memoizes functions so the function reference stays the same
// This prevents unnecessary re-renders when the function is passed as a prop
function ChildComponent9({ expensiveValue, getExpensiveValue, getExpensiveValueStable }) {
  const [computedValue, setComputedValue] = useState(null)
  const renderCountRef = useRef(0)

  // Track renders without causing re-renders
  useEffect(() => {
    renderCountRef.current += 1
  })

  // Call the memoized function
  const handleCalculate = () => {
    const value = getExpensiveValue()
    setComputedValue(value)
  }

  // Call the stable function (reference never changes)
  const handleCalculateStable = () => {
    const value = getExpensiveValueStable()
    setComputedValue(value)
  }

  console.log('🟢 ChildComponent9 rendered (with React.memo + useCallback)')
  
  return (
    <div className="bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 rounded-lg p-4">
      <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-2">
        Child 9 (React.memo + useCallback)
      </h3>
      <p className="text-sm text-blue-600 dark:text-blue-300 mb-2">
        Expensive Value (prop): <strong>{expensiveValue}</strong>
      </p>
      {computedValue && (
        <p className="text-sm text-blue-600 dark:text-blue-300 mb-2">
          Computed Value: <strong>{computedValue}</strong>
        </p>
      )}
      <p className="text-xs text-blue-500 dark:text-blue-400 mb-2">
        Render Count: <strong>{renderCountRef.current}</strong>
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={handleCalculate}
          className="bg-blue-500 hover:bg-blue-600 text-white text-xs py-1 px-2 rounded"
        >
          Calculate
        </button>
        <button
          onClick={handleCalculateStable}
          className="bg-green-500 hover:bg-green-600 text-white text-xs py-1 px-2 rounded"
        >
          Stable Calc
        </button>
      </div>
      <p className="text-xs text-blue-400 dark:text-blue-500 mt-2">
        ⚡ useCallback keeps function reference stable, preventing unnecessary re-renders
      </p>
    </div>
  )
}

// Custom comparison function: Prevent re-renders using useCallback
// useCallback with empty [] keeps function reference stable
// Since function reference doesn't change, component won't re-render
const areEqual = (prevProps, nextProps) => {
  // Check if stable function reference is the same (it is, thanks to useCallback with [])
  // getExpensiveValueStable has empty dependency array, so reference NEVER changes
  // We only check the stable function - ignore getExpensiveValue and expensiveValue
  const stableFunctionEqual = (
    prevProps.getExpensiveValueStable === nextProps.getExpensiveValueStable
  )
  
  // Return true if stable function is equal (props are equal = don't re-render)
  // This prevents re-renders even when count/expensiveValue changes!
  // Note: We're ignoring expensiveValue and getExpensiveValue prop changes
  return stableFunctionEqual
}

export default memo(ChildComponent9, areEqual)

