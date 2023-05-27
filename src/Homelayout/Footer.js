import React from "react";

import Social from "../Social";

import image from "../image/bn.png";

export default function Footer() {
  return (
    <>
      <div>
        <img className="image" src={image} />
        <h1>About us</h1>
        <p>
          Bhavishya Nirman Developers is one of the leading real estate
          companies in Chattarpur, South Delhi that offers 2 BHK, 3 BHK & 4 BHK
          society flats, ready to move flats, loan and registry flats, builder
          floor in South Delhi without paying brokerage fees. Bhavishya Nirman,
          have been specializing in better home construction for over 18 years,
          and we believe that passion always triumphs over perfection. For all
          of our residential projects in South Delhi, we always focus on green
          construction, and fresh air concepts.
        </p>
      </div>

      <div>
        <Social />
      </div>
      <div>
        <h1>Feel free to Contact Us</h1>
        <p>
          <b>Call:</b> 9899550700<br></br>
          <b>Email us:</b> info@bhavishyanirman.com<br></br>
          <b>Address:</b> Office No. 1, 4th Floor, Khasra 393/1 , Opp. Choudhary
          Dhaba, Main Market, Ghitorni, New Delhi , 110030
        </p>
        <br></br>
      </div>
    </>
  );
}
