import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import ChooseRole from "./Auth/ChooseRole";

function AuthPages() {
   const [showSplash, setShowSplash] = useState(false);
   const [showSignup, setShowSignup] = useState(false);

   const handleSwitch = () => {
      setShowSignup(true)
   }
   const switchBack = () => {
      setShowSignup(false)
   }

   const form = showSignup ? <SignUp onSwitch={switchBack}/> : <Login onSwitch={handleSwitch}/>
   // <ChooseRole onSwitch={switchBack}/>
   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setShowSplash(false);
      }, 3000);

      return () => {
         clearTimeout(timeoutId);
      };
   }, []);

   return <>{showSplash ? <SplashScreen /> : <ChooseRole />}</>;
}

export default AuthPages;
