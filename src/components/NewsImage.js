import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'; 

const NewsImage = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1617802690658-1173a812650d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Innovatech</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Innovatech</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src="https://plus.unsplash.com/premium_photo-1663134285459-0022b0e78970?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Innovatech</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default NewsImage