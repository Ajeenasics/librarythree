import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './studentviewbook.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import image from '../image/2878897.jpg'
import { Button } from 'react-bootstrap';

function Studentviewbook() {
    return (
        <div className='viewbookbg'>
            <Navbar />


            <div className='viewbookcard'>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <div >
                        <Button id='barowbt' variant='dark'>Barowbook</Button>
                        <Button id='barowbt' variant='dark'>Barowbook</Button>
                    </div>

                </Card>



            </div>




            <Footer />

        </div>
    )
}

export default Studentviewbook
