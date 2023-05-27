import * as React from "react";
import "./App.css";
import logo from "./image/bn.png";
import icon from "./icon/lkn.png";
import icon1 from "./icon/fb.png";
import icon2 from "./icon/insta.png";
import icon3 from "./icon/youtube.png";
import Social from "./Social";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <Social />

        <div>
          <a href className="bn">
            info@bhavishyanirman.com
          </a>
        </div>
        <div>
          <button>9899550700</button>
        </div>
      </header>
      <header className="App-header1">
        <div className="logo">
          <img className="image" src={logo}></img>
        </div>
        <div className="Link-header">
     
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/blog">
            Blogs
          </Link>
          <Link className="nav-link" to="/contact">
            Contact us
          </Link>
        </div>
        
      </header>
    </div>
   
  );
}

export default Header;
