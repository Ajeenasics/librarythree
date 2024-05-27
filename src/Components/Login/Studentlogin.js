import React, { useState } from 'react'
import './studentlogin.css'
// import Button from 'react-bootstrap/Button';
import logimage from '../image/dark-1015824_640.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
            // console.log(localStorage.getItem('studentid'));

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
      alert(" enter datas");
    }
  };


  return (
    

     
        <div class="row">
          <div class="col p-0">
            <img className='image' src={logimage} alt='ss' />
          </div>
          <div id='studentrightlog' class="col p-0">
            <div className='studentrightform'>

              < form class="form" >
                <p class="form-title">Login in to your account</p>
                <div class="input-container">
                  <input type="email"
                    placeholder="Enter email"
                    name='studentemail'
                    value={logindata.studentemail}
                    onChange={loginchange} />
                  <span>
                  </span>
                </div>
                <div class="input-container">
                  <input type="password"
                    placeholder="Enter password"
                    name='studentpassword'
                    value={logindata.password}
                    onChange={loginchange} />
                </div>
                <Button onClick={details} variant='danger'>Login</Button>


              </form >
            </div>


          </div>

        </div>
      

   

  )
}

export default Studentlogin








