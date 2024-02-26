import React from 'react'
import '../Register/studentregister.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Studentregister() {
    return (
        <div className='registerbg'>
            <Row>
                <Col xs={6}>
                    <div className='leftregister'>
                        <img id='leftimage' src='https://s3-us-west-2.amazonaws.com/tabs.web.media/c/x/cxn1/cxn1-square-1536.jpg' alt=''></img>
                    </div>
                </Col>
                <Col xs={6}>
                    <div className='rightregisterborder'>
                        <div id='rightregisterinput'>
                            <h3 className='mb-4'>Register</h3>
                            <label className='lablestyle mb-2'>Name</label>
                            <input className='form-control mb-3' type='text'></input>
                            <label className='lablestyle mb-2'>Number</label>
                            <input className='form-control mb-3' type='number'></input>
                            <label className='lablestyle mb-2'>User Id</label>
                            <input className='form-control mb-3' type='text'></input>
                            <label className='lablestyle mb-2'>Password</label>
                            <input className='form-control mb-3' type='text'></input>
                            <Button className='registerbutton' variant="success">Register</Button>
                           <Link to={"/studentlogin"}><Button className='registerbutton' variant="success">Login</Button></Link> 
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Studentregister
