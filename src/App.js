import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Studentlogin from "./Components/Login/Studentlogin";
import Studentregister from "./Components/Register/Studentregister";
import Signup from "./Components/Faculty/Signup";
import Search from "./Components/Faculty/Search";
import Signin from "./Components/Faculty/Signin";
import Checkout from "./Components/Faculty/Checkout";
import Home from "./Components/Faculty/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='studentlogin' element={<Studentlogin/>}/>
        <Route path="studentregister" element={<Studentregister/>}/>
        <Route path="Signup" element={<Signup/>} />
        <Route path="Search" element={<Search/>}/>
        <Route path="Signin" element={<Signin/>}/>
        <Route path="Checkout" element={<Checkout/>}/>
        <Route path="Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


