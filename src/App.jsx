import { useContext, useState } from "react";
import "./stylesheets/App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/MainPages/Home";
import SignUp from "./Pages/AuthPages/SignUp"
import ChooseRole from "./Pages/AuthPages/ChooseRole"
import Login from "./Pages/AuthPages/Login"
import AuthProvider from "./context/AuthProvider";
import AuthContext from "./context/AuthContext";
import Appointments from "./Pages/MainPages/Appointments";

function App() {

   const loginCtx = useContext(AuthContext)
   return (
      <BrowserRouter>
      <Routes>
         <Route path="login"  element={<Login />} />
         <Route path="signup" element={<SignUp />} />
         <Route path="chooserole" element={<ChooseRole />} />
         <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
   );
}

export default App;
