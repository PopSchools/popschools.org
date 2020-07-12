import React, { useState } from 'react';
import Navbar from './Navbar';
import '../css/tailwind.css';
import '../App.css';
import Homeimage from '../image/home.jpeg';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
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
         
         <div><button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-lg">
Join our community
</button></div>

<div><button class="bg-transparent bg-purple-500 text-gray-100 font-bold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-lg">
Donate
</button></div>

        </div>
          </div>
         </div>
         <div className="w-full md:w-2/5 ">
         <AnimatedOnScroll animationIn="bounceInRight" animationOut="fadeIn">
         <div class="px-3 md:py-24 ">
        <img src={Homeimage} alt="" className="w-full  rounded-lg shadow-lg"/>
</div>
</AnimatedOnScroll>
         </div>

 </div>
</div></div>

            
        </div>
        </div>
    )
}

export default Home;