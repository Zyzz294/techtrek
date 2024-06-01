import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/img.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import '../App.css'; 

const NewsImage = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>TechTrek</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>TechTrek</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>TechTrek</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default NewsImage