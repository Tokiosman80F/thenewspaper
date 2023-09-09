import { createContext } from 'react'
import { app } from '../firebase/firebase.config'
import { getAuth } from "firebase/auth";

export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const user={name:'toki osman'}
    return (
        <AuthContext.Provider value={user} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider