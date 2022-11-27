import React, { useState } from "react";

export const userContext = React.createContext();

export default function UserContext({ children }) {
    const [chosen, setChosen] = useState(null)
    return (
        <userContext.Provider value={{ chosen, setChosen }}>
            {children}
        </userContext.Provider>
    )
}