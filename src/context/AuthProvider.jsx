import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { GetLocalStorage, SetLocalStorage } from "../utils/LocalStorage";

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = GetLocalStorage();

    if (!data.admin || !data.employees.length === 0) {
      console.log("setting localStorage...");
      SetLocalStorage();

      const newData = GetLocalStorage();
      setUserData(newData);
    } else {
      console.log("already");
      setUserData(data);
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </>
  );
}
export default AuthProvider;
