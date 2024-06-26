import React, { useState } from 'react'
import './studentcomplient.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Studentcomplient() {
  const navigate = useNavigate()

  const studentid=localStorage.getItem('studentid')

  const [complientdata, setComplientdata] = useState({
    registercomplient: '',
    corection: ''
  })

  const complientchange = (e) => {
    setComplientdata({
      ...complientdata,
      [e.target.name]: e.target.value
    })
  }

  const submitcomplient = (e) => {
    if (complientdata.registercomplient && complientdata.corection) {
      axios.post(`http://localhost:5000/studentcomplient/${studentid}`, complientdata)
        .then((res) => {
          alert(res.data.msg);
          navigate('/homepage')

          setComplientdata({
            registercomplient: '',
            corection: ''
          })
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      alert("fill the details")
    }

  }
  return (
    <div id='complientbg'>
      <Navbar />


       <h3 className='complienttitle'>Student Complaint Form</h3>
     
     
      <div id='complientborder'>
        <label className='complientlabel mb-2'>Register Complaint</label>
        <textarea className='form-control mb-3'
          name='registercomplient'
          onChange={complientchange}
          value={complientdata.registercomplient} />
        <label className='complientlabel mb-2'>How can you makes things right</label>
        <textarea className='form-control mb-3'
          name='corection'
          onChange={complientchange}
          value={complientdata.corection} />
        <Button id='complientupdate'
          onClick={submitcomplient}
          variant='danger'>Update</Button>


      </div> 





      <Footer />

    </div>
  )
}

export default Studentcomplient


