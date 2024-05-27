import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import'./stafviewbook.css'
import axios from 'axios';
import Stafnav from '../stafnav/Stafnav';
import Staffooter from '../staffooter/Staffooter';

function Stafviewbook() {
    const [stafviewbook, setStafViewbook] = useState([])


    const view = () => {
        axios.get('http://localhost:5000/findbook', stafviewbook)
            .then((res) => {
                setStafViewbook(res.data.data)
                // console.log(res);

            })
            .catch((err) => {
                setStafViewbook(err);
            })
    }
    // console.log(viewbook);


    useEffect(() => {
        view()
        
    }, [])

  return (
        <div className='viewbookbg'>
          <Stafnav/>
            <div className='container'>
                <h1 className='text-center  mb-3'> All Book Details</h1>

                <div className='  row'>
                    {stafviewbook.map((item, index) => (
                        <div className='col-md-3 mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`http://localhost:5000/${item.image.filename}`} />
                                <Card.Body>
                                    <Card.Title> book details</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>TITLE: {item.title}</ListGroup.Item>
                                    <ListGroup.Item>AUTHOR:{item.auther}</ListGroup.Item>
                                    <ListGroup.Item>ISBN: {item.isbn}</ListGroup.Item>
                                </ListGroup>
                               
                            </Card>
                        </div>
                    ))}</div>
            </div>








                    <Staffooter/>
        </div>
    )
}

export default Stafviewbook

