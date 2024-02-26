import React from 'react'
import '../Login/studentlogin.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';





function Studentlogin() {
  return (
    <div className='loginbg'>

      <Row>
        <Col xs={6}>
          <div className='leftborder'>
            <img className='image' src="https://i.pinimg.com/736x/2c/87/32/2c8732a1fa0e249da25b001b792d76b8--reading-posters-book-posters.jpg" alt="" />
          </div>
        </Col>
        <Col xs={6}>
          <div className='rightborder'>
            <div id='right'>
            <h3 className='mb-5'>Login</h3>
            <label className='lab mb-2'>User Id</label>
            <input className='form-control mb-3' type='text'></input>
            <label className='lab mb-2' >Password</label>
            <input className='form-control mb-3' type='text'></input>
            <Button className='bt' variant="success">Login</Button>
            
            </div>
          </div>
        </Col>
      </Row>

    </div>

  )
}

export default Studentlogin
