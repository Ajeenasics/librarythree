import React, { useState } from 'react'
import'./hirebook.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Button } from 'react-bootstrap'

function Hirebook() {
  const studentid=localStorage.getItem('studentid')
  const[hirebookdata,setHirebookdata]=useState({
    studentid:studentid,
    bookid:''
  })
  const hirebookchange=()=>{

  }
  return (
    <div className='hirebookbg'>
        <Navbar/>
          <h1 className='text-center text-light mb-3'>HIRE BOOKS DETAILS</h1>
        <div className='hirebookborder'>
          <label className='hirelabel'>Student Id</label>
          <input type='text'name='studentid'value={hirebookdata.studentid} className='form-control mb-2'></input>
          <label className='hirelabel'>Book Id</label>
          <input type='text'name='bookid'value={hirebookdata.bookid} className='form-control mb-2'></input>
          <label className='hirelabel'>Date</label>
          <Button className='hirebt' variant='danger'>Hirebook</Button>

        </div>




      <Footer/>
    </div>
  )
}

export default Hirebook
