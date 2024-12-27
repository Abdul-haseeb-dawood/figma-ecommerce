import Image from "next/image";
import Link from "next/link";

export default function EditorPic() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">EDITORS PICK</h2>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Men Category */}
        <div className="relative group col-span-1 md:col-span-1 lg:col-span-2 h-[450px] ">
          <Link href="/men">
            <div className="relative h-full w-full">
              <Image
                src="/picture/Edi1.png"
                alt="Mens Fashion"
                fill
                className=""
              />
              <div className="absolute bottom-8 left-8">
                <button className="bg-white px-10 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                  MEN
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Women Category */}
        <div className="relative group col-span-1 md:col-span-1 h-[450px]">
          <Link href="/women">
            <div className="relative h-full w-full">
              <Image
                src="/picture/Edi2.png"
                alt="Womens Fashion"
                fill
                className=""
              />
              <div className="absolute bottom-8 left-8">
                <button className="bg-white px-10 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                  WOMEN
                </button>
              </div>
            </div>
          </Link>
        </div>
<div className="">
        {/* Accessories Category */}
        <div className="relative group col-span-1 md:col-span-1 mb-5 h-[220px]">
          <Link href="/accessories">
            <div className="relative h-full w-full">
              <Image
                src="/picture/Edi3.png"
                alt="Accessories"
                fill
                className=""
              />
              <div className="absolute bottom-8 left-8">
                <button className="bg-white px-10 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                  ACCESSORIES
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Kids Category */}
        <div className="relative group col-span-1 md:col-span-1 h-[220px]">
          <Link href="/kids">
            <div className="relative h-full w-full">
              <Image
                src="/picture/Edi4.png"
                alt="Kids Fashion"
                fill
                className=""
              />
              <div className="absolute bottom-8 left-8">
                <button className="bg-white px-10 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                  KIDS
                </button>
              </div>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

