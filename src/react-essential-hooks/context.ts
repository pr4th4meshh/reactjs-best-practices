import { createContext, useContext } from "react"
import { User } from "./UseContextHooks" 

export const DashboardContext = createContext<User | undefined>(undefined)

export function useUserContext() {
    const user = useContext(DashboardContext)

    if(user === undefined) {
        throw new Error("useUserContext must be used with Dashboard context")
    }

    return user;
}