import { memo } from 'react'

// This component has NO props
// With React.memo, it will NEVER re-render (unless parent unmounts/remounts)
function ChildComponent7() {
  console.log('🟢 ChildComponent7 rendered (with React.memo, no props)')
  
  return (
    <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-lg p-4">
      <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">
        Child 7 (React.memo)
      </h3>
      <p className="text-sm text-green-600 dark:text-green-300">
        No props received
      </p>
      <p className="text-xs text-green-500 dark:text-green-400 mt-2">
        ✅ Never re-renders (no props to change)
      </p>
    </div>
  )
}

export default memo(ChildComponent7)

