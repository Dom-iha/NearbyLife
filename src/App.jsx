import { useContext, useState } from "react";
import "./stylesheets/App.css";
import AuthPages from "./Pages/AuthPages";
import MainPages from "./Pages/MainPages";
import AuthProvider from "./context/AuthProvider";
import AuthContext from "./context/auth-context";

function App() {
   // const [isLoggedIn, setIsLoggedIn] = useState(false);

   const loginCtx = useContext(AuthContext)
   return (
      <AuthProvider>
         {loginCtx.isLoggedIn ? (
            <MainPages />
         ) : (
            <AuthPages />
         )}
      </AuthProvider>
   );
}

export default App;
