
function Header({employee,setUser}){
    
    function handleLogOut(){
        localStorage.removeItem("loggedInUser")
        setUser('')
    }
   
    return(
        <div className="flex items-center justify-between bg-grey-800 px-6 py-4 shadow-md">
            <p className="text-grey-300 text-lg">Hello <span className="text-white font-semibold text-xl">{employee?.name}</span></p>

            <button className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 active:scale-95 transition" onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
export default Header