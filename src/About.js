import React from "react";
import Social from "./Social";
import Achievements from "./Achievements";
import ceo from "./image/Akash.png";
import Hero from "./Hero section/Hero";


import Tabs from "./Tabs.js";
import "./App.css";

export default function About() {
  return (
    <>
    <Hero 
    cName="hero"
    heroImage="https://t4.ftcdn.net/jpg/05/71/13/09/240_F_571130958_N4qY80zZFXrjEyE0PA7sWiGpf62rO8Ij.jpg"
    title="About Us"
    description="2 BHK, 3 BHK ,4 BHK Loan and Registry Flats in Chattarpur, South Delhi"
    buttontext="Visit Properties"
    url="/"
    btnClass="show"
    
    
    
    
    
    
    />
      {/* <div className="aboutall">
        <h1>About Us</h1>
        <p>
          2 BHK, 3 BHK ,4 BHK Loan and Registry Flats in Chattarpur, South Delhi
        </p>
        </div> */}

        <div className="Popularall">
       
          <h1>
            <b>Welcome to Bhavishya Nirman Developers</b>
          </h1>
          
          <br></br>
          </div>
          <div className="about-content">
          <h3> About Us</h3>
          <p>
            Bhavishya Nirman Developers is one of the leading real estate
            companies in Chattarpur, South Delhi that offers 2 BHK, 3 BHK & 4
            BHK society flats, ready to move flats, loan and registry flats,
            builder floor in South Delhi without paying brokerage fees.
            Bhavishya Nirman, have been specializing in better home construction
            for over 18 years, and we believe that passion always triumphs over
            perfection. For all of our residential projects in South Delhi, we
            always focus on green construction, and fresh air concepts.
          </p>
       
        </div>
        

        <Tabs />
        <div className="buttonabout">
        <button >Visit Properties</button>
        </div>
     
      <Achievements />
      <Social />
      <div>
        <div className="containerabout">
         <div className="row about">
          <div className="col-sm-6">
            <div className="ceofounder" >
              <img src={ceo} alt="CEO" />
       
              <div className="col-sm-6">
              <div className="ceofounder1" >
              <h1>CEO/FOUNDER</h1>
              <p>
                Bhavishya Nirman Developers was founded and is led by Akash
                Kumar Baisoya, a well-known business leader and entrepreneur,
                who started his career in real estate business since early
                twenties. Now he has a vision to build affordable homes with the
                best facilities and luxury living without any brokerage fees to
                fulfill the dreams of Indian families. As a founder and CEO, he
                has been working with his zeal, zest and determination to propel
                Bhvaishya Nirman to new heights.
              </p>
            </div>
            </div>
            </div>
            </div>
          </div>
          </div>
      
      </div> 
    </>
  );
}
