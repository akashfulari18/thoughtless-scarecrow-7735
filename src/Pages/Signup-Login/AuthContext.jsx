// import { useState, createContext } from "react";

// export const AuthContext = createContext();

// function AuthContextProvider({ children }) {
//   const [isAuth, setIsAuth] = useState(false);
//   const [name, setName] = useState("");

//   const loginUser = (data) => {
//     setIsAuth(true);
//     setName(data);
//   };

//   const logoutUser = () => {
//     alert("User logged out Successfull!!");
//     setIsAuth(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth, loginUser, logoutUser, name }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthContextProvider;

import { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [firstname, setFirstname] = useState("");

  const loginUser = (data) => {
    setIsAuth(true);
    setFirstname(data);
  };

  const logoutUser = () => {
    alert("User logged out Successfull!!");
    setIsAuth(false);
    // localStorage.clear()
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginUser, logoutUser, firstname }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
