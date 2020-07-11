import React, { useState,useEffect } from 'react';
import Logo from '../image/logo.png';
import '../css/tailwind.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bulma/css/bulma.css'
AOS.init();
function Navbar(){
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [status, setStatus] =useState('navbar bg-transparent is-transparent shadow ');
  


  useEffect(() => {
    function onScroll() {
      let currentPosition =document.documentElement.scrollTop; // or use document.documentElement.scrollTop;
      if (currentPosition > 220) {
        // downscroll code
        console.log(currentPosition)
        // setScrolling(true);
        setStatus('navbar is-transparent  is-fixed-top bg-purple-200 shadow');
      } else {
        // upscroll code
        setScrolling(true);
        setStatus('navbar is-transparent   bg-purple-200');
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return window.addEventListener("scroll", onScroll);
  }, [scrollTop]);
return(
  
    <div className="">
    <nav className={status}  data-aos="fade-down"  data-aos-duration="2000">
      <div className="container md:py-4">
  <div className="navbar-brand md:w-64 h-16">
    <a className="navbar-item" href="https://bulma.io">
      <img src={Logo} alt="logo" />
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
        Home 
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
           
          </p>
          <p className="control">
          
            <a className="bg-purple-900 px-4 text-gray-100 font-bold md:w-32 py-2 rounded-full shadow-lg">
            <strong>Get started </strong>
          </a>
         
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>

    </div>
);
}
export default Navbar;