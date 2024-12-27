import Image from "next/image";
import React from "react";

const About3 = () => {
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
     
      <div className="text-center mb-24 mt-14">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Big Companies Are Here
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-medium tracking-wide">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center py-12 border-t pt-32">
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
    </div>
  );
};

export default About3;
