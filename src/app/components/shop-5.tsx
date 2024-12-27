import Image from 'next/image';
import React from 'react'

const Shop5 = () => {
    interface Product {
        id: number;
        name: string;
        department: string;
        price: string;
        image: string;
      }
      const brands = [
        { name: "Hooli", logo: "/picture/fa1.png" },
        { name: "Hooli", logo: "/picture/fa2.png" },
        { name: "Lyft", logo: "/picture/fa3.png" },
        { name: "Stripe", logo: "/picture/fa4.png" },
        { name: "AWS", logo: "/picture/fa5.png" },
        { name: "Reddit", logo: "/picture/fa6.png" },
      ];
      const products: Product[] = [
        {
          id: 1,
          name: "Graphic Design",
          department: "English Department",
          price: "$6.48",
          image: "/picture/bs-1.png",
        },
        {
          id: 2,
          name: "Graphic Design",
          department: "English Department",
          price: "$6.48",
          image: "/picture/bs-2.png",
        },
        {
          id: 3,
          name: "Graphic Design",
          department: "English Department",
          price: "$6.48",
          image: "/picture/bs-3.png",
        },
        {
          id: 4,
          name: "Graphic Design",
          department: "English Department",
          price: "$6.48",
          image: "/picture/bs-4.png",
        },
        {
          id: 5,
          name: "Graphic Design",
          department: "English Department",
          price: "$6.48",
          image: "/picture/bs-5.png",
        },
        {
          id: 6,
          name: "Graphic Design",
          department: "English Department",
          price: "$6.48",
          image: "/picture/bs-6.png",
        },
        {
          id: 7,
          name: "Graphic Design",
          department: "English Department",
          price: "$6.48",
          image: "/picture/bs-1.png",
        },
        {
          id: 8,
          name: "Graphic Design",
          department: "English Department",
          price: "$6.48",
          image: "/picture/bs-2.png",
        },
       
       
      ];
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
             
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center py-12 border-t">
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

export default Shop5
