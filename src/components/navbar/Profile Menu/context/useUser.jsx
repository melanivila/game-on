import { useCallback, useContext } from "react";
import Context from "./UserContext";

export default function useUser () {
    const {email, setEmail} = useContext(Context)

    const login = useCallback((email) => {
            window.sessionStorage.setItem('email', email)
            setEmail(email)
    },[setEmail])

     

    const logout = useCallback(() => {
        setEmail(null)
        window.sessionStorage.removeItem('email')
    }, [setEmail])

    return {
        isLogged: Boolean(email),
        login,
        logout
    }
}