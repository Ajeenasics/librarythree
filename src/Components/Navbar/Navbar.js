import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../image/OIP-removebg-preview.png'
import Nav from 'react-bootstrap/Nav';
import'./navbar.css'
import { Button } from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';
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
            <Nav.Link className='line' href="#home">Book</Nav.Link>
            <Nav.Link className='line' href="#features">Wishlist</Nav.Link>
            <Nav.Link className='line' href="#pricing">FineAndHistory</Nav.Link>
            <Nav.Link className='line' href="#pricing">Feedback</Nav.Link>
           <Link to={"/studentprofile"}><Button variant='dark'><IoMdContact /></Button></Link> 
        </Nav>
    </Container>
</Navbar> 



    </div>
  )
}

export default Navebar