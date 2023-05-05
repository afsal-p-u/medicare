import { createContext, useState } from "react";

export const AuthContext = createContext({
    admin: null,
    setAdmin: () => {}
})


export const AuthContextProvider = ({children}) => {
    const [admin, _setAdmin] = useState(JSON.parse(localStorage.getItem('validation')))

    const setAdmin = (value) => {
        localStorage.setItem('validation', JSON.stringify(value))
        _setAdmin(value)
    }
    return (
        <AuthContext.Provider
            value={{admin, setAdmin}}
        >{children}</AuthContext.Provider>
    )
}