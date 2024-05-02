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

    const studentid = localStorage.getItem('studentid')
    // console.log(studentid);

    const view = () => {
        axios.get('http://localhost:5000/findbook', viewbook)
            .then((res) => {
                setViewbook(res.data.data)
                // console.log(res);

            })
            .catch((err) => {
                setViewbook(err);
            })
    }
    // console.log(viewbook);


    useEffect(() => {
        view()
    }, [])

    const hireBook = (bookid) => {
        if ((bookid)) {
            axios.post(`http://localhost:5000/hirebookdata/${studentid}`, { bookid: bookid })
                .then((res) => {
                    
                    alert("book hired", res);
                   
                })
                .catch((err) => {
                })

        } else {
            alert("already hired")
        }
    }

    // const viewabook=(bookid)=>{

    //     
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
                                <Card.Img variant="top" src={`http://localhost:5000/${item.image.filename}`} />
                                <Card.Body>
                                    <Card.Title> book details</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>TITLE: {item.title}</ListGroup.Item>
                                    <ListGroup.Item>AUTHOR:{item.auther}</ListGroup.Item>
                                    <ListGroup.Item>ISBN: {item.isbn}</ListGroup.Item>
                                </ListGroup>
                                <div className="d-flex justify-content-between p-3">

                                    <Link to={`/viewone/${item._id}`}>  <Button id='borrowBtn' variant='dark'>View  Book</Button></Link>
                                    <Button id='borrowBtn' variant='dark' onClick={() => hireBook(item._id)}>Hire Book</Button>
                                    {/* <Link to={`/editbook/${item._id}`}>  <Button id='borrowBtn'  variant='dark'> Edit </Button></Link> */}



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
