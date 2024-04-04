import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function Checkout() {
  return (
    <div>
       <Row>
        <Col xs={6}>
          <div className='leftborder'>
            <img className='image' src="https://img.freepik.com/premium-photo/bookshelves-library-with-old-books-3d-render-3d-illustration_717906-963.jpg" alt="" />
          </div>
        </Col>
        <Col xs={6}>
          <div className='rightborder'>
            <div id='right'>
            <h3 className='fl'>Faculty Register</h3> 
            <label className='lab mb-2'>Username</label>
            <input className='form-control mb-3' type='text' placeholder='username'></input>
            <label className='lab mb-2'>Email</label>
            <input className='form-control mb-3' type='email' placeholder='email'></input>
            <label className='lab mb-2' >Password</label>
            <input className='form-control mb-3' type='password' placeholder='password'></input>
            <label className='lab mb-2' >Re-enter Password</label>
            <input className='form-control mb-3' type='password' placeholder='Re-enter password'></input>
            <Button className='bt' variant="success" >Register</Button>
            
            </div>
          </div>
        </Col>
      </Row>





          </div>
       
  )
}

export default Checkout
