import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactPlayer from 'react-player'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Product = () => {
  return (
    <>
        <h1 className='m-5'>Our Latest Product</h1>
    <Container class="container text-center">
      <Row class="row">
        <Col class="col-md-8">
        <ReactPlayer url='https://www.youtube.com/watch?v=xqyUdNxWazA' controls={true}/>
        </Col>
        <Col class="col-md-4">
        <p>
        Crafted with a blend of optically clear polycarbonate and flexible materials, the case fits right over the buttons for easy use. On the surface, a scratch-resistant coating has been applied to both the interior and exterior. And all materials and coatings are optimized to prevent yellowing over time.
        With built-in magnets that align perfectly with iPhone 15 Pro Max, this case offers a magical attach experience and faster wireless charging, every time. When it’s time to charge, just leave the case on your iPhone and snap on your MagSafe charger, or set it on your Qi-certified charger.
        Like every Apple-designed case, it undergoes thousands of hours of testing throughout the design and manufacturing process. So not only does it look great, it’s built to protect your iPhone from scratches and drops.
        Compatible with iPhone 15 Pro Max
        </p>
        </Col>
      </Row>
    </Container>
        <div className='d-flex justify-content-center align-items-center'>
        <Card style={{ width: '18rem', margin:'3rem'}} id='product'>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Title>TechTrek X</Card.Title>
          <Card.Text>
          This Smarphone is TechTrek's Latest Technology <br/>
          $999 
          </Card.Text>
          <Button variant="primary" href='#order'>
            Pre-order
          </Button>
        </Card.Body>
        </Card>
        </div>
    </>
  )
}

export default Product