import Image from "next/image"

interface Product {
  id: number
  name: string
  department: string
  price: string
  image: string
  colors: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "Graphic Design",
    department: "Graphic Department",
    price: "$24.95",
    image: "/picture/bs8.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"]
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "Graphic Department",
    price: "$24.95",
    image: "/picture/bs5.png",
    colors: ["#F0F8FF", "#FFE4E1", "#98FB98", "#DDA0DD"]
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "Graphic Department",
    price: "$24.95",
    image: "/picture/bs4.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"]
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "Graphic Department",
    price: "$24.95",
    image: "/picture/bs6.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"]
  },
  {
    id: 5,
    name: "Graphic Design",
    department: "Fashion Department",
    price: "$24.95",
    image: "/picture/bs7.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"]
  },
  {
    id: 6,
    name: "Graphic Design",
    department: "Fashion Department",
    price: "$24.95",
    image: "/picture/bs1.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"]
  },
  {
    id: 7,
    name: "Graphic Design",
    department: "Fashion Department",
    price: "$24.95",
    image: "/picture/bs2.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"]
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "Fashion Department",
    price: "$24.95",
    image: "/picture/bs3.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"]
  },
]

export default function BestsellerProducts() {
  return (
    <div className="py-12 px-4 md:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h3 className="text-sm text-gray-600 mb-2">Featured Products</h3>
        <h2 className="text-2xl font-semibold">BESTSELLER PRODUCTS</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[3/4] mb-4 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className=" transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.department}</p>
              <p className="text-sm font-semibold mb-3">{product.price}</p>
              <div className="flex justify-center gap-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

