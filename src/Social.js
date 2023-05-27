import React from 'react'
import "./App.css";
import icon from './icon/lkn.png';
import icon1 from './icon/fb.png';
import icon2 from './icon/insta.png';
import icon3 from './icon/youtube.png';

export default function Social() {
  return (
    <div>
         
        <a href="https://www.youtube.com/channel/UCnn7WpjC20UQTlhlhE4SeTA" target="_blank"> 

<img className="image" src={icon3 }/>
</a>
            
            
          <a href="https://www.linkedin.com/in/bhavishyanirman/" target="_blank"> 

<img className="image" src={icon }/>
</a>
<a href="https://www.facebook.com/bhavishya.nirman12/" target="_blank"> 

        <img className="image" src={icon1 }/>
        </a>
        <a href="https://www.instagram.com/bhavishyanirman_official//" target="_blank"> 

        <img className="image" src={icon2 }/>
        </a>
        </div>
      
    
  )
}
