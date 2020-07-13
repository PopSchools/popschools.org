import React, { useState } from 'react';
import Navbar from './Navbar';
import '../css/tailwind.css';
import '../App.css';
import Homeimage from '../image/home.jpeg';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import {CheckCircleFilled,GithubFilled,InteractionFilled,TwitterCircleFilled,FacebookFilled} from '@ant-design/icons';
import about from '../image/home.jpeg';
import bak from '../image/bak.svg';
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
         
         <div><a href="https://popschools.club/"><button class="bg-transparent hover:bg-purple-900 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-lg">
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
    <div className="">
            <img src={bak}  className="px-4 w-32 h-32"/>
            <p className="px-4 text-gray-200 text-md py-2 prose ">
            PopSchools is a collective community effort. We are currently building the PopSchools community primarily through our newsletter, GitHub, and our community at popschools.club. Our website is under construction but you can expect to find out more about us, what we do, and who has supported us there soon.
            </p>
        </div>
        <div className="px-12">
        <img src={about} className="w-64 transform rotate-45 rounded-lg shadow bg-opacity-100 "/>
        <img src={about} className="w-64 transform rotate-45 rounded-lg border-4 border-gray-100"/>
        </div>

       
    
    </div>
</div>
 {/* Meet founder */}
 <div className="container rounded-lg py-16">
 <p className=" text-center text-2xl font-extrabold text-gray-900">Meet our Founder</p>
        <center><hr className="w-48"/></center> 
     <div className="grid md:grid-cols-2">
         <div className="py-4 px-12 float-right">
         <img src={about} className=" w-full rounded-lg shadow border-4 border-purple-600 " />
         </div>
         <div>
         

         <p className="text-lg text-gray-600 px-3 py-4 " data-aos="fade-left">My work is about creating opportunities for technologists like myself who are just getting started in their tech careers.

I recognize from experience the extra effort it takes to get a great start when you are dealing with financial hardships and a number of non-negotiable adult responsibilities.

When you sponsor me, you allow me the mental space to do my work to the best of my ability.</p>
<p className="text-gray-700 text-2xl font-bold pt-8">- Nikema Prophet</p>
<a href="https://github.com/PopSchools/popschools.org"><span className=" px-3 text-gray-600 text-2xl"><GithubFilled /></span> </a>
            <a href=""><span className="px-3 text-gray-600 text-2xl"><TwitterCircleFilled /></span></a>

         </div>
     </div>

 </div>
        {/* Sponsors */}

        {/* Contributors */}

 {/* footer */}
 <Footer/>
        </div>
    )
}

export default Home;