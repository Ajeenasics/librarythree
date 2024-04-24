import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './studentviewbook.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Studentviewbook() {
    const [viewbook, setViewbook] = useState([])
    // const navigate=useNavigate()

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

    // const viewabook=(bookid)=>{

    //     navigate('/viewone')
    // }
    return (
        <div className='viewbookbg'>
            <Navbar />
            <div className='container'>
                <h1 className='text-center text-light mb-3'> All Book Details</h1>

                <div className='  row'>
                    {viewbook.map((item, index) => (
                        <div className='col-md-3 mb-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src='' />
                                <Card.Body>
                                    <Card.Title> book details</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>TITLE: {item.title}</ListGroup.Item>
                                    <ListGroup.Item>AUTHOR:{item.auther}</ListGroup.Item>
                                    <ListGroup.Item>ISBN: {item.isbn}</ListGroup.Item>
                                </ListGroup>
                                <div className="d-flex justify-content-between p-3">

                                   {/* <Button onClick={()=>viewabook({item._id})} id='viewBtn' variant='dark'>View Book</Button> */}
                                 <Link to={`/viewone/${item._id}`}>  <Button id='borrowBtn'  variant='dark'>View  Book</Button></Link>
                                 <Link to={`/editbook/${item._id}`}>  <Button id='borrowBtn'  variant='dark'> edit</Button></Link>

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
