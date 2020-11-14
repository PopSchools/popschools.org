import React from "react";
import Navbar from "./Navbar";
import "../css/tailwind.css";
import "../App.css";
// import 'bulma/css/bulma.css'
import homeimg from "../image/home.png";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { CheckCircleFilled, InteractionFilled } from "@ant-design/icons";
import Footer from "./Footer";
import "uikit/dist/css/uikit.css";
import "uikit/dist/js/uikit";

function Home() {
  return (
    <div>
      <Navbar />
      <div class="">
        <div className=" ">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/5 ">
                <div className=" px-3 py-16 ">
                  <p className="font-extrabold text-blue-900 text-center md:text-left  text-5xl">
                    Welcome to{" "}
                    <span
                      class="text-6xl text-gray-7
          900"
                    >
                      PopSchools
                    </span>{" "}
                  </p>
                  <p className="text-gray-600 py-4 text-2xl ">
                    We exist today to create an inclusive community for
                    pre-career and early-career software developers, provide
                    opportunities for networking, and make pathways to paying
                    work in tech roles
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-2 py-4 gap-4">
                    <div>
                      <a href="https://circle.popschools.com/c/welcome">
                        <button class="bg-transparent hover:bg-gray-900 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-lg">
                          Join our community
                        </button>
                      </a>
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 ">
                <AnimatedOnScroll animationIn="bounceInRight">
                  <div class="px-3 md:py-24 object-right ">
                    <img
                      src={homeimg}
                      alt=""
                      className="w-full  rounded-lg shadow-lg"
                    />
                  </div>
                </AnimatedOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service are placed here */}
      <div className=" mb-8 bgpro">
        <div className="container">
          <p className="text-gray-600 md:px-32 text-4xl font-bold text-center py-2">
            PopSchools is meant to create access to a safe and inclusive
            community, mutual aid, and paying work opportunities through
            apprenticeships to early-career technologists
          </p>
        </div>
        <div className="container  py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              className="ml-3 mr-3 px-4 bg-gray-300 rounded-lg shadow-lg"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              <p className="text-center text-6xl text-gray-800">
                <CheckCircleFilled />
              </p>
              <p className="text-center py-3 text-sm font-bold text-gray-800">
                {" "}
                Career Guidance
              </p>
            </div>
            <div
              className="ml-3 mr-3 px-4 bg-gray-300 rounded-lg shadow-lg"
              data-aos="flip-right"
            >
              <p className="text-center text-6xl text-gray-800">
                <InteractionFilled />
              </p>
              <p className="text-center py-3 text-sm font-bold text-gray-800">
                {" "}
                Study Group
              </p>
            </div>
            <div
              className=" ml-3 mr-3 px-4 bg-gray-300 rounded-lg shadow-lg"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="text-center text-6xl text-gray-800">
                <CheckCircleFilled />
              </p>
              <p className="text-center py-3 text-sm font-bold text-gray-800">
                {" "}
                Opportunities
              </p>
            </div>
            <div
              className=" ml-3 mr-3 px-4 bg-gray-300 rounded-lg shadow-lg"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="text-center text-6xl text-gray-800">
                <CheckCircleFilled />
              </p>
              <p className="text-center py-3 text-sm font-bold text-gray-800">
                {" "}
                Daily Challenges
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
