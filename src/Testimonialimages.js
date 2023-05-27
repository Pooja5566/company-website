import React from 'react'
import { Carousel } from 'react-bootstrap';
import imageT1 from './image/T1.png';
import imageT2 from './image/T2.png';
import imageT3 from './image/T3.png';
import imageT4 from './image/T4.png';
import imageT5 from './image/T5.png';
import imageT6 from './image/T6.png';
import imageT7 from './image/T7.png';
import './App.css';

export default function Testimonialimages() {
    const images =[imageT1,imageT2,imageT3,imageT4,imageT5,imageT6,imageT7]
  return (
    
      <><div className='Testiimages'>
      {<Carousel>
        
        {images.map(item => (
          
          <Carousel.Item key={images}>
            <img
              className="d-block w-100"
              src={item}
             />
           
          </Carousel.Item>
        
        ))}
       
      </Carousel>}
    </div></>
  )
}
