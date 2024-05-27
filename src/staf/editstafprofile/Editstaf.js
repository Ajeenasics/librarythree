import React, { useEffect, useState } from 'react'
import './editstaf.css'
import Stafnav from '../stafnav/Stafnav'
import Staffooter from '../staffooter/Staffooter'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Editstaf() {
    const navigate=useNavigate()

    const [stafname, setStafname] = useState()
    const [Stafnumber, setStafnumber] = useState()
    const [stafemail, setStafemail] = useState()
    const [stafpassword, setPassword] = useState()
    const [value, setValue] = useState({})

    const id = localStorage.getItem('stafid')
    const findstafdata = (res) => {
        axios.get(`http://localhost:5000/findstafprofile/${id}`)
            .then((res) => {
                setValue(res.data.data)
                // setStafname(res.data.data.stafname)
                // setStafnum(res.data.data.Stafnumber)
                // setStafemail(res.data.data.stafemail)
                // setPassword(res.data.data.stafpassword)
            })
            .catch((err) => {
                setValue(err)
            })
    }

    const stafprofileupdate = async () => {
        try {
            await axios.put(`http://localhost:5000/profileupdate/${id}`, { stafname, Stafnumber, stafemail, stafpassword })
            alert("edit successfully")
            navigate('/stafhome')

        }
        catch (err) {
            console.log(err);
            alert("not updated")
        }

    }

    useEffect(() => {
        findstafdata()
    }, [])
    return (
        <div className='editstafbg'>
            <Stafnav />

            <div className='stafeditborder' >



                <label className='text-light mb-2'>Name</label>
                <input className='form-control mb-2' type="text" name='stafname' onChange={(e) => setStafname(e.target.value)} placeholder={value.stafname} />

                <label className='text-light mb-2' >Conat Number</label>
                <input className='form-control mb-2' type="number" name='Stafnumber' onChange={(e) => setStafnumber(e.target.value)} placeholder={value.Stafnumber} />

                <label className='text-light mb-2'>Email</label>
                <input className='form-control mb-2' type="email" name='stafemail' onChange={(e) => setStafemail(e.target.value)} placeholder={value.stafemail} />



                <label className='text-light mb-2'>Password</label>
                <input className='form-control mb-2' type="password" name='stafpassword' onChange={(e) => setPassword(e.target.value)} placeholder={value.stafpassword} />



                <button class="bookmarkBtn" onClick={stafprofileupdate}>
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





            <Staffooter />
        </div>
    )
}

export default Editstaf
