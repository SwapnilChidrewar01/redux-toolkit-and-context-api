// This component receives a memoized value but is NOT wrapped with React.memo
// It will still re-render on every parent render
function ChildComponent10({ greeting }) {
  console.log('🔴 ChildComponent10 rendered (NO React.memo, but receives useMemo value)')
  
  return (
    <div className="bg-orange-100 dark:bg-orange-900/30 border-2 border-orange-500 rounded-lg p-4">
      <h3 className="font-bold text-orange-700 dark:text-orange-400 mb-2">
        Child 10 (No memo)
      </h3>
      <p className="text-sm text-orange-600 dark:text-orange-300">
        Greeting: <strong>{greeting}</strong>
      </p>
      <p className="text-xs text-orange-500 dark:text-orange-400 mt-2">
        ❌ Re-renders on every parent render (even though greeting is memoized)
      </p>
    </div>
  )
}

export default ChildComponent10

