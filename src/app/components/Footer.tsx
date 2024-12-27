import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Brand and Social */}
        <div className="flex justify-between items-center mb-10 bg-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Bandage</h2>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="text-blue-500 hover:text-blue-600">
         <FaFacebook />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
             <FaInstagram />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
           <FaTwitter />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4">Company Info</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Business Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">User Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Live Chat</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">IOS & Android</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Watch a Demo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Customers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">API</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white"
              />
              <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold tracking-wide p-2 -ml-7
              ">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600 text-center pt-6 border-t -ml-[1000px]">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  )
}

