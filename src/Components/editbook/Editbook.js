import React, { useEffect, useState } from 'react'
import './editbook.css'
import { Button } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Editbook() {
    const[title,setTitle]=useState()
    const[auther,setAuther]=useState()
    const[isbn,setIsbn]=useState()

    const[value,setValue]=useState({})
    const id=useParams()
    
    const navigate= useNavigate()
     
    const findbook=()=>{
        axios.get(`http://localhost:5000/findbook/${id.id}`,{title,auther,isbn})
        .then((res)=>{
            setValue(res.data.data)
        })
        .catch((err)=>{
            setValue(err)
        })

    }
    const updatebook=async()=>{
        try {
            await axios.post(`http://localhost:5000/onebookupdate/${id.id}`,{title,auther,isbn})
            alert('editsuccessfully')
            navigate('/studentviewbook')
        }
        catch(err){
            console.log(err);
        }


    }
    useEffect(()=>{
         findbook()
    })



    return (
        <div className='bookbg'>
            <Navbar/>
            <div className='bookborder'>
                <label className='booklabel'>TITLE</label>
                <input className='form-control mb-2 '
                name='title'
                onChange={(e)=>setTitle(e.target.value)}
                placeholder={value.title}
                type='text'></input>
                <label className='booklabel'>AUTHOR</label>
                <input className='form-control mb-2 '
                name='auther'
                onChange={(e)=>setAuther(e.target.value)}
                placeholder={value.auther}
                type='text'></input>
                <label className='booklabel'>ISBN</label>
                <input className='form-control mb-2 '
                name='isbn'
                onChange={(e)=>setIsbn(e.target.value)}
                placeholder={value.isbn}
                type='text'></input>
               <Button className='editsavebt'onClick={updatebook} variant='danger' >Update</Button>
            </div>
            <Footer/>
        </div>
    )
}

export default Editbook
