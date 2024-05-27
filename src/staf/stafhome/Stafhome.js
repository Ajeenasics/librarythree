import React from 'react'
import Stafnav from '../stafnav/Stafnav'
import Staffooter from '../staffooter/Staffooter'
import './stafhome.css'
import { useNavigate } from 'react-router-dom'

function Stafhome() {
  const navigate = useNavigate()
  const addbookpage = () => {
    navigate('/addbook')
  }
  return (
    <div className='stafhomebg'>
      <Stafnav />
      <h1 className=' stafwel text-center text-light'>STAF LIBRARY MANAGEMENT</h1>
      <p className=' stafhomecontent text-light'>
        A librarian is a person who works professionally in a library providing access to information,  and sometimes social or technical programming,<br />
        or instruction on information literacy to users.The role of the librarian has changed much over time, with the past century in particular bringing<br />
        many new media and technologies into play. From the earliest libraries in the ancient world to the modern information hub, there have been keepers <br />
        and disseminators of the information held in data stores. Roles and responsibilities vary widely depending on the type of library, the specialty of the <br />
        librarian, and the functions needed to maintain collections and make them available to its users.</p>

      <button class="stafhomebutton" onClick={addbookpage}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" class="svg-icon"><g stroke-width="2" stroke-linecap="round" stroke="#fff"><rect y="5" x="4" width="16" rx="2" height="16"></rect><path d="m8 3v4"></path><path d="m16 3v4"></path><path d="m4 11h16"></path></g></svg>
        <span class="lable">Add Book</span>
      </button>




      <Staffooter />

    </div>
  )
}

export default Stafhome
