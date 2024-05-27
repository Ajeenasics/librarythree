import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import stafnavlog from'../image/OIP-removebg-preview.png'
import'./stafnav.css'
function Stafnav() {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem('stafid')
        navigate('/staflogin')

    }
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
                <div className='container-fluid'>
                    <Navbar.Brand href="#home">
                        <img
                            src={stafnavlog}
                            width="100"
                            height="50"
                            className="d-inline-block align-top ms-5"
                            alt="React Bootstrap logo"


                        />
                    </Navbar.Brand>
                    <Nav className="">
                        <Link to={'/stafhome'}><Button id='stafhomebt'  className='stafline' variant='dark'><FaHome /></Button></Link> 
                        <Nav.Link className='stafline' id='stafna' href='/addbook' >Addbook</Nav.Link>
                        <Nav.Link className='stafline' id='stafna' href='/readcomp' >Complaints</Nav.Link>
                        <Nav.Link className='stafline' id='stafna' href='/readfeedback' >Feedbacks</Nav.Link>
                        <Nav.Link className='stafline' id='stafna' href='/stafviewbook' >ViewBook</Nav.Link>
                        <Nav.Link className='stafline' id='stafna'onClick={logout} >Logout</Nav.Link>
                        <Button   className='stafline' id='stafna' href='/stafprofile' variant='dark'><IoMdContact /></Button>
                        
                        
                    </Nav>
                </div>
            </Navbar>
            

    </div>
  )
}

export default Stafnav




