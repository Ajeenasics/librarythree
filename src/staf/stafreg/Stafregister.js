import React, { useState } from 'react'
import './stafregister.css'
import stafiamge from '../image/dark-1015824_640.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Stafregister() {

    const navigate=useNavigate()
    const [stafdata, setStafdata] = useState({
        stafname: '',
        Stafnumber: '',
        stafemail: '',
        stafpassword: ''
    })
    const stafchange = (e) => {
        setStafdata({
            ...stafdata,
            [e.target.name]: e.target.value
        })

    }
    const stafreg = (e) => {
        if(stafdata.stafname && stafdata.stafemail  && stafdata.Stafnumber && stafdata.stafpassword){
        
            e.preventDefault()
        axios.post('http://localhost:5000/stafregister', stafdata)
            .then((res) => {
                alert(res.data.msg)
                navigate('/staflogin')
                


            //     setStafdata({
            //         stafname: '',
            //         Stafnumber: '',
            //         stafemail: '',
            //         stafpassword: ''
            // })
     
        })
            .catch((err) => {
                console.log(err);
            })}else{
                alert("enter values")
            }
      

    }

    return (
        <div >
            <div class="row">
                <div class="col p-0">
                    <img className='stafleftbg' src={stafiamge} alt='ss' />
                </div>
                <div id='stafright' class="col p-0">
                    <div className='stafreg' >

                        <form class="form">
                            <p class="title">Register </p>
                            <p class="message">Signup now and get full access to our app. </p>

                            <label>
                                <input class="input" type="text" onChange={stafchange} name='stafname' value={stafdata.stafname} />
                                <span>Name</span>
                            </label>
                            <label>
                                <input class="input" type="number" onChange={stafchange}  name='Stafnumber' value={stafdata.Stafnumber} />
                                <span>Contact Number</span>
                            </label>
                            <label>
                                <input class="input" type="email" onChange={stafchange} name='stafemail' value={stafdata.stafemail} />
                                <span>Email</span>
                            </label>

                            <label>
                                <input class="input" type="password" onChange={stafchange} name='stafpassword' value={stafdata.stafpassword} />
                                <span>Password</span>
                            </label>

                            <button class="submit" onClick={stafreg}>Submit</button>
                        </form>
                    </div>

                </div>

            </div>




        </div>
    )
}

export default Stafregister


