// This component is NOT wrapped with React.memo
function ChildComponent4({ name }) {
  console.log('🔴 ChildComponent4 rendered (NO React.memo)')
  
  return (
    <div className="bg-red-100 dark:bg-red-900/30 border-2 border-red-500 rounded-lg p-4">
      <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">
        Child 4 (No memo)
      </h3>
      <p className="text-sm text-red-600 dark:text-red-300">
        Name: <strong>{name}</strong>
      </p>
      <p className="text-xs text-red-500 dark:text-red-400 mt-2">
        ❌ Re-renders on every parent render
      </p>
    </div>
  )
}

export default ChildComponent4

