import React, { useEffect, useState } from 'react'
import './viewone.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import book from '../image/2878897.jpg'


function Viewone() {
    const [viewone, setViewone] = useState({})
    const id = useParams()
    // console.log(params.bookid);
    // const bookid=params.bookid

    const viewonebook = () => {
        axios.get(`http://localhost:5000/viewonebookdetail/${id.id}`)
            .then((responce) => {
                setViewone(responce.data.data)
                console.log(responce);
            })
            .catch((err) => {
                setViewone(err)
            })
    }
    console.log(viewone);
    useEffect(() => {
        viewonebook()
    })



    return (
        <div className='viewonebg'>
            <Navbar />
            <h1 className='text-center  text-light mb-3'>Book Details</h1>

            <div className='onebookviewcard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={book} />
                    <Card.Body>
                        <Card.Title>BOOK DETAIL</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>TITLE :{viewone.title}</ListGroup.Item>
                        <ListGroup.Item>AUTHOR : {viewone.auther}</ListGroup.Item>
                        <ListGroup.Item>ISBN : {viewone.isbn}</ListGroup.Item>
                    </ListGroup>

                </Card>

            </div>
            <Footer />
        </div>
    )
}

export default Viewone
