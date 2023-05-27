import React from 'react'
import { FaPhone } from 'react-icons/fa';
import './App.css';
import { render } from '@testing-library/react';

export default function Phone() {
    render() ;{
        const handleCallButtonClick = () => {
          window.location.href = 'tel:9899550700';
        };
  return (
  <div>
    <button className="call-button">
        <FaPhone className="phone-icon" />
        Call Now
      </button>
  </div>
  );
}
}
