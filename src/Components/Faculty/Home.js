import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../Faculty/home.css"
import { useNavigate } from 'react-router-dom';
function Home() {
    const Navigate=useNavigate()
    let view=()=>{
        Navigate("/Search")
    }
    let sign=()=>{
        Navigate("/Signin")
    }
  return (
    <div>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features" onClick={sign}>Signin</Nav.Link>
            <Nav.Link href="#pricing">View Books</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div id='a'>
        <h1>Library</h1>
        <h3>
     "Nothing is pleasanter than exploring a library."

Walter Savage Landor </h3>
<h4>-Walter Savage Landor</h4>
        <br></br>
        <Button variant="outline-warning"  onClick={view}>View Available Books</Button>
        

      </div>
    </div>
  )
}

export default Home
