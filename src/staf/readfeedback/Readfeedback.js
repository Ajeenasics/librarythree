import React, { useEffect, useState } from 'react'
import './readfeedback.css'
import axios from 'axios'
import Stafnav from '../stafnav/Stafnav'
import Staffooter from '../staffooter/Staffooter'

function Readfeedback() {
    const [feedback, setFeedback] = useState([])
    const viewfeed = (req, res) => {
        axios.get('http://localhost:5000/readfeedback', feedback)
            .then((res) => {
                setFeedback(res.data.data)
            })
            .catch((err) => {
                setFeedback(err)
            })
    }
    useEffect(() => {
        viewfeed()
    }, [])
    return (
        <div className='readfeedbackbg'>
            <Stafnav />

            <h1 className=' text-center text-light mb-3'>Student Feedbacks</h1>



            <div class="container">
                <ul class="responsive-table">
                    <li class="table-header">
                        <div class="col col-1">Student Name</div>
                        <div class="col col-2"> Contact Number</div>
                        <div class="col col-3">Student Feedback</div>

                    </li>
                    {
                        feedback.map((item, index) => (
                            <li class="table-row">
                                <div class="col col-1" data-label="Job Id">{item.studentname}</div>
                                <div class="col col-2" data-label="Customer Name">{item.studentnumber}</div>
                                <div class="col col-3" data-label="Amount">{item.feedback}</div>
                            </li>))}


                </ul>
            </div>

            <Staffooter />
        </div>
    )
}

export default Readfeedback
