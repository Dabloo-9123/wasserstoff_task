import { createContext, useContext, useState } from "react";
import Login from "../header/Login";
import Signup from "../header/Signup";



const AuthContext = createContext()


const AuthProvider=()=>{
    const [auth,setauth]=useState({
        user:null,
        token:""
    })
    return(
        <AuthContext.Provider value={[auth,setauth]}>
           <Login/>
           <Signup/>
        </AuthContext.Provider>
    )
}
// custom hoks

const useAuth=()=>useContext(AuthContext)
export {useAuth,AuthProvider}