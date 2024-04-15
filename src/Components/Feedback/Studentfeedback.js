import React, { useState } from 'react'
import './studentfeedback.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function Studentfeedback() {

  const[feedbackdata,setFeedbackdata]=useState({
    studentname:'',
    studentnumber:'',
    feedback:''
  })

  const feedbackchange=(e)=>{
    setFeedbackdata({
      ...feedbackdata,
      [e.target.name]: e.target.value
    })
  }

  const updatefeedback=()=>{
    if(feedbackdata.studentname && feedbackdata.studentnumber && feedbackdata.feedback){
    axios.post('http://localhost:5000/studentfeedback',feedbackdata)
    .then((res)=>{
      alert(res.data.msg)
      setFeedbackdata({
        studentname:'',
        studentnumber:'',
        feedback:''
      })
    })
    .catch((err)=>{
      console.log(err);
    })}
    else{
      alert("fill the all deatils")
    }

  }

  return (
    <div className='feedbackbg'> 
    <Navbar/>
        <h4 id='studentfeedbacktitle'>STUDENT FEEDBACK FORM</h4>
        <div className='feedbackborder'>
        <label className='feedbacklabel'>Student Name</label>
        <input className='form-control mb-2'name='studentname' onChange={feedbackchange} value={feedbackdata.studentname} type='text'></input>
        <lalbel className='feedbacklabel'>student Number</lalbel>
        <input className='form-control mb-2'name='studentnumber'onChange={feedbackchange} value={feedbackdata.studentnumber} type='number'></input>
        <lalbel className='feedbacklabel'>Feedback</lalbel>
        </div>
        <textarea className='form-control'name='feedback'onChange={feedbackchange} value={feedbackdata.feedback} id='feedbacktext'></textarea>
        <Button className='feedbackbtn' variant='danger'onClick={updatefeedback}>Update</Button>

    
     <Footer/>
    </div>
  )
}

export default Studentfeedback
