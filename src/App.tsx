// import { signal } from "@preact/signals-react"
import "./App.css"
// import AvoidNestedTernaryOperator from "./tao-of-react-practices/AvoidNestedTernary"
// import DontHardcode from "./tao-of-react-practices/DontHardcode"
// import MoveListsInSeparateComponent from "./tao-of-react-practices/MoveListsInSeparateComponent"
// import PrimitiveProps from "./tao-of-react-practices/PrimitiveProps"
import UseEffectHook from "./react-essential-hooks/useEffectHook"
import UseMemoHook from "./react-essential-hooks/UseMemoHook"
import UseCallbackHook from "./react-essential-hooks/UseCallbackHook"
import UseContextHooks from "./react-essential-hooks/UseContextHooks"

// const firstName = "Prathamesh"
// const lastName = "Asolkar via Signal"
// const fullName = firstName + " " + lastName

// const name = signal({
//   firstNamee: firstName,
//   lastNamee: lastName
// })

function App() {
  return (
    <>
      <div>
        <h1>
          Hello, These are some of the React's Best Practices from the sources
          availabe on the internet
        </h1>
        {/* TAO OF REACT PRACTICES */}
        {/* <DontHardcode nameProps={name} />
        <PrimitiveProps />
        <AvoidNestedTernaryOperator />
        <MoveListsInSeparateComponent /> */}

        {/* REACT ESSENTIAL HOOKS */}
        {/* <UseEffectHook /> */}
        {/* <UseMemoHook /> */}
        {/* <UseCallbackHook /> */}
        <UseContextHooks />
      </div>
    </>
  )
}

export default App
