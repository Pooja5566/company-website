import React from 'react'
import { Carousel } from 'react-bootstrap';
import image from './image/ghitorni.png';
import image1 from './image/lotus.png';
import image2 from './image/iris.jpg';
import image3 from './image/daisy.png';
import image4 from './image/magnolia.png';
import image5 from './image/Lily.png';
import './App.css';

export default function Projectgallary() {
    const images =[image,image1,image2,image3,image4,image5]
  return (
    <div class="Propertyclass">
      
      {<Carousel>
        {images.map(item => (
          <Carousel.Item key={images}>
            <img
              className="d-block w-100"
              src={item}
              alt={item} />
            <Carousel.Caption>
              <h3>{item}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>}
    </div>
  )
}
