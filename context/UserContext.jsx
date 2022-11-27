import { createContext, useState } from "react";

export const User = createContext();

export default function UserContext({children}){
    const [chosen, setChosen] = useState(null)
    return(
        <User.Provider value={{chosen,setChosen}}>
            {children}       
        </User.Provider>
    )
}