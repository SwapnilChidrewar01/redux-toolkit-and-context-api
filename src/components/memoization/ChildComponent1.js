import { memo } from 'react'

// This component is wrapped with React.memo
// It will only re-render when the 'count' prop changes
function ChildComponent1({ count }) {
  console.log('🟢 ChildComponent1 rendered (with React.memo)')
  
  return (
    <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-lg p-4">
      <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">
        Child 1 (React.memo)
      </h3>
      <p className="text-sm text-green-600 dark:text-green-300">
        Count: <strong>{count}</strong>
      </p>
      <p className="text-xs text-green-500 dark:text-green-400 mt-2">
        ✅ Only re-renders when count changes
      </p>
    </div>
  )
}

export default memo(ChildComponent1)

