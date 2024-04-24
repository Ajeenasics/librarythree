import React, { useState } from 'react'
import './studentlogin.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logimage from '../image/1209755.webp'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Studentlogin() {
  const navigate = useNavigate()
  const [logindata, setLogindata] = useState({
    studentemail: '',
    studentpassword: ''
  })
  const loginchange = (e) => {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value

    })
  }
  const details = () => {
    if ((logindata.studentemail, logindata.studentpassword)) {
      axios
        .post("http://localhost:5000/find", logindata)
        .then((res) => {
          if (res.data.status === 200) {

            localStorage.setItem("studentid", res.data.data._id)
            console.log(localStorage.getItem('studentid'));

            alert("Login Success");
            navigate('/homepage')
          } else {
            alert("Login Failed");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("you didn't enter datas");
    }
  };


  return (
    <div className='loginbg'>

      <Row>
        <Col xs={6}>
          <div className='leftborder'>
            <img className='image' src={logimage} alt="" />
          </div>
        </Col>
        <Col xs={6}>
          <div className='rightborder'>
            <div id='right'>
              <h3 className='mb-5'>Login</h3>
              <label className='lab mb-2'>Email</label>
              <input className='form-control mb-3'
                name='studentemail'
                value={logindata.studentemail}
                onChange={loginchange}
                type='email'></input>
              <label className='lab mb-2' >Password</label>
              <input className='form-control mb-3'
                name='studentpassword'
                value={logindata.password}
                onChange={loginchange}
                type='text'></input>
              <Button className='bt' onClick={details} variant="dark">Login</Button>



            </div>
          </div>
        </Col>
      </Row>

    </div>

  )
}

export default Studentlogin
