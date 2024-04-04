import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Studentlogin from "./Components/Login/Studentlogin";
import Studentregister from "./Components/Register/Studentregister";
import Homepage from "./Components/Home/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Fisrtpage from "./Components/First/Fisrtpage";
import Studentprofile from "./Components/profile/Studentprofile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/" element={<Fisrtpage/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/studentlogin' element={<Studentlogin/>}/>
        <Route path="/studentregister" element={<Studentregister/>}/>
        <Route path="/studentprofile" element={<Studentprofile/>}/>
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
