import Image from "next/image"
import { RxTriangleRight } from "react-icons/rx";

export default function About1() {
  return (
    <div className="max-w-4xl  mx-auto px-4 py-12">
      {/* Header Section */}
     

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">15K</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">150K</h3>
          <p className="text-gray-600">Monthly Visitors</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">15</h3>
          <p className="text-gray-600">Countries Worldwide</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">100+</h3>
          <p className="text-gray-600">Top Partners</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative rounded-2xl overflow-hidden aspect-video">
        <Image
          src="/picture/media.png"
          alt="Mountain landscape reflected in lake"
          className="w-[30rem] h-[40rem]"
          fill
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
         
            className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
           
          >
            <span className="text-white text-7xl">
            <RxTriangleRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

