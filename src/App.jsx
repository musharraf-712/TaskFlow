import { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashBoard/AdminDashboard";

import EmployeeDashboard from "./components/dashBoard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(null);
  const [employee, setEmployee] = useState(null);
  const authData = useContext(AuthContext);
  if (authData) {
    console.log("authData",authData);
  }

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        if (loggedInUser.role === "employee") {
          const employees = JSON.parse(localStorage.getItem("employees"))

          const currentEmployee= employees.find(emp=>emp.id=== loggedInUser.id)
          setEmployee(currentEmployee);
        }
      }
    }
  }, [authData]);

 

  function handleLogin(email, password) {
    if (
      authData?.admin?.email === email &&
      authData?.admin?.password === password
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else {
      const employee = authData?.employees?.find(
        (e) => e.email === email && e.password === password,
      );
      console.log("employee", employee);
      if (employee) {
      setEmployee(employee);
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", id:employee.id }),
      );
    } else {
      alert("Invalid email or password");
    }
    }
    
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard setUser={setUser} />}
      {user === "employee" && employee && (
        <EmployeeDashboard employee={employee} setUser={setUser}/>
      )}
    </>
  );
}

export default App;
