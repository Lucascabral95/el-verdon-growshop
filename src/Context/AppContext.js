import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // Aca pone todos los "useEffect" e "UseState" con los que vamos a trabajar.
    const [ count, setCount ] = useState(0)
    return (
        <AppContext.Provider value={{
            //Aca van todos los value, por ejemplo: 
            // value
            // setValue
        }}>

            {children}

        </AppContext.Provider>
    )
}

