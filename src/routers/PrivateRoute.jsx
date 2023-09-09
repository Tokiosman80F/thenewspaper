import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"


const PrivateRoute = ({children}) => {
    let location=useLocation()
    const {user}=useContext(AuthContext)
    if(user){
        return children
    }
    
    return (
        <Navigate to='/login' state={{from:location}} replace>
            {children}
        </Navigate>
    )
}

export default PrivateRoute