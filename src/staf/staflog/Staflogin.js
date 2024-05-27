import React, { useState } from 'react'
import './staflog.css'
import staflogimage from '../image/dark-1015824_640.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Staflogin() {

    const navigate=useNavigate()

    const[staflog,setStaflog]=useState({
        stafemail:'',
        stafpassword:''
    })
    const staflogchange=(e)=>{
        setStaflog({
            ...staflog,
            [e.target.name]:e.target.value
        })

    }
    // const logsubmit=(e)=>{
    //     e.preventDefault()
    //     axios.post('http://localhost:5000/staflogin',staflog)
    //     .then((res)=>{
    //         if(res.data.status===200)
        
    //          navigate('/stafhome')
    //         else{
    //             alert("check the details")
    //         }
    //      })
    //      .catch((err)=>{
    //         console.log(err);
    //      })

    // }
    const logsubmit = (e) => {
        if ((staflog.stafemail, staflog.stafpassword)) {
            e.preventDefault()
          axios
            .post("http://localhost:5000/staflogin", staflog)
            .then((res) => {
              if (res.data.status === 200) {
    
                localStorage.setItem("stafid", res.data.data._id)
                // console.log(localStorage.getItem('stafid'));
    
                alert("Login Success");
                navigate('/stafhome')
              } else {
                alert("Login Failed");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          alert(" enter datas");
        }
      };
    
    return (
        <div className='staflog'>
            <div class="row">
                <div class="col-6 p-0">
                    <img className='staflogimage' src={staflogimage} alt='ss'></img>
                </div>
                <div id='staflogborder' class="col-6 p-0">
                    <div className='staflogright'>

                    <form class="form">
                        <p class="title">LOGIN </p>
                        <p class="message">Login now and get full access to our app. </p>
                      

                        <label>
                            <input class="input" type="email" name='stafemail' value={staflog.stafemail} onChange={staflogchange}/>
                                <span>Email</span>
                        </label>
                        <label>
                        <input class="input" type="password" onChange={staflogchange} name='stafpassword' value={staflog.stafpassword} />
                            <span>Password</span>
                        </label>
                      
                       
                        <button class="submit" onClick={logsubmit}>Submit</button>
                    </form>
                    </div>


                </div>

            </div>
        </div>


    )
}

export default Staflogin


