import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './studentviewbook.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Studentviewbook() {
    const [viewbook, setViewbook] = useState([])

    const view = () => {
        axios.get('http://localhost:5000/findbook')
            .then((res) => {
                setViewbook(res.data.data)
                console.log(res);

            })
            .catch((err) => {
                setViewbook(err);
            })
    }
    console.log(viewbook);

    useEffect(() => {
        view()
    }, [])

    return (
        <div className='viewbookbg'>
            <Navbar />
            <div className='container'>
            <h1 className='text-center text-light mb-3'>Book Betails</h1>

           <div className='  row'>
    {viewbook.map((item, index) => (
        <div className='col-md-3 mb-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='' />
                <Card.Body>
                    <Card.Title>book details</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>TITLE: {item.title}</ListGroup.Item>
                    <ListGroup.Item>AUTHOR:{item.auther}</ListGroup.Item>
                    <ListGroup.Item>ISBN: {item.isbn}</ListGroup.Item>
                </ListGroup>
                <div className="d-flex justify-content-between p-3">
                    <Button id='viewBtn' variant='dark'>View Book</Button>
                    <Button id='borrowBtn' variant='dark'>Borrow Book</Button>
                </div>
            </Card>
        </div>
    ))}</div>
</div>








            <Footer />

        </div>
    )
}

export default Studentviewbook
