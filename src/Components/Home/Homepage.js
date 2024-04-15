import React, { useEffect, useState } from 'react'
import './homepage.css'
import Button from 'react-bootstrap/Button';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Homepage() {
    const [welcomename, setWelcomename] = useState({})

    const id = localStorage.getItem('studentid')

    const welcome = () => {
        axios.get(`http://localhost:5000/welcomename/${id}`)
        .then((res)=>{
            setWelcomename(res.data.data)
        })
        .catch((err)=>{
            setWelcomename(err)
        })

    }
    useEffect(()=>{
        welcome()
    })
    return (
        <div id='homebg'>

            <Navbar />

            <div >
                <h1 className='welcome'>Welcome To Student Library</h1>
                <h1 className='welcomename'>{welcomename.studentname}</h1>
                <Link to={"/viewbook"}>  <Button id='homebt' variant="danger">Viewbook</Button></Link>

            </div>


            <Footer />

        </div>
    )
}

export default Homepage

