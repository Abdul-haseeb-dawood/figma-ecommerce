import Image from "next/image";

export default function Hero2() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] md:aspect-square w-full overflow-hidden rounded-lg">
          <Image
            src="/picture/hero2.png"
            alt="Featured post image"
            fill
            className=""
            priority
          />
        </div>
        <div className="space-y-6 max-w-lg">
          <div className="text-sm font-medium text-gray-400 tracking-wide">
            SUMMER 2020
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Part of the Neural <br /> Universe
          </h1>
          <p className="text-gray-600 text-lg">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <div className="flex gap-4 items-center">
            <button className="bg-green-500 hover:bg-green-700 text-white p-2.5 font-bold tracking-wider px-6 rounded-md">
              BUY NOW
            </button>
            <button className="text-green-500 hover:text-gray-900 p-2 font-bold tracking-wider px-4 rounded-md border-green-500
            border-2">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

