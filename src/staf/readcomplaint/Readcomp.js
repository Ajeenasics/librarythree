import React, { useEffect, useState } from 'react'
import './readcomp.css'
import Stafnav from '../stafnav/Stafnav'
import Staffooter from '../staffooter/Staffooter'
import axios from 'axios'


function Readcomp() {
    const [read, setRead] = useState([])





    const readcomplaint = (req, res) => {
        axios.get('http://localhost:5000/readcomlaint', read)
            .then((res) => {
                console.log(res.data.data);
                setRead(res.data.data)
            })
            .catch((err) => {
                setRead(err)
            })

    }
    useEffect(() => {
        readcomplaint()
    },[])

    return (
        <div className='readcomplaintbg'>


            <Stafnav />
            <h1 className='text-center text-light mb-3'>Complaints</h1>
            <div className='readcomptable'>
                {/* <table class="table">
                    <thead>
                        <tr>
                            <th id='comp' scope="col">Student Name</th>
                            <th id='comp' scope="col">Complaint</th>
                            <th id='comp' scope="col">corection</th>

                        </tr>
                    </thead>
                    {
                        read.map((item, index) => (

                            <tbody class="table-group-divider">
                                <tr>
                                    <td>{item.studentid.studentnamme}</td>
                                    <td>{item.registercomplient}</td>
                                    <td>{item.corection}</td>
                                      </tr>
                                </tbody>
                         ))
                    }
                </table> */}
                <div class="container">
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col col-1">Student Name</div>
                            <div class="col col-2"> Complaint</div>
                            <div class="col col-3">corection</div>

                        </li>
                        {
                            read.map((item, index) => (
                                <li class="table-row">
                                    <div class="col col-1" data-label="Job Id">{item.studentid.studentname}</div>
                                    <div class="col col-2" data-label="Customer Name">{item.registercomplient}</div>
                                    <div class="col col-3" data-label="Amount">{item.corection}</div>
                                </li>))}


                    </ul>
                </div>

            </div>




            <Staffooter />

        </div>
    )
}

export default Readcomp
