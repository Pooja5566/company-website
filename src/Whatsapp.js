import React from 'react'
import './App.css';
import ReactWhatsapp from 'react-whatsapp';

export default function Whatsapp() { 
  return (
    <div>
     <ReactWhatsapp number="+91 9899550700" class="btn btn-outline-dark" massage="Contact us Now">Whatsapp Now</ReactWhatsapp>
    </div>
  )
}
