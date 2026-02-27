import { useState } from "react"
import Login from "./components/auth/Login"
import AdminDashboard from "./components/dashBoard/AdminDashboard"
import { GetLocalStorage, SetLocalStorage } from "./utils/LocalStorage"
import EmployeeDashboard from "./components/dashBoard/EmployeeDashboard"




function App() {

  // useEffect(()=>{
  //   // SetLocalStorage()
  //   GetLocalStorage()
  // },[])






  const [ user,setUser] = useState('')
  function handleLogin(email, password){
    if(email==='admin@me.com' && password === '123'){
         console.log(email,password)
         setUser('admin')
    }else if(email==='user@me.com' && password==='123'){
      console.log(user)
      setUser('employee')
    }else{
      alert('invalid userId and password')
    }
  }





  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user==='adim'? <AdminDashboard/>: <EmployeeDashboard/>}
    
     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
    </>
  )
}

export default App
