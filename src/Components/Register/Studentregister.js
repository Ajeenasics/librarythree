import React, { useState } from 'react'
import './studentregister.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import regimage from'../image/1209755.webp'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Studentregister() {
    const navigate=useNavigate()
    const[registerdata,setRegisterdata]=useState({
        studentname:'',
        studentnumber:'',
        studentemail:'',
        studentpassword:''

    });
    const registerchange=(e)=>{
        setRegisterdata({
            ...registerdata,
            [e.target.name]: e.target.value
        })
    }
    const submitregister=(e)=>{
        if(registerdata.studentname && registerdata.studentnumber && registerdata.studentemail && registerdata.studentpassword){
        e.preventDefault()
        axios.post('http://localhost:5000/registerdata',registerdata)
        .then((responce)=>{
            alert(responce.data.msg)
            navigate("/studentlogin")
            
            
            setRegisterdata({
                studentname:'',
                studentnumber:'',
                studentemail:'',
                studentpassword:''
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }else{
        alert("Enter all details")
    }
        
    }
       
       
    return (
        <div className='registerbg'>
            <Row>
                <Col xs={6}>
                    <div className='leftregister'>
                        <img id='leftimage' src={regimage} alt=''></img>
                    </div>
                </Col>
                <Col xs={6}>
                    <div className='rightregisterborder'>
                        <div id='rightregisterinput'>
                            <h3 className='mb-4'>Register</h3>
                            <label className='lablestyle mb-2'>Name</label>
                            <input className='form-control mb-3'name='studentname' onChange={registerchange} value={registerdata.studentname} type='text'required></input>
                            <label className='lablestyle mb-2'>Number</label>
                            <input className='form-control mb-3'name='studentnumber'onChange={registerchange}value={registerdata.studentnumber} type='number'required></input>
                            <label className='lablestyle mb-2'>Email</label>
                            <input className='form-control mb-3'name='studentemail'onChange={registerchange} value={registerdata.studentemail} type='email'required></input>
                            <label className='lablestyle mb-2'>Password</label>
                            <input className='form-control mb-3'name='studentpassword'onChange={registerchange}value={registerdata.studentpassword} type='text'required></input>
                           <Button className='registerbutton' onClick={submitregister} variant="dark">Register</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Studentregister
