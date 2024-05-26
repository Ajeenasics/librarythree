import React, { useState, useEffect } from 'react'
import './studentprofile.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Studentprofile() {
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()

    const editnav = () => {
        navigate('/editprofile')
    }
    const id = localStorage.getItem('studentid')
    const viewprofile = () => {
        axios.get(`http://localhost:5000/profileview/${id}`)
            .then((responce) => {

                setProfile(responce.data.data)
            })
            .catch((err) => {
                setProfile(err);
            })
    }
    useEffect(() => {
        viewprofile()
    })
    return (
        <div id='studentprofilebg'>

            <Navbar />

            <div className='profileborder'>
                <svg xmlns="http://www.w3.org/2000/svg" id='profilelogo' width="90" height="90" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <p className='profileview'>StudentName :  {profile.studentname}</p>
                <p className='profileview'>studentNumber : {profile.studentnumber}</p>
                <p className='profileview'>StudentEmail : {profile.studentemail}</p>
                <p className='profileview'>StudentPassword : {profile.studentpassword}</p>

                <button class="studenteditBtn" onClick={editnav}>Edit
                    <svg class="svg" viewBox="0 0 512 512">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                </button >
             
            </div>

            <Footer />


        </div>
    )
}

export default Studentprofile
