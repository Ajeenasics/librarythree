import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../image/OIP-removebg-preview.png'
import Nav from 'react-bootstrap/Nav';
import './navbar.css'
import { Button } from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
function Navebar() {

   
    
    return (

        <div>


            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"


                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to={'/homepage'}><Button  className='line' variant='dark'><FaHome /></Button></Link> 
                        <Nav.Link className='line' id='studendnav'  href="/mybookdata">Mybook</Nav.Link>
                        <Nav.Link className='line' id='studendnav' href="/studentfeedback">Feedback</Nav.Link>
                        <Nav.Link className='line' id='studendnav' href='/studentcomplient' >Complaint</Nav.Link>
                        {/* <Nav.Link className='line'  href='/addbook' >Addbook</Nav.Link> */}
                        <Link to={"/studentprofile"}><Button  className='line' variant='dark' id='navtags'><IoMdContact /></Button></Link>
                        
                        
                    </Nav>
                </Container>
            </Navbar>



        </div>
    )
}

export default Navebar
