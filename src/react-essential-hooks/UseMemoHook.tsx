// import { signal, useSignal } from "@preact/signals-react"
import React, { useState, useMemo } from "react"

const initialItems = new Array(29_999_999).fill(0).map((_, i) => ({
  id: i,
  isSelected: i === 29_999_998,
}))

const UseMemoHook = () => {
  //   const items = signal(initialItems)
  //   const count = signal(0)
  const [items] = useState(initialItems)
  const [count, setCount] = useState(0)
  const selectedItem = useMemo(() => items?.find((item) => item.id === count), [items, count])
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected item: {selectedItem?.id}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default UseMemoHook
