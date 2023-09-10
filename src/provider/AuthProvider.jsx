import { createContext, useEffect, useState } from 'react'
import { app } from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext(null)
 
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    // Create user
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in user
    const loginUser=(email,password)=>{
         setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // signout user
    const logoutUser=()=>{
         setLoading(true);
        return signOut(auth)
    }
    // observer 
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(loggedUser)=>{
            console.log("loggedUser",loggedUser);
            setUser(loggedUser)
            setLoading(false);
        })
        return()=>{ unsubscribe()}
    },[])
    const authInfo={createUser,loginUser,logoutUser,user,loading}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider