import { createContext, useEffect, useState } from 'react'
import { app } from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext(null)
 
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    // Create user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in user
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // signout user
    const logoutUser=()=>{
        return signOut(auth)
    }
    // observer 
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,(loggedUser)=>{
            console.log("loggedUser",loggedUser);
            setUser(loggedUser)
        })
        return()=>{ unsubscribe()}
    },[])
    const authInfo={createUser,loginUser,logoutUser,user}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider