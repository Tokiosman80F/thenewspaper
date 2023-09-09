import { createContext } from 'react'
import { app } from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null)
 
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const user={name:'toki osman'}
    // Create user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in user
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // signout user
    // observer 
    const authInfo={createUser,loginUser}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider