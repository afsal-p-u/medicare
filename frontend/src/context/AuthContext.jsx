import { createContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    setUser: () => {}
})

export const AuthContextProvider = ({children}) => {
    const [user, _setUser] = useState(JSON.parse(localStorage.getItem('validation')))

    const setUser = (value) => {
        _setUser(value)
        localStorage.setItem('validation', JSON.stringify(value))
    }

    return (
        <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
    )
}
