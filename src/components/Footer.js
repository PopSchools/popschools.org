import React, { useState } from 'react';
import Logo from '../image/logo.png';
import '../css/tailwind.css';
import '../App.css';
import {GithubFilled,TwitterCircleFilled,FacebookFilled  } from '@ant-design/icons';

function Footer(){
    return(
        <>
        <div className="mtop">

            <div className="container py-8">

                <div className="flex flex-wrap ">
                    <div className="w-full md:w-1/3 ">
                     <img src={Logo}  className="w-64 "/>
                    </div>

                    <div className="w-full md:w-2/3">

                        <div className="grid grid-cols-2 md:grid-cols-3">
                            <div >
                                <div  data-aos="fade-down"   data-aos-duration="1000">
                                <p className="py-3 px-3 text-gray-600 font-bold">Essential links</p>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Popschool club</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Mutualaid.fund</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">ForkThisRepo.com</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">PopSchools.studio</p></a>
                                </div>
                                <div  data-aos="fade-down"   data-aos-duration="1000">
                                <p className="pt-16 px-3 text-gray-600 font-bold">Developers</p>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600  py-2">Open source projects</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Webinars</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Communities</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Meetup</p></a>
                                </div>
                            </div>
                            <div>
                            <div  data-aos="fade-down"   data-aos-duration="1000">
                                <p className="pt-3 px-3 text-gray-600 font-bold">Organization</p>

                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">About us</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Sponsors</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Career</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Contact</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Team</p></a>
                                </div>
                                <div  data-aos="fade-down"   data-aos-duration="1000">
                                <p className="pt-5 px-3 text-gray-600 font-bold">Resources</p>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Blog</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Webinars</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Career Guidance</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 py-2">Meetup</p></a>
                               </div>
                            </div>
                            <div>
                                <p className="py-3 px-3 text-gray-600 font-bold">On Social Media</p>
                                <p className="text-gray-600 py-4 px-3">Follow us on our social media</p>
                                <hr/>

                               <a href="https://github.com/PopSchools/popschools.org"><span className=" px-3 text-purple-600 text-4xl"><GithubFilled /></span> </a>
                               <span className="px-3 text-purple-600 text-4xl"><TwitterCircleFilled /></span> 
                               <span className="px-3 text-purple-600 text-4xl"><FacebookFilled /></span>
                            </div>

                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2">
                            <div className="py-6">
                            <span className="text-left text-gray-600 py-2 px-3"><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />{(new Date().getFullYear())} Popschools, Inc</span> 
                            </div>

                            <div className="py-6">
                            <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600 inline-block mr-2">Privacy</p></a>
                                <a href="" ><p className="px-3 text-gray-600 hover:text-purple-600  inline-block mr-2">Terms and Condition</p></a>
                                
                            </div>

                        </div>


                    </div>



                </div>

            </div>

        </div>

        </>
    )
}

export default Footer;