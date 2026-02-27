import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { GetLocalStorage } from "../utils/LocalStorage"




function AuthProvider({children}){
 
    const [userData,setUserData]= useState(null)

    useEffect(()=>{
       const {admin,employees} =GetLocalStorage()
       setUserData({admin,employees})

    },[])
    
    console.log(userData)

    return(
        <>
     <AuthContext.Provider value={userData}>
            {children}
     </AuthContext.Provider>
             
      
      
     
        </>
    )
}
export default AuthProvider