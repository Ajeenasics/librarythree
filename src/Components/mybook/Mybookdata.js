import React, { useEffect, useState } from 'react'
import './mybookdata.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Mybookdata() {
    const [mybook, setMybook] = useState([])
    const studentid=localStorage.getItem('studentid')
    const hirefindbook = () => {
        axios.get(`http://localhost:5000/hirebookfind/${studentid}` ,mybook)
            .then((res) => {
                console.log("books",res);
                setMybook(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }
    console.log(Mybookdata);
    useEffect(() => {
        hirefindbook()
    }, [])
    return (
        <div className='mybookbg'>
            <Navbar />
            <div className='container'>
                <h1 className='text-center text-light mb-5'>My Hire Book Details</h1>

                <div className='row'>
                    {mybook.map((item, index) => (
                        <div className='col-md-3 mb-3'>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`http://localhost:5000/${item.bookid.image.filename}`} />

                                <Card.Body>
                                    <Card.Title>Hire book details</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>BOOK NAME:{item.bookid.title} </ListGroup.Item>
                                    <ListGroup.Item>BOOK AUTHOR:{item.bookid.auther}</ListGroup.Item>
                                    <ListGroup.Item>ISBN:{item.bookid.isbn}</ListGroup.Item>
                                  <Link to={'/homepage'}>  <Button id='mybookhomebt' variant='dark'>HOME</Button> </Link>
                                    
                                </ListGroup>
                               
                            </Card>
                        </div>
                    ))}</div>












            </div>
            <Footer />

        </div>
    )
}

export default Mybookdata
