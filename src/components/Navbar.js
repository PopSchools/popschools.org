import React, { useState,useEffect,useRef } from 'react';
import Logo from '../image/logo.png';
import '../css/tailwind.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bulma/css/bulma.css'
import '../App.css';
import Scrollchor from 'react-scrollchor';
import { HiMenuAlt3 } from "react-icons/hi";

AOS.init();
function Navbar(){
  const ref = useRef();
  const [isOpen, setIsOpen] = useState('navbar-menu')
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [status, setStatus] =useState('navbar is-transparent has-background-white back ');
  const [toggle,setToggle]=useState(0);
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
  useOnClickOutside(ref, () => setIsOpen('navbar-menu '));
  const handleToggle =()=>{
    if(toggle===0){
      setIsOpen('block');
      setToggle(1)
    }else{
      setIsOpen('navbar-menu')
      setToggle(0)
    }
  }

  useEffect(() => {
    function onScroll() {
      let currentPosition =document.documentElement.scrollTop; // or use document.documentElement.scrollTop;
      if (currentPosition > 220) {
        // downscroll code
        console.log(currentPosition)
        setScrolling(true);
        setStatus('navbar  has-background-white is-fixed-top shadow back');
      } else {
        // upscroll code
        setScrolling(true);
        setStatus('navbar is-transparent has-background-white   back');
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return window.addEventListener("scroll", onScroll);
  }, [scrollTop]);
return(
  
    <div className="has-background-white">
    <nav className={status}  data-aos="fade-down"  data-aos-duration="2000">
      <div className="container md:py-4">
  <div className="navbar-brand md:w-64 h-16">
    <a className="navbar-item" href="/">
      <img src={Logo} alt="logo" />
    </a>
    <div  className="navbar-burger burger" >
      
    </div>
    <div className="-mr-2 -my-2 md:hidden">
        <button type="button" onClick={handleToggle} className="inline-flex items-center justify-center p-4 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">

          <HiMenuAlt3 size="2em"/>
        </button>
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
         
          <p className="control py-2">
          
          <a href="https://www.mutualaid.fund" className="bg-gray-900 no-underline px-4 text-gray-100 font-bold md:w-32 py-2 rounded-lg shadow-md">
            <strong>Become a sponsor </strong>
          </a>
         
          </p>
          <div><a href="https://circle.popschools.com/c/welcome"><button class="bg-transparent hover:bg-gray-900 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-lg">
          Join our community
        </button>
        </a>

       </div>
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