import React, { useEffect, useState } from 'react'
import './editprofile.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'
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
        console.log(res);



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
  },[])

  return (
    <div className='editprofilebg'>
      <Navbar />
      <div className='editprofileborder'>
        <label className='editprofilelabel'>Name</label>
        <input className='form-control mb-2 '
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

        <button class="stafeditsave" onClick={save}>
                    <span class="IconContainer">
                        <svg viewBox="0 0 384 512" height="0.9em" class="icon">
                            <path
                                d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                            ></path>
                        </svg>
                    </span>
                    <p class="text">Save</p>
                </button>

      </div>
      <Footer />
    </div>
  )
}

export default Editprofile
