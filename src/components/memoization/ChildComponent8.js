// This component has NO props and NO memo
// It will re-render every time parent re-renders
function ChildComponent8() {
  console.log('🔴 ChildComponent8 rendered (NO React.memo, no props)')
  
  return (
    <div className="bg-red-100 dark:bg-red-900/30 border-2 border-red-500 rounded-lg p-4">
      <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
        Child 8 (No memo)
      </h3>
      <p className="text-sm text-red-600 dark:text-red-300">
        No props received
      </p>
      <p className="text-xs text-red-500 dark:text-red-400 mt-2">
        ❌ Re-renders on every parent render (unnecessary!)
      </p>
    </div>
  )
}

export default ChildComponent8

