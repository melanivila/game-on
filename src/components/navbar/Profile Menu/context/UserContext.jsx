import React, {useState} from "react";

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [email, setEmail] = useState(
        () => window.sessionStorage.getItem('email')
        )

    return <Context.Provider value={{email, setEmail}}>
        {children}
    </Context.Provider>
}

export default Context