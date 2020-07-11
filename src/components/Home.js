import React, { useState } from 'react';
import Navbar from './Navbar';
import '../css/tailwind.css';
function Home(){
    return (
        <div>
        
        <div class="bg-purple-100">
        <Navbar/>


<div className="container">
 <div className="flex flex-wrap">
 <div className="w-full md:w-3/5 ">
     <div className=" px-3 ">
          <p className="font-extrabold text-5xl">Welcome to <span class="text-6xl text-purple-700">Popschools</span> </p>
          <p className="text-gray-600">exists today to create an inclusive community for pre-career and early-career software developers, provide opportunities for networking, and make pathways to paying work in tech roles</p>
          <p className="font-extrabold text-6xl">Welcome to Popschools</p>

          <p className="font-extrabold text-5xl">Welcome to <span class="text-6xl text-purple-700">Popschools</span> </p>
          <p></p>
          <p className="font-extrabold text-6xl">Welcome to Popschools</p>
          </div>
         </div>
         <div className="w-full md:w-2/5">
        

         </div>

 </div>
</div>
            
        </div>
        </div>
    )
}

export default Home;