import Image from "next/image";

export default function Hero1() {
    return (
      <div className="bg-emerald-600 min-h-[600px] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <div className="text-sm font-medium tracking-wider">SUMMER 2020</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Vita Classic Product
              </h1>
              <p className="text-white/80 max-w-md">
                We have a fresh selection of products at an amazing price. Explore our new arrivals.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-2xl md:text-3xl font-bold">$16.45</div>
                <button className="bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700
                hover:text-white transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0">
                <Image
                  src="/picture/row.png"
                  alt="Model wearing Vita Classic Product"
                  className="h-full w-full object-center"
                  width={1110}
                  height={1110}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  