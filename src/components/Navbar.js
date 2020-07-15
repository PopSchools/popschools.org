import React, { useState,useEffect,useRef } from 'react';
import Logo from '../image/logo.png';
import '../css/tailwind.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bulma/css/bulma.css'
import '../App.css';
import Scrollchor from 'react-scrollchor';

AOS.init();
function Navbar(){
  const ref = useRef();
  const [isOpen, setIsOpen] = useState('navbar-menu')
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [status, setStatus] =useState('navbar is-transparent has-background-light back ');
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
  
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      [ref, handler]
    );
  }
  useOnClickOutside(ref, () => setIsOpen('navbar-menu'));


  useEffect(() => {
    function onScroll() {
      let currentPosition =document.documentElement.scrollTop; // or use document.documentElement.scrollTop;
      if (currentPosition > 220) {
        // downscroll code
        console.log(currentPosition)
        setScrolling(true);
        setStatus('navbar is-transparent bg-white  is-fixed-top bg-purple-100 shadow ');
      } else {
        // upscroll code
        setScrolling(true);
        setStatus('navbar is-transparent  has-background-light back');
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return window.addEventListener("scroll", onScroll);
  }, [scrollTop]);
return(
  
    <div className="bg-purple-100">
    <nav className={status}  data-aos="fade-down"  data-aos-duration="2000">
      <div className="container md:py-4">
  <div className="navbar-brand md:w-64 h-16">
    <a className="navbar-item" href="/">
      <img src={Logo} alt="logo" />
    </a>
    <div  className="navbar-burger burger" onClick={() => setIsOpen('block')}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div className={isOpen}  ref={ref}>
    <div className="navbar-start">
      <a className="navbar-item text-gray-600 text-md font-bold " href="/">
        Home
      </a>

      <Scrollchor to="#about" className="navbar-item text-gray-600 text-md font-bold">
    
        About
      </Scrollchor>
     
      <Scrollchor to="#sponsors" className="navbar-item text-gray-600 text-md font-bold">
    
    Sponsors
  </Scrollchor>
  <Scrollchor to="#contributors" className="navbar-item text-gray-600 text-md font-bold">
    
    Contributors
  </Scrollchor>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
           
          </p>
          <p className="control">
          
          <a href="https://www.mutualaid.fund" className="bg-purple-900 px-4 text-gray-100 font-bold md:w-32 py-2 rounded-full shadow-lg">
            <strong>Become a sponsor </strong>
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