import { useUserContext } from "./context"

 export const Dashboard = () => {
    const user = useUserContext()
    return (
      <div>
        <h1>User: {user?.name}</h1>
      </div>
    )
  }