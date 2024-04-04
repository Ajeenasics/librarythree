import React from 'react'
import '../Faculty/search.css'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup';




function uregister() {
  
  
  

  return (
    <div>
       {/* <Row>
        <Col xs={6}>
          <div className='leftborder'>
            <img className='image' src="https://nypost.com/wp-content/uploads/sites/2/2023/10/best-book-lover-gifts.jpg?quality=75&strip=all" alt="" />
          </div>
        </Col>
        <Col xs={6}>
          <div className='rightborder'>
            <div id='right'>
            <h3 className='fl'>Search book by name</h3> 
            <label className='lab mb-2'></label>
            <input className='form-control mb-3' type='text'></input>
            
            <Button className='bt' variant="success">search</Button>
            


            
            </div>
          </div>
        </Col>
      </Row> */}
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.winkart.in/wp-content/uploads/2021/07/vfbxf.jpg" />
        <Card.Body>
          <Card.Title>The Merchant of Venice</Card.Title>
          <Card.Text>
            Rs:149
          </Card.Text>
          <Button className='bt' variant="success">Buy now</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.winkart.in/wp-content/uploads/2021/07/vfbxf.jpg" />
        <Card.Body>
          <Card.Title>The Merchant of Venice</Card.Title>
          <Card.Text>
          Rs:149
          </Card.Text>
           <Button className='bt' variant="success">Buy now</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.winkart.in/wp-content/uploads/2021/07/vfbxf.jpg" />
        <Card.Body>
          <Card.Title>The Merchant of Venice</Card.Title>
          <Card.Text>
          Rs:149
          </Card.Text>
          <Button className='bt' variant="success">Buy now</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>










    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.winkart.in/wp-content/uploads/2021/07/vfbxf.jpg" />
        <Card.Body>
          <Card.Title>The Merchant of Venice</Card.Title>
          <Card.Text>
            Rs:149
          </Card.Text>
          <Button className='bt' variant="success">Buy now</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.winkart.in/wp-content/uploads/2021/07/vfbxf.jpg" />
        <Card.Body>
          <Card.Title>The Merchant of Venice</Card.Title>
          <Card.Text>
          Rs:149
          </Card.Text>
           <Button className='bt' variant="success">Buy now</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.winkart.in/wp-content/uploads/2021/07/vfbxf.jpg" />
        <Card.Body>
          <Card.Title>The Merchant of Venice</Card.Title>
          <Card.Text>
          Rs:149
          </Card.Text>
          <Button className='bt' variant="success">Buy now</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    </div>
  )
}

export default uregister
