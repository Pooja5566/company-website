import React from "react";
import { Carousel } from "react-bootstrap";

import image from "./image/ghitorni.png";
import image1 from "./image/lotus.png";
import image2 from "./image/iris.jpg";
import image3 from "./image/daisy.png";
import image4 from "./image/magnolia.png";
import image5 from "./image/Lily.png";
import Sitevisitvideo from "./Sitevisitvideo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Testimonialvideo from "./Testimonialvideo";
import Video from "./Video";
import FAQ from "./FAQ/Faq";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Whatsapp from "./Whatsapp";
import Projectgallary from "./Projectgallary";
import Testimonialimages from "./Testimonialimages";
import PopularProject from "./popularproject/PopularProject";
import Header from "./Header";
import Prelaunch from "./Prelaunch/Prelaunch";
import Prelaunching from "./prelaunch1/Prelaunching";
import Amenities from "./Amenities/Amenities";
import Abouthome from "./Abouthome";
import Chooseus from "./whychooseus/Chooseus";
import "./App.css";
import Sales from "./Salesfolder/Sales/Sales";
import Video1 from "./videos/Hero.mp4";
import ReactPlayer from "react-player";

export default function Home() {
  const images = [image, image1, image2, image3, image4];

  return (
    <>
      <Header />

      {/* {
          <Carousel>
            {images.map((item) => (
              <Carousel.Item key={images}>
                <img classNameNameName="d-block w-100" src={item} alt={item} />
                <Carousel.Caption>
                  <h3>{item}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        } */}
      <div className="mainhome">
        <div className="overlay">
          <video src={Video1} autoPlay loop muted />
        </div>
      </div>
      <div className="Hometext">
        <h1>Welcome to Bhavishya Nirman Developers</h1>
        <h2>Are You Looking For your Dream Home in Chattarpur ?</h2>
        <h3>
          Deals in 2 BHK, 3 BHK & 4 BHK <br></br>Flats in Chattarpur, South
          Delhi
        </h3>
        <p>Book Your Dream Home With Zero% Brokerage</p>
      </div>
      <div className="Best-project">
        <h1>Best Selling Project</h1>
        <img src={image5} alt="Lily Apartment" />
      </div>
      <Prelaunch />
      <Whatsapp />

      <div className="vimeo-testimonials">
        <h1>What Our Clients Say ?</h1>
        <Testimonialvideo />
        <div>
          <h1 style={{ marginTop: "20px" }}>Pre Launch Offer (Book Now )</h1>
          <Prelaunching />
        </div>
        <div>
          <div className="Freesitevisit">
            <h1>Book your Free Site Visit</h1>
            <button>Call Now</button>
          </div>
        </div>
        <div>
          <div className="Questionbook">
            <h1>Do You Have Questions ?</h1>
            <button>Contact us Today</button>
          </div>
        </div>
      </div>
      <div className="Popularall">
        <h1>Popular Projects</h1>
        <p>Offering affordable flats in South Delhi with the best amenities.</p>
        <PopularProject />
      </div>
      <div className="Popularall">
        <h1>Happy Clients</h1>
        <Testimonialimages />
      </div>

      <div className="Popularall">
        <h1>Walkthrough Videos</h1>
        <p>Watch complete videos on YouTube</p>
        <Video />
      </div>
      <div className="Popularall">
        <h1>Free Site Visit Journey</h1>
        <Sitevisitvideo />
      </div>
      <div className="Popularall">
        <h1>Amenities</h1>
        <Amenities />
      </div>
      <Abouthome />
      <div className="Chooseusnow">
        <h1>Why Choose Us ?</h1>
        <p>Bhavishya Nirman Developers</p>

        <Chooseus />
      </div>
      <div className="Call">
        <button className="Requestcall">
          <h1>Request a Call</h1>
        </button>
      </div>
      <Sales />

      <FAQ />
    </>
  );
}
