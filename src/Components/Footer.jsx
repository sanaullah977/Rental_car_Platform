import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer sm:footer-horizontal bg-blue-900 text-neutral-content p-10   items-center justify-around ">
          <nav className="flex gap-3 items-center">
            <img className="h-11 rounded-full" src={logo} alt="" />
            {/* <span className="text-white font-bold">Pet Care</span> */}
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h1 className="text-[18] font-semibold">Social Links</h1>
            <span className="flex items-center gap-3 text-gray-400">
              <FaSquareXTwitter />
              @Pet Care
            </span>
            <span className="flex items-center gap-3 text-gray-400">
              <FaLinkedin />
              @Pet Care
            </span>
            <span className="flex items-center gap-3 text-gray-400">
              <FaSquareFacebook />
              @Pet Care
            </span>
            <span className="flex items-center gap-3 text-gray-400">
              <MdEmail />
              support@Pet_Care.com
            </span>
          </nav>
        </footer>

        <div className=" flex flex-col md:flex-col items-center  bg-black w-[768px] md:w-[1900px] h-[100px] text-white md:text-white justify-center">
          <span className="border-t-2 border-gray-700 w-[768px] md:w-[1350px]  "></span>
          <p className=" p-3 md:p-10 text-[18px]">
            © 2025 <span>Pet Care</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
