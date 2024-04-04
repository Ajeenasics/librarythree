import React from 'react'
import './homepage.css'
import Button from 'react-bootstrap/Button';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
function Homepage() {
    return (
        <div id='homebg'>

           <Navbar/>
          
            <div >
                <h1 className='welcome'>WELCOME</h1>
                {/* <p className='welpara'>Library Management system which is very easy to use<br></br> fullfill all the requirement of librarian</p> */}
                <Link to={"/viewbook"}>  <Button id='homebt' variant="danger">Viewbook</Button></Link>

            </div>
           

        <Footer/>

        </div>
    )
}

export default Homepage
