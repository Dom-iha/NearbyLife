import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

function AuthPages() {
   const [showSplash, setShowSplash] = useState(true);
   const [showSignup, setShowSignup] = useState(false);

   const handleSwitch = () => {
      setShowSignup(true)
   }
   const switchBack = () => {
      setShowSignup(false)
   }

   const form = showSignup ? <SignUp onSwitch={switchBack}/> : <Login onSwitch={handleSwitch}/>

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setShowSplash(false);
      }, 3000);

      return () => {
         clearTimeout(timeoutId);
      };
   }, []);

   return <>{showSplash ? <SplashScreen /> : form}</>;
}

export default AuthPages;
