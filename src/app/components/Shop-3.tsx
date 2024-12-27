import Image from "next/image";


export default function ProductView() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-x-hidden rounded-lg bg-gray-100">
            <Image
              src="/placeholder.svg"
              alt="Product image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex gap-4">
            {[1, 2].map((index) => (
              <div
                key={index}
                className={`relative aspect-square w-20  overflow-hidden rounded-lg bg-gray-100 ${
                  index === 0 ? "ring-2 ring-black" : ""
                }`}
              >
                <Image
                  src="/placeholder.svg"
                  alt={`Product thumbnail ${index + 1}`}
                  fill
                  sizes="80px"
                  className=" object-cover "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Floating Phone</h1>
            <div className="mt-2 flex items-center gap-2">
              {Array.from({ length: 5 }).map(() => (
              "j"
              ))}
              <span className="text-sm text-gray-500">(5 reviews)</span>
            </div>
          </div>

          <div className="text-2xl font-bold">$1,595.55</div>

          {/* Color Selection */}
          <div>
            <h3 className="font-medium">Color</h3>
            <div className="mt-2 flex gap-2">
              {["bg-yellow-400", "bg-blue-400", "bg-green-400", "bg-black"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`h-6 w-6 rounded-full ${color} ${
                      index === 0 ? "ring-2 ring-black ring-offset-2" : ""
                    }`}
                  />
                )
              )}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200">
              <button className="px-3 py-2 hover:bg-gray-100">-</button>
              <span className="w-12 text-center">1</span>
              <button className="px-3 py-2 hover:bg-gray-100">+</button>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>

          {/* Product Tabs */}
          <div className="mt-8">
            <div className="flex gap-4 border-b">
              <button className="py-2 px-4 text-gray-600 border-b-2 border-transparent hover:border-black">
                Description
              </button>
              <button className="py-2 px-4 text-gray-600 border-b-2 border-transparent hover:border-black">
                Additional Information
              </button>
              <button className="py-2 px-4 text-gray-600 border-b-2 border-transparent hover:border-black">
                Reviews (5)
              </button>
            </div>
            <div className="mt-4 text-gray-600">
              <p>
                Experience the future of phone accessories with our Floating Phone stand.
                This innovative design lets you display your device in style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
