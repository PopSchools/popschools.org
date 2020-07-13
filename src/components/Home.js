import React, { useState } from 'react';
import Navbar from './Navbar';
import '../css/tailwind.css';
import '../App.css';
import Homeimage from '../image/home.jpeg';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import {CheckCircleFilled,InteractionFilled} from '@ant-design/icons';
import about from '../image/home.jpeg';
import Footer from './Footer';
function Home(){
    return (
        <div>
        
        <div class="bg-purple-100">
        <Navbar/>

<div className="bgpro ">
<div className="container">
 <div className="flex flex-wrap">
 <div className="w-full md:w-3/5 ">
     <div className=" px-3 py-16 ">
          <p className="font-extrabold text-blue-900   text-5xl">Welcome to <span class="text-6xl text-purple-700">Popschools</span> </p>
          <p className="text-gray-600 py-4 text-2xl ">We exist today to create an inclusive community for pre-career and early-career software developers, provide opportunities for networking, and make pathways to paying work in tech roles</p>
       

        <div className="grid grid-cols-2 md:grid-cols-2 py-4 gap-4">
         
         <div><a href="https://popschools.club/"><button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-lg">
          Join our community
        </button>
        </a>

       </div>

       <div>

   </div>

        </div>
          </div>
         </div>
         <div className="w-full md:w-2/5 ">
         <AnimatedOnScroll animationIn="bounceInRight" >
         <div class="px-3 md:py-24 object-right ">
        <img src={Homeimage} alt="" className="w-full  rounded-lg shadow-lg"/>
</div>
</AnimatedOnScroll>
         </div>

 </div>
</div></div>

            
        </div>
        {/* service are placed here */}
        <div className=" mb-8">
            <div className="container">
            <p className="text-gray-600 md:px-32 text-center py-2">PopSchools is meant to create access to a safe and inclusive community, mutual aid, and paying work opportunities through apprenticeships to early-career software developer</p>

            </div>
            <div className="container  py-8">
              <div className="grid  md:grid-cols-3 gap-8">

               <div className="ml-3 mr-3 px-4 bg-gray-300 rounded-lg shadow-lg" data-aos="zoom-in-down" data-aos-duration="1000">
                   <p className="text-center text-6xl text-purple-800"><CheckCircleFilled /></p>
                   <p className="text-center py-3 text-sm font-bold text-purple-800"> Career Guidance</p>
               </div>
               <div className="ml-3 mr-3 px-4 bg-gray-300 rounded-lg shadow-lg" data-aos="flip-right">
                   <p className="text-center text-6xl text-purple-800"><InteractionFilled /></p>
                   <p className="text-center py-3 text-sm font-bold text-purple-800"> Career Guidance</p>
               </div>
               <div className=" ml-3 mr-3 px-4 bg-gray-300 rounded-lg shadow-lg" data-aos="fade-down"   data-aos-duration="1000">
                   <p className="text-center text-6xl text-purple-800"><CheckCircleFilled /></p>
                   <p className="text-center py-3 text-sm font-bold text-purple-800"> Career Guidance</p>
               </div>
               

              </div>
            </div>
        </div>
        {/* About us */}
<div className="bg-purple-600">
    <div className="grid md:grid-cols-2 gap-4 px-12">
        <div className="px-12">
        <img src={about} className="w-64 transform rotate-45 rounded-lg shadow "/>
        <img src={about} className="w-64 transform rotate-45 rounded-lg border-4 border-gray-100"/>
        </div>

        <div className="">
            <p className="uppercase py-8 text-gray-300  text-4xl font-extrabold">about us</p>
            <p className="text-gray-200 text-2xl py-2">
            PopSchools is a collective community effort. We are currently building the PopSchools community primarily through our newsletter, GitHub, and our community at popschools.club. Our website is under construction but you can expect to find out more about us, what we do, and who has supported us there soon.
            </p>
        </div>
    
    </div>
</div>

        {/* Sponsors */}

 {/* footer */}
 <Footer/>
        </div>
    )
}

export default Home;