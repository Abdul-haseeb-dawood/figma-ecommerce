"use client"

import Image from "next/image"
import { MdKeyboardArrowDown } from "react-icons/md";


export default function Pricing1() {

  const brands = [
    { name: "Hooli", logo: "/picture/fa1.png" },
    { name: "Hooli", logo: "/picture/fa2.png" },
    { name: "Lyft", logo: "/picture/fa3.png" },
    { name: "Stripe", logo: "/picture/fa4.png" },
    { name: "AWS", logo: "/picture/fa5.png" },
    { name: "Reddit", logo: "/picture/fa6.png" },
  ];

  return (
    <div>
     {/* Main Navigation */}
     <header className="bg-gray-100">
      

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
         <p className="lg:mt-2 lg:mr-12 text-blue-500 sm:ml-20 sm:mt-2 xs:ml-20 xs:my-3 font-bold">Login</p>
          <button className="md:text-sm xs:w-52 xs:px-5 xs:py-2.5 md:py-2.5 sm:px-5 sm:py-2.5 sm:mb-3 md:tracking-tighter md:w-36 md:-ml-24 lg:w-44 lg:px-6 lg:py-3 bg-blue-500 text-white lg:text-sm rounded-md">Become a member  </button>
          </div>
        </nav>
      </header>



    <div className="max-w-6xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-16 py-5 bg-gray-50">
        <p className="text-sm text-gray-500 font-semibold uppercase mb-4">PRICING</p>
        <h1 className="text-5xl font-bold mb-7">Simple Pricing</h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-black font-semibold">Home</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500 font-semibold">Pricing</span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

   

      {/* Trust Badge */}
      <div className="flex justify-center gap-5 mb-32">
      <div className="text-center  text-black font-semibold mt-2">
        Monthly
      </div>
      <div>
        <Image src={"/picture/button.png"} alt="on / off" width={40} height={40} className="mt-2.5"/>
      </div>
      <div className="text-center text-black font-semibold  mt-2">
        Yearly
      </div>
      <button className="bg-blue-300 p-2 px-5 text-blue-700 rounded-3xl font-medium">save 25%</button>
    </div>


<div className="lg:flex lg:justify-center md:flex md:justify-center sm:mx-36">
    <Image src={"/picture/image3.png"} width={300} height={600} alt="fsss" className="h-[20rem]  ">
    </Image>
    <Image src={"/picture/image2.png"} width={320} height={700} alt="fsss" className="h-[23rem] -mt-10">
    </Image>
    <Image src={"/picture/image1.png"} width={300} height={600} alt="fsss" className="h-[20rem]">
    </Image>
</div>

    </div>

<h1 className="text-xl font-bold text-gray-700 text-center mt-10">Trusted By Over 4,000 Big Companies</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center py-12 pt-32">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={50}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
    
    </div>
  )
}

