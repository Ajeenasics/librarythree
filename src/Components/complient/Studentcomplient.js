import React from 'react'
import'./studentcomplient.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Button } from 'react-bootstrap'

function Studentcomplient() {
  return (
    <div id='complientbg'>
        <Navbar/>
            <h3 className='complienttitle'>Student complient Form</h3>
            <div id='complientborder'>
              
                <label className='complientlabel mb-2'>What has happend</label>
                <textarea  className='form-control mb-3'></textarea>
                <label className='complientlabel mb-2'>How can you makkes things right</label>
                <textarea  className='form-control mb-3'></textarea>
                <Button id='complientupdate' variant='danger'>Update</Button>
                

            </div>




        <Footer/>
   
    </div>
  )
}

export default Studentcomplient
