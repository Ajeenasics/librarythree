import React, { useState } from 'react'
import './addbook.css'
import Stafnav from '../../staf/stafnav/Stafnav'
import Staffooter from '../../staf/staffooter/Staffooter'
import { Button } from 'react-bootstrap'
import axios from 'axios'

function Addbook() {
    const [addbookdata, setabookdata] = useState({
        title: '',
        auther: '',
        isbn: '',
        image:null

    })
    const addbookchange = (e) => {
        setabookdata({
            ...addbookdata,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setabookdata({ ...addbookdata, [name]: files[0] });
    };

    const add = () => {
        if(addbookdata.title && addbookdata.auther && addbookdata.isbn)
        {
        axios.post('http://localhost:5000/addbook', addbookdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

            .then((res) => {
                console.log(res);
                alert(res.data.msg)
                setabookdata({
                    title: '',
                    auther: '',
                    isbn: '',
                    image: ''
                })
            })

            .catch((err) => {
                console.log(err);
            })}
            else{
                alert("enter details")
            }

    }

    return (
        <div id='addbookbg'>
            <Stafnav />
            <h1 className='bookheading'>Add Book Details</h1>

            <div id='addbookborder'>
                <label className='addbooklabel mb-2'>TITLE</label>
                <input type='text'
                    className='form-control mb-2'
                    name='title'
                    value={addbookdata.title}
                    onChange={addbookchange} />
                <label className='addbooklabel mb-2'>AUTHOR</label>
                <input type='text'
                    className='form-control mb-2'
                    name='auther'
                    value={addbookdata.auther}
                    onChange={addbookchange} />
                <label className='addbooklabel mb-2'>ISBN</label>
                <input type='text'
                    className='form-control mb-2'
                    name='isbn'
                    value={addbookdata.isbn}
                    onChange={addbookchange} />
                <label className='addbooklabel mb-2'>IMAGE</label>
                <input type='file'
                    className='form-control mb-2'
                    name='image'
                    onChange={handleFileChange}
                />
                <Button id='addbookbt' onClick={add} variant='danger'>Add Book</Button>


            </div>





            <Staffooter/>
        </div>
    )
}

export default Addbook
