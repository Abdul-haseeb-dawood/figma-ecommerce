'use client'

import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TiSocialYoutube, TiMail } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Login from "./Login";




export default function ContactUs() {
  return (
    <div>
     {/* Main Navigation */}
     <header className="bg-gray-100 mb-10">
        {/* Top Bar */}
        <div className="flex xs:hidden sm:hidden justify-between items-center px-4 py-4 text-sm bg-green-700 text-white">
          <div className="flex space-x-4">
            <span className="flex">
              <span className="text-lg ">
                <FiPhone />
              </span>
              (231) 555-0110
            </span>
            <span>|</span>
            <span className="flex">
              {" "}
              <span className="text-2xl -mt-1">
                <TiMail />
              </span>{" "}
              michael.s@example.com
            </span>
          </div>
          <h1>Follow us and get a chance to win 80% off</h1>
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <div className="flex space-x-4 text-2xl pr-4 ">
              <a href="#" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400">
                <TiSocialYoutube />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="sm:flex-none lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center px-4 lgpy-4 shadow-md">
          <div className="text-2xl font-bold text-gray-800">Bandage</div>
          <ul className="xs xs:ml-36 xs:text-lg
                        sm sm:flex-none sm:mb-8 sm:ml-36  
                        md md:flex md:my-auto md:-ml-28
                        lg:flex lg:my-auto space-x-6 md:space-x-2 text-gray-600 md:flex-wrap justify-center sm:space-x-4">
            <li className="hover:text-blue-600 sm:ml-4 xs:ml-6">
              <a href="/">Home</a>
            </li>

            <li className="hover:text-blue-600 flex">
              <a href="/shop">Shop</a>
              <span className="pt-1 pl-2 pr-1 -mr-4">
                <MdKeyboardArrowDown />
              </span>
            </li>

            <li className="hover:text-blue-600">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="/contact">Contact</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="/pricing">Pricing</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="/pages">Pages</a>
            </li>
          </ul>
          <div className="sm:flex md:flex md:-ml-48 lg:flex sm:gap-28 xs:flex-none xs:ml-24 ">
           <div className="my-auto"><Login/></div>
          <button className="md:text-sm xs:w-52 xs:px-5 xs:py-2.5 md:py-2.5 sm:px-5 sm:py-2.5 sm:mb-3 md:tracking-tighter md:w-36 md:-ml-24 lg:w-44 lg:px-6 lg:py-3 bg-blue-500 text-white lg:text-sm rounded-md">Become a member  </button>
          </div>
        </nav>
      </header>

    <div className="container mx-auto px-4 py-8 md:flex md:items-center md:justify-between">
      {/* Text Section */}
      <div className="space-y-4 ml-10 xs:mb-28">
        <h4 className="text-base font-medium uppercase text-gray-600 ">Contact Us</h4>
        <h1 className="lg:text-5xl font-bold leading-tight tracking-wider md:text-3xl text-gray-800">
          Get in touch <br /> today!
        </h1>
        <p className="text-gray-500 font-semibold py-3">
          We know how large objects will act,<br /> but things on a small scale.
        </p>
        <div className="space-y-1 text-black font-bold mb">
          <p>
            Phone : +451 215 215
          </p>
          <p>
            Fax : +451 215 215
          </p>
        </div>
        <div className="flex space-x-4 text-gray-800 hover:text-gray-900">
              <a
                href="#"
                className="transition-colors text-2xl"
              >
                  <FaTwitter />
                
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="transition-colors text-2xl"
              >
                <FaFacebookSquare />
             

                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="transition-colors text-2xl"
              >
                 <FaInstagram />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="transition-colors text-2xl"
              >
             <FaLinkedin />

                <span className="sr-only">Twitter</span>
              </a>
            </div>
      </div>

      {/* Image Section */}
      <div className="relative md:mt-0 md:w-1/2">
        <div className="absolute inset-0 -mt-16 -z-10 rounded-full bg-pink-100"></div>
        <Image
          src="/picture/contact-1.png" 
          alt="Family Shopping"
          width={500}
          height={500}
          className="rounded-lg -mt-16"
        />
      </div>
    </div>





    <div className="container mx-auto px-4 py-16 text-center">
      {/* Header Section */}
      <div className="mb-16 space-y-4">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-600">Visit our office</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          We help small businesses
          <br />
          with big ideas
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Phone Card */}
        <div className="border-0 shadow-none">
          <div className="flex flex-col items-center space-y-4 p-6 my-14">
            <div className="rounded-full p-3">
            <span><Image src={"/picture/iconp.png"} alt="phone" width={50} height={50} ></Image></span>
            </div>
            <div className="space-y-2 text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-base tracking-wider text-gray-600 font-semibold">Get Support</p>
              <button className="hover:bg-gray-800 border-2 border-blue-400 
              p-3 px-6 text-blue-400 rounded-full font-medium">
                Submit Request
              </button>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="border-0 bg-gray-800 text-white shadow-none h-[25rem] ">
          <div className="flex flex-col items-center space-y-4 p-6 my-14">
            <div className="rounded-full p-3 ">
            <span className="text-6xl text-blue-400">
            <FaLocationDot/>
            </span>
            </div>
            <div className="space-y-2 text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-base tracking-wider text-white font-semibold mb-1">Get Support</p>
              <button className="hover:bg-gray-800 border-2 border-blue-400 
              p-3 px-6 text-blue-400 rounded-full font-medium">
                Submit Request
              </button>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="border-0 shadow-none">
          <div className="flex flex-col items-center space-y-4 p-6 my-14">
            <div className="rounded-full p-3">
          <span>
            <Image src={"/picture/iconm.png"} alt="message" width={50} height={50}></Image>
          </span>
            </div>
            <div className="space-y-2 text-sm">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-base tracking-wider text-gray-600 font-semibold">Get Support</p>
              <button className="hover:bg-gray-800 border-2 border-blue-400 
              p-3 px-6 text-blue-400 rounded-full font-medium">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <Image 
             src={"/picture/arrow 2.png"}
             alt="arrow"
              width={80}
              height={80}
              className="lg:ml-[35rem] sm:ml-[12rem] xs:ml-16 mt-20 mb-5 flex justify-center"
            />
      <div className=" space-y-4 text-center ">
        <p className="text-lg font-bold uppercase tracking-wide text-gray-600">

          We can&apos;t wait to meet you
        </p>
        <h2 className="text-5xl font-bold text-gray-800 pt-1">Let&apos;s Talk</h2>
        <button className="mt-6 rounded-md bg-blue-400 px-8 hover:bg-blue-600 p-3 text-white
        text-base font-semibold">
          Try it free now
        </button>
      </div>
    </div>
  

    </div>
  )
}
