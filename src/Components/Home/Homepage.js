import React, { useEffect, useState } from 'react'
import './homepage.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Homepage() {
    const [welcomename, setWelcomename] = useState({})

    const id = localStorage.getItem('studentid')

    const welcome = () => {
        axios.get(`http://localhost:5000/welcomename/${id}`)
            .then((res) => {
                setWelcomename(res.data.data)
            })
            .catch((err) => {
                setWelcomename(err)
            })

    }
    useEffect(() => {
        welcome()
    })
    return (
        <div id='homebg'>

            <Navbar />

            <div >
                <h1 className='studentwelcome text-light mt-3'>Welcome To Student Library</h1>
                <h1 className='welcomename'>{welcomename.studentname}</h1>
                <p className='studenthomecontent text-light'>
                 In a good bookroom you feel in some mysterious way that you are absorbing the wisdom contained in all the books<br/>
                  without even opening them.Libraries were full of ideas perhaps the most dangerous and powerful of all weapons<br/>
                 A library is a good place to go when you feel unhappy, for there, in a book, you may find encouragement and comfort.<br/>
                 A library is a good place to go when you feel bewildered or undecided, for there, in a book,Books are good company,<br/>
                 in sad times times, for books are people people who have managed to stay alive by hiding between the covers of a book.<br/>
                 In principle and reality, libraries are life-enhancing palaces of wonderThe classroom was a jail of other people interests.<br/>
                  The library was open, unending, free.
                </p>
                <Link to={'/studentviewbook'}> <button className='homebt'>Explore Books</button></Link>

            </div>


            <Footer />

        </div>
    )
}

export default Homepage

