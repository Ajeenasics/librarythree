import React, { useEffect, useState } from 'react'
import './editprofile.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function Editprofile() {


  const [studentname, setStudentname] = useState()
  const [studentnumber, setStudentnumber] = useState()
  const [studentemail, setstudentemail] = useState()
  const [studentpassword, setStudentpassword] = useState()

  const [value, setValue] = useState({})

  const navigate = useNavigate()

  const id = localStorage.getItem('studentid')
  const finddata = () => {
    axios.get(`http://localhost:5000/findprofileedit/${id}`)

      .then((res) => {
        setValue(res.data.data)



      })
      .catch((err) => {
        setValue(err);
      })
  }

  const save = async () => {
    try {
      await axios.post(`http://localhost:5000/editprofile/${id}`, { studentname, studentnumber, studentemail, studentpassword })
      alert("edit successfully")
      navigate('/homepage')

    }
    catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    finddata()
  })

  return (
    <div className='editprofilebg'>
      <Navbar />
      <div className='editprofileborder'>
        <label className='editprofilelabel'>Name</label>
        <input className='form-control mb-2 '
          name='studentname'
          placeholder={value.studentname}
          onChange={(e) => setStudentname(e.target.value)}
          type='text'></input>
        <label className='editprofilelabel'>Number</label>
        <input className='form-control mb-2'
          name='studentnumber'
          placeholder={value.studentnumber}
          onChange={(e) => setStudentnumber(e.target.value)}
          type='number'></input>
        <label className='editprofilelabel'>Email</label>
        <input className='form-control mb-2'
          name='studentemail'
          placeholder={value.studentemail}
          onChange={(e) => setstudentemail(e.target.value)}
          type='email'></input>
        <label className='editprofilelabel'>Password</label>
        <input className='form-control mb-2'
          name='studentpassword'
          placeholder={value.studentpassword}
          onChange={(e) => setStudentpassword(e.target.value)}
          type='password'></input>
        <Button className='editsavebt' onClick={save} variant='danger' >Update</Button>
      </div>
      <Footer />
    </div>
  )
}

export default Editprofile
