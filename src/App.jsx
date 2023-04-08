import { useState } from "react";
import "./stylesheets/App.css";
import AuthPages from "./Pages/AuthPages";
import MainPages from "./Pages/MainPages";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
      <>
         {isLoggedIn ? (
            <MainPages />
         ) : (
            <AuthPages />
         )}
      </>
   );
}

export default App;
