import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Studentlogin from "./Components/Login/Studentlogin";
import Studentregister from "./Components/Register/Studentregister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='studentlogin' element={<Studentlogin/>}/>
        <Route path="studentregister" element={<Studentregister/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
