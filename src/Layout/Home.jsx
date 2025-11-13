import React from "react";
import { MdDone } from "react-icons/md";
import hero1 from "../assets/hero1.jpg";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.0.jpg";
import Trending from "./Treanding";
import lowCost from "../assets/wallet.png";
import hour from "../assets/24-support.png";
import user from "../assets/user-tick.png";
import message from "../assets/messages-2.png";
import location from "../assets/location-tick.png";
import car from "../assets/car.png";
import calender from "../assets/calendar.png";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider1} className="mx-auto h-[600px] min-w-screen px-20" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="mx-auto h-[600px] min-w-screen px-20" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="mx-auto h-[600px] min-w-screen px-20" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slider4} className="mx-auto h-[600px] min-w-screen px-20" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-auto items-center my-20">
        <span className="text-blue-600 px-7 py-3 rounded-lg  bg-blue-100 mb-7">How It Work</span>
        <h3 className="font-semibold text-3xl mb-20">Rent with following 3 working steps</h3>
        <div className="flex gap-32 justify-center items-center">
          <span className="flex  flex-col justify-center items-center">
            <img className="bg-blue-100 p-5 mb-5 rounded-2xl" src={location} alt="" />
            <h3 className="mb-1 font-semibold text-lg">Choose location</h3>
            <p className="text-gray-500">Choose your and find your best car</p>
          </span>
          <span className="flex  flex-col justify-center items-center">
            <img className="bg-blue-100 p-5 mb-5 rounded-2xl" src={calender} alt="" />
            <h3 className="mb-1 font-semibold text-lg">Pick-up date</h3>
            <p className="text-gray-500  text-center">Select your pick up date and <br />
time to book your car</p>
          </span>
          <span className="flex   flex-col justify-center items-center">
            <img className="bg-blue-100 p-5 mb-5 rounded-2xl" src={car} alt="" />
            <h3 className="mb-1 font-semibold text-lg">Book your car</h3>
            <p className="text-gray-500 text-center">Book your car and we will deliver <br />
it directly to you</p>
          </span>
        </div> 
      </div>

      <div className="flex flex-col items-center sm:flex-row justify-around py-10 mx-auto sm:px-20 px-0">
        <img className="rounded-4xl h-3/4 heroCar" src={hero1} alt="" />
        
        <div className="m-10">
          <div className=" flex justify-center items-center">
            <span className="text-blue-600 px-7 py-3 rounded-lg  bg-blue-100 mb-7">Why Choose Us</span>
            </div>
          <h3 className="font-semibold text-5xl px-15 mx-10 ">
            
            We offer the best experience <br />with our rental deals
          </h3>
          <div className=" flex  items-center gap-3 py-5 px-15 mx-10">
            <img
              className="w-[60px] h-full bg-blue-100 rounded-2xl p-4"
              src={lowCost}
              alt=""
            />
            <span>
              <h3 className=" font-semibold text-xl  ">
                Best price guaranteed
              </h3>
              <p className=" text-gray-400 text-lg  ">
                Find a lower price? We’ll refund you 100% of the difference.
              </p>
            </span>
          </div>
          <div className=" flex  items-center gap-3 py-5 px-15 mx-10">
            <img
              className="w-[60px] h-full bg-blue-100 rounded-2xl p-4"
              src={user}
              alt=""
            />
            <span>
              <h3 className=" font-semibold text-xl  ">Experience driver</h3>
              <p className=" text-gray-400 text-lg  ">
                Don’t have driver? Don’t worry, we have many experienced driver
                for you.
              </p>
            </span>
          </div>
          <div className=" flex  items-center gap-3 py-5 px-15 mx-10">
            <img
              className="w-[60px] h-full bg-blue-100 rounded-2xl p-4"
              src={hour}
              alt=""
            />
            <span>
              <h3 className=" font-semibold text-xl  ">24 hour car delivery</h3>
              <p className=" text-gray-400 text-lg  ">
                Book your car anytime and we will deliver it directly to you.
              </p>
            </span>
          </div>
          <div className=" flex  items-center gap-3 py-5 px-15 mx-10">
            <img
              className="w-[60px] h-full bg-blue-100 rounded-2xl p-4"
              src={message}
              alt=""
            />
            <span>
              <h3 className=" font-semibold text-xl  ">
                24/7 technical support
              </h3>
              <p className=" text-gray-400 text-lg  ">
                Have a question? Contact Rentcars support any time when you have
                problem.
              </p>
            </span>
          </div>
        </div>
      </div>
      <Trending></Trending>
      
    </div>
  );
};

export default Home;
