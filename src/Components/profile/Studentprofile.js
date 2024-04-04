import React, { useState, useEffect } from 'react'
import './studentprofile.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'

function Studentprofile() {
    const [profile, setProfile] = useState({})
  


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
    },[])
    return (
        <div id='studentprofilebg'>
            <div>
            <Navbar/>
            </div>
           
            <svg xmlns="http://www.w3.org/2000/svg" id='profilelogo' width="100" height="100" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
            <p>{profile.studentname}</p>
            <p>{profile.studentnumber}</p>
            <p>{profile.studentemail}</p>
            <p>{profile.studentpassword}</p>
            <div>
            <Footer/>
            </div>
            
        </div>
    )
}

export default Studentprofile
