import React from "react";
import { MdDone } from "react-icons/md";
import hero1 from "../assets/hero1.jpg";
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.0.jpg'
import Trending from "./Treanding";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={slider1}
      className="mx-auto h-[600px] min-w-screen px-20" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={slider2}
      className="mx-auto h-[600px] min-w-screen px-20" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={slider3}
      className="mx-auto h-[600px] min-w-screen px-20" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={slider4}
      className="mx-auto h-[600px] min-w-screen px-20" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>




      <div className="flex justify-around py-10 mx-auto px-20">
        <img className="rounded-4xl h-3/4" src={hero1} alt="" />
        <div className="m-10">
          <h3 className="font-bold text-7xl px-15 mx-10 ">Complete veterinary services for every stage of pet’s life</h3>
          <p className=" text-gray-400 text-2xl py-10 px-15 mx-10">
            Our veterinary team is committed to providing safe effective and
            compassionate care for pets of all ages
          </p>
          <div className="px-15 py-5 mx-10 ">
            <div className="py-5 flex">
                <span className="font-semibold text-l flex  items-center "><span className="text-purple-600"><MdDone /></span> Modern equipment </span>
                <span className="font-semibold text-l flex items-center px-10"><span className="text-purple-600"><MdDone /></span> Flexible solutions</span>
            </div>
            <div className="flex">
                <span className="font-semibold text-l flex items-center "><span className="text-purple-600"><MdDone /></span>Certified experts </span>
                <span className="font-semibold text-l flex items-center px-10"><span className="text-purple-600"><MdDone /></span> Affordable prices</span>
            </div>
          </div>
        </div>
      </div>
      <Trending></Trending>
    </div>
  );
};

export default Home;
