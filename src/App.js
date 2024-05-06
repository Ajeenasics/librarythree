import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Studentlogin from "./Components/Login/Studentlogin";
import Studentregister from "./Components/Register/Studentregister";
import Homepage from "./Components/Home/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Fisrtpage from "./Components/First/Fisrtpage";
import Studentprofile from "./Components/profile/Studentprofile";
import Editprofile from "./Components/Editprofile/Editprofile";
import Studentfeedback from "./Components/Feedback/Studentfeedback";
import Studentviewbook from "./Components/viewbook/Studentviewbook";
import Studentcomplient from "./Components/complient/Studentcomplient";
import Addbook from "./Components/addbook/Addbook";
import Viewone from "./Components/viewonebook/Viewone";
import Editbook from "./Components/editbook/Editbook";
import Mybookdata from "./Components/mybook/Mybookdata";



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
        <Route path="/editprofile" element={<Editprofile/>}/>
        <Route path="/studentfeedback" element={<Studentfeedback/>}/>
        <Route path="/studentviewbook" element={<Studentviewbook/>}/>
        <Route path="/studentcomplient" element={<Studentcomplient/>}/>
        <Route path="/addbook" element={<Addbook/>}/>
        <Route path="/viewone/:id" element={<Viewone/>}/>
        <Route path="/editbook/:id"element={<Editbook/>}/>
       <Route path="/mybookdata"element={<Mybookdata/>}/>
      
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
