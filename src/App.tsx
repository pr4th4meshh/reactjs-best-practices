import { signal } from "@preact/signals-react"
import "./App.css"
import AvoidNestedTernaryOperator from "./tao-of-react-practices/AvoidNestedTernary"
import DontHardcode from "./tao-of-react-practices/DontHardcode"
import MoveListsInSeparateComponent from "./tao-of-react-practices/MoveListsInSeparateComponent"
import PrimitiveProps from "./tao-of-react-practices/PrimitiveProps"

const firstName = "Prathamesh"
const lastName = "Asolkar via Signal"
const fullName = firstName + " " + lastName

const name = signal({
  firstNamee: firstName,
  lastNamee: lastName
})

console.log(name)

function App() {
  return (
    <>
      <div>
        <h1>
          Hello, These are some of the React's Best Practices from the sources
          availabe on the internet
        </h1>
        {/* TAO OF REACT PRACTICES */}
        <DontHardcode nameProps={name} />
        <PrimitiveProps />
        <AvoidNestedTernaryOperator />
        <MoveListsInSeparateComponent />
      </div>
    </>
  )
}

export default App
