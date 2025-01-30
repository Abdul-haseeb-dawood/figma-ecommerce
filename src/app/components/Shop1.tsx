import Image from "next/image";
import { TbBrandWindowsFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInstagram, FaStar } from "react-icons/fa6";
import { TiSocialYoutube, TiMail } from "react-icons/ti";
import { FaFacebook, FaTwitter, FaRegHeart, FaEye } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import Shop5 from "./shop-5";
import Login from "./Login";

const categories = [
  { name: "CLOTHES", items: 5, image: "/picture/card1.png" },
  { name: "CLOTHES", items: 5, image: "/picture/card2.png" },
  { name: "CLOTHES", items: 8, image: "/picture/card3.png" },
  { name: "CLOTHES", items: 7, image: "/picture/card4.png" },
  { name: "CLOTHES", items: 9, image: "/picture/card5.png" },
];

const brands = [
  { name: "Hooli", logo: "/picture/fa1.png" },
  { name: "Hooli", logo: "/picture/fa2.png" },
  { name: "Lyft", logo: "/picture/fa3.png" },
  { name: "Stripe", logo: "/picture/fa4.png" },
  { name: "AWS", logo: "/picture/fa5.png" },
  { name: "Reddit", logo: "/picture/fa6.png" },
];

interface Product {
  id: number;
  name: string;
  department: string;
  price: string;
  image: string;
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Graphic Design",
    department: "Graphic Department",
    price: "$6.48",
    image: "/picture/Edi1.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "Graphic Department",
    price: "$6.48",
    image: "/picture/Edi5.png",
    colors: ["#F0F8FF", "#FFE4E1", "#98FB98", "#DDA0DD"],
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "Graphic Department",
    price: "$6.48",
    image: "/picture/Edi8.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "Graphic Department",
    price: "$6.48",
    image: "/picture/Edi10.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 5,
    name: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    image: "/picture/Edi11.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 6,
    name: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    image: "/picture/Edi9.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 7,
    name: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    image: "/picture/Edi12.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    image: "/picture/Edi13.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    image: "/picture/Edi14.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    image: "/picture/Edi15.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    image: "/picture/Edi16.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    image: "/picture/Edi17.png",
    colors: ["#FFE4E1", "#87CEEB", "#98FB98", "#DDA0DD"],
  },
];
export default function Shop1() {
  return (
    <div>
      <header className="bg-gray-100">
        {/* Top Bar */}
        <div className="lg:flex xs:hidden md:flex sm:hidden  justify-between lg:justify-between  lg:items-center items-center px-4 py-4 text-sm bg-[#23856D]
         text-white sm:w-full md:w-full">
          <div className="flex space-x-4">
            <span className="flex">
              <span className="text-lg">
                <FiPhone />
              </span>
              (231) 555-0110
            </span>
            <span>|</span>
            <span className="flex">
              <span className="text-2xl -mt-1">
                <TiMail />
              </span>
              michael.s@example.com
            </span>
          </div>
          <h1 className="text-center md:text-left">Follow us and get a chance to win 80% off</h1>
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <div className="flex space-x-4 text-2xl pr-4">
              <a href="#" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400">
                <TiSocialYoutube />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="sm:flex-none lg:flex my-auto lg:justify-between lg:items-center md:flex md:justify-between md:items-center px-4 lgpy-4 shadow-md">
          <div className="text-2xl font-bold text-gray-800">Bandage</div>
          <ul className="sm:flex xs:flex-none xs:ml-32 sm:mb-8 md:flex md:my-auto sm:ml-36 lg:my-auto lg:flex space-x-6 md:space-x-2 text-gray-600  justify-center sm:space-x-4">
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
          <div className="md:flex md:-ml-20 lg:flex sm:flex xs:mt-3 xs:ml-32">
            <span className="text-lg pl-2 text-blue-600 ">
              <GoPerson className="xs:ml-10 xs:mb-2"/>
            </span>

            <Login/>
            <div className="flex text-xl space-x-4 pr-5 font-semibold text-blue-600">
              <IoIosSearch />
              <IoCartOutline />
              <CiHeart />
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="font-medium">Shop</span>
          </div>
        </nav>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] group overflow-hidden rounded-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="text-sm">{category.items} items</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <p className="text-lg text-gray-700 tracking-wide">
            Showing all 12 results
          </p>
          <p className="flex gap-4 ">
             <span className="mt-2 text-gray-500 text-xl">view:</span> 
             <span className="text-xl border-2 border-gray-300 p-3"><TbBrandWindowsFilled /></span>
             <span className="text-xl border-2 border-gray-300 p-3"><RxHamburgerMenu /></span>
              </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-md"></button>
            </div>

            <button className="flex border-2 border-gray-300">
              <div className="flex p-2 px-3 ">
                Popularity
                <div className="pt-1 pl-1">
                  <IoIosArrowDown />
                </div>
              </div>
            </button>
            <button className="gap-2 bg-blue-400 text-white p-2 px-4">
              Filter
            </button>
          </div>
        </div>

        {/* Brands */}
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
                <p className="text-sm text-gray-600 mb-2">
                  {product.department}
                </p>
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

      {/* SHOP PAGE 3 */}

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
    
              <Image
                src="/picture/cr-1.png"
                alt="Product image"
                width={300}
                height={300}
                className="xs:w-80 xs:h-72 sm:w-96 sm:h-80 md:w-96 md:h-80 lg:w-[30rem] lg:h-96"
              />
         
            <div className="flex gap-4">
              {[1, 2].map(( index) => (
                <div
                  key={index}
                  className={`relative aspect-square w-20 overflow-hidden rounded-lg bg-gray-100 ${
                    index === 0 ? "ring-2 ring-black" : ""
                  }`}
                >
                  <div className="h-[25rem] w-[20rem]">
                  <Image
                    src="/picture/cr-2.png"
                    alt={`Product thumbnail`}
                    fill
                    sizes="80px"
                    className="h-[25rem] w-[20rem]"
                  />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Floating Phone</h1>
              <div className="mt-2 flex items-center gap-2">
   
                  <FaStar />
                
                <span  className="text-sm text-gray-500">(5 reviews)</span>
              </div>
            </div>

            <div className="text-2xl font-bold">$1,139.33</div>

            {/* Product Tabs */}
            <div className="mt-8">
              <div className="lg:flex md:flex sm:flex xs:flex-col gap-4 border-b">
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
              <div className="mt-4  text-gray-600">
                <p>
                  Experience the future of phone <br className="xs:block sm:hidden md:hidden lg:hidden"/> accessories with our Floating
                  Phone <br className="xs:block sm:hidden md:hidden lg:hidden"/> stand. This innovative design lets  <br className="xs:block sm:hidden md:hidden lg:hidden"/> you display your
                  device in style.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-medium">Color</h3>
              <div className="mt-2 flex gap-2">
                {[
                  "bg-yellow-400",
                  "bg-blue-400",
                  "bg-green-400",
                  "bg-black",
                ].map((color, index) => (
                  <div
                    key={index}
                    className={`h-6 w-6 rounded-full ${color} ${
                      index === 0 ? "ring-2 ring-black ring-offset-2" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Add to Cart
              </button>
              <div className="flex px-2 text-xl gap-4">
                <FaRegHeart />
                <IoCartOutline />
                <FaEye />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHOP PAGE 4 */}

      <div className="container mx-auto p-6 bg-rose-100">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Left Image Section */}
    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
      <div className="bg-gray-100 rounded-lg shadow-md p-4">
        <Image
          src="/picture/shop.png"
          alt="Decorative"
          className="rounded-lg w-full h-full object-cover"
          width={300}
          height={300}
        />
      </div>
    </div>

    {/* Right Text Section */}
    <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid grid-cols-1 gap-6">
      {/* Text Block 1 */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md sm:text-sm">
        <h3 className="text-xl font-bold mb-2">The quick fox jumps over</h3>
        <p className="text-sm text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, exercitationem libero molestias voluptatem aliquam laudantium recusandae eaque provident aliquid voluptas nobis culpa fugiat blanditiis. Nesciunt?
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, exercitationem libero molestias voluptatem aliquam laudantium recusandae eaque provident aliquid voluptas nobis culpa fugiat blanditiis. Nesciunt?
        </p>
        <p className="text-sm text-gray-700 ">
          Lorem ipsum dolor sit amet, exercitationem libero molestias voluptatem aliquam laudantium recusandae eaque provident aliquid voluptas nobis culpa fugiat blanditiis. Nesciunt?
        </p>
      </div>

      {/* Text Block 2 */}
      <div className="grid sm:grid-cols-1 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-md h-[11rem]">
          <h3 className="text-xl font-bold mb-2">The quick fox jumps over</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>The quick brown fox jumps over the lazy dog.</li>
            <li>The quick brown fox jumps over the lazy dog.</li>
            <li className="sm:hidden">The quick brown fox jumps over the lazy dog.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md h-[10rem]">
          <h3 className="text-xl font-bold mb-2">The quick fox jumps over</h3>
          <ul className="list-disc pl-5 space-y-0 text-sm text-gray-700">
            <li>The quick brown fox jumps over the lazy dog.</li>
            <li>The quick brown fox jumps over the lazy dog.</li>
            <li className="sm:hidden">The quick brown fox jumps over the lazy dog.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>




      {/* SHOP PAGE 5 */}

      <Shop5 />
    </div>
  );
}
