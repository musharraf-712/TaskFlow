import { useContext } from "react"
import AllTask from "../others/AllTask"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"
import { AuthContext } from "../../context/AuthContext"

function AdminDashboard({setUser}){
   const {employees}=  useContext(AuthContext)

return(
    <>
        <Header setUser={setUser}/>
        <CreateTask/>
        <AllTask employeesData={employees}/>
    </>
)
   
}
export default AdminDashboard