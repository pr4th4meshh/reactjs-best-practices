import React, { useState, useEffect } from 'react'
// import {effect} from '@preact/signals-react' 

const useEffectHook = () => {
    const [count, setCount] = useState(0)
    // effect(() => {
    //     console.log('The count is:' + count)
    // })
    useEffect(() => {
        // Actual code to run
        console.log('The count is:' + count)
        // Optional Return Function
        return () => {
            console.log("I am being cleaned up!")
        }
    }, [count]) // Dependency Array
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)} >Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default useEffectHook