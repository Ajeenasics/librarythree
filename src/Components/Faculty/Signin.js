import React from 'react'
import '../Faculty/uregister.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function Signin() {
  
  const Navigate=useNavigate()
  let signin=()=>{
    Navigate('/Search')
  }
  let signup=()=>{
    Navigate('/Signup')
  }

  return (
    <div>
       <Row>
        <Col xs={6}>
          <div className='leftborder'>
            <img className='image' src="https://nypost.com/wp-content/uploads/sites/2/2023/10/best-book-lover-gifts.jpg?quality=75&strip=all" alt="" />
          </div>
        </Col>
        <Col xs={6}>
          <div className='rightborder'>
            <div id='right'>
            <h3 className='fl'>Faculty Login</h3> 
            <label className='lab mb-2'>Name</label>
            <input className='form-control mb-3' type='text'></input>
            <label className='lab mb-2' >Password</label>
            <input className='form-control mb-3' type='password'></input>
            <Button className='bt' variant="success" onClick={signin}>Signin</Button>
            <Button className='bt' variant="success" onClick={signup}>Signup</Button>
            
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Signin
