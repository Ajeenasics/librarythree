import React from 'react'
import './firstpage.css'
import Footer from '../Footer/Footer'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../image/OIP-removebg-preview.png'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Fisrtpage() {
  return (
    <div className='firstbg'>

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
          <Nav className="firstpagenav">

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Register"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/studentregister">Student Register</NavDropdown.Item>
              <NavDropdown.Item href="/stafregister">Staf Register</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Login"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/studentlogin">Student Login</NavDropdown.Item>
              <NavDropdown.Item href="/staflogin">Staf Login</NavDropdown.Item>

            </NavDropdown>
            
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Contact"
              menuVariant="dark"
            >
              <NavDropdown.Item href="">Library Contact</NavDropdown.Item>

            </NavDropdown>
           

            

          </Nav>
        </Container>
      </Navbar>

      <div>
        <h1 id='weltolib'>WELCOME TO   LIBRARY</h1>
        <p id='firstquotas'>A library is a collection of books, and possibly other materials and media, that is accessible for use<br></br>
          by its members and members of allied institutions. Libraries provide physical  or digital (soft copies)<br></br>
          A library's collection normally includes printed materials which may be borrowed, and usually also<br>
          </br> includes a reference section of publications which may only be utilized inside the premises Resources<br>
          </br> such as commercial releases of films, television programmes, other video recordings, radio,and audio<br></br>
          recordings may be available in many formats. Blu-rays, CDs, cassettes, or other applicable formats<br></br>
          such as microform. They may also provide access to information</p>


      </div>
      <Footer />
    </div>
  )
}

export default Fisrtpage
