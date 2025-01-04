import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import featureImg from "../assets/images/feature-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "./About";
import ServicesList from "./ServicesList";
import Doctors from "./Doctors";

const Home = () => {
  return (
    <>
      {/* Hero section with gradient background */}
      <section className="hero__section pt-16 pb-20 bg-gradient-to-r from-teal-50 via-teal-50 to-teal-100 text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="lg:w-[570px] mx-auto lg:mx-0">
                <h1 className="text-[28px] leading-[38px] font-bold text-black md:text-[40px] md:leading-[50px]">
                  We help patients live a healthy, longer life.
                </h1>
                <Link to="/doctors">
                  <button className="bg-[#00A9E0] text-white py-3 px-8 mt-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                    Request an Appointment
                  </button>
                </Link>
              </div>

              {/* Hero Counter with new styles */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 mt-8">
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-red-600">
                    10+
                  </h2>
                  <span className="block w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-2"></span>
                  <p className="text-black mt-2">Years of Experience</p>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-red-600">
                    15+
                  </h2>
                  <span className="block w-16 h-1 bg-purple-400 rounded-full mx-auto mt-2"></span>
                  <p className="text-black mt-2">Clinic Locations</p>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-red-600">
                    100%
                  </h2>
                  <span className="block w-16 h-1 bg-teal-400 rounded-full mx-auto mt-2"></span>
                  <p className="text-black mt-2">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Hero Images */}
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-end">
              <div className="w-[50%] md:w-[40%] lg:w-[30%] mt-4 md:mt-0">
                <img
                  src={heroImg01}
                  alt="Hero 1"
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
              <div className="w-[50%] md:w-[40%] lg:w-[30%] space-y-4 mt-4 md:mt-0">
                <img
                  src={heroImg02}
                  alt="Hero 2"
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                />
                <img
                  src={heroImg03}
                  alt="Hero 3"
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Providing the best medical services with a different background */}
      <section className="bg-gradient-to-r from-teal-50 via-teal-50 to-teal-100 py-16">
        <div className="container">
          <div className="lg:w-[470px] mx-auto text-center">
            <h2 className="text-3xl font-semibold text-headingColor mb-4">
              Providing the best medical services
            </h2>
            <p className="text-[16px] text-textColor">
              World-Class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 text-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <div>
                <img
                  src={icon01}
                  alt="Find a Doctor"
                  className="mx-auto mb-4"
                />
              </div>
              <h2 className="text-[26px] font-semibold text-headingColor mt-[30px]">
                Find a Doctor
              </h2>
              <p className="text-[16px] text-textColor font-[400] mt-4">
                World-Class care for everyone. Our health system offers
                unmatched, expert health care. From the lab to clinic.
              </p>
            </div>

            <div className="py-[30px] px-5 text-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <div>
                <img
                  src={icon02}
                  alt="Find a Location"
                  className="mx-auto mb-4"
                />
              </div>
              <h2 className="text-[26px] font-semibold text-headingColor mt-[30px]">
                Find a Location
              </h2>
              <p className="text-[16px] text-textColor font-[400] mt-4">
                World-Class care for everyone. Our health system offers
                unmatched, expert health care. From the lab to clinic.
              </p>
            </div>

            <div className="py-[30px] px-5 text-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <div>
                <img
                  src={icon03}
                  alt="Book Appointment"
                  className="mx-auto mb-4"
                />
              </div>
              <h2 className="text-[26px] font-semibold text-headingColor mt-[30px]">
                Book Appointment
              </h2>
              <p className="text-[16px] text-textColor font-[400] mt-4">
                World-Class care for everyone. Our health system offers
                unmatched, expert health care. From the lab to clinic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Medical Services Section with a wave background */}
      <section className="bg-gradient-to-r from-teal-50 via-teal-50 to-teal-100 py-16 text-headingColor">
        <div className="container">
          <div className="xl:w-[470px] mx-auto text-center">
            <h2 className="text-3xl font-semibold">Our Medical Services</h2>
            <p className="text-[16px] text-gray-600 mt-4">
              World-Class services that cater to every need, from routine
              checkups to specialized treatments.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
    </>
  );
};

export default Home;
