import { signal } from "@preact/signals-react"
import { DashboardContext } from "./context"
import { Dashboard } from "./Dashboard"

export interface User {
  name: string
  isSubscribed: boolean
}

interface DemoProps {}

// eslint-disable-next-line no-empty-pattern
const UseContextHooks = ({}: DemoProps) => {
  const user = signal<User>({
    isSubscribed: true,
    name: "Prathamesh Context",
  })
  return (
    <div>
      <DashboardContext.Provider value={user.value} >
        <Dashboard/>
      </DashboardContext.Provider>
    </div>
  )
}

export default UseContextHooks
