import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import Login from "./Auth/Login";

function AuthPages() {
   const [showSplash, setShowSplash] = useState(true);

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setShowSplash(false);
      }, 3000);

      return () => {
         clearTimeout(timeoutId);
      };
   }, []);

   return <>{showSplash ? <SplashScreen /> : <Login />}</>;
}

export default AuthPages;
