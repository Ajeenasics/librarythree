import React, { useState } from 'react'
import './studentfeedback.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Studentfeedback() {
  const navigate = useNavigate()

  const [feedbackdata, setFeedbackdata] = useState({
    studentname: '',
    studentnumber: '',
    feedback: ''
  })

  const feedbackchange = (e) => {
    setFeedbackdata({
      ...feedbackdata,
      [e.target.name]: e.target.value
    })
  }

  const updatefeedback = () => {
    if (feedbackdata.studentname && feedbackdata.studentnumber && feedbackdata.feedback) {
      axios.post('http://localhost:5000/studentfeedback', feedbackdata)
        .then((res) => {
          alert(res.data.msg)
          navigate('/homepage')
          setFeedbackdata({
            studentname: '',
            studentnumber: '',
            feedback: ''
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
    else {
      alert("fill the all deatils")
    }

  }

  return (
    <div className='feedbackbg'>
      <Navbar />
      <h4 id='feedhead' className='text-center text-light mb-3'>STUDENT FEEDBACK FORM</h4>

      <div className='feedbackborder'>
        <div className='compouterborder'>
          <label className='feedbacklabel'>Student Name</label>
          <input className='form-control mb-2 bg-dark'
            id='feedinput'
            name='studentname'
            onChange={feedbackchange}
            value={feedbackdata.studentname}
            type='text'></input>
          <lalbel className='feedbacklabel '>student Number</lalbel>
          <input className='form-control mb-2 bg-dark'
            id='feedinput'
            name='studentnumber'
            onChange={feedbackchange}
            value={feedbackdata.studentnumber}
            type='number'></input>
          <lalbel className='feedbacklabel'>Feedback</lalbel>
          <textarea className='form-control  mb-2 bg-dark '
            name='feedback'
            onChange={feedbackchange}
            value={feedbackdata.feedback}
            id='feedbacktext'></textarea>
          <Button id='feedbackbtn' onClick={updatefeedback}>Update</Button>
        </div>
      </div>






      <Footer />
    </div>
  )
}

export default Studentfeedback


