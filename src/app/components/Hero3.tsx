import Image from "next/image";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscGraph } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";

interface Post {
  id: number;
  title: string;
  description: string;
  descriptio: string;
  image: string;
  comments: number;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Loudest à la Madison #1 (L'inrtegral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    descriptio: "22 April 2021",
    image: "/picture/he1.png",
    comments: 10,
  },
  {
    id: 2,
    title: "Loudest à la Madison #1 (L'inrtegral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    descriptio: "22 April 2021",
    image: "/picture/he2.png",
    comments: 8,
  },
  {
    id: 3,
    title: "Loudest tà la Madison #1 (L'inrtegral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    descriptio: "22 April 2021",
    image: "/picture/he3.png",
    comments: 12,
  },
];

export default function Hero3() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            Featured Posts
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Problems trying to resolve the conflict between
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            The two major topics of physics: Newtonian mechanics and quantum
            mechanics.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-lg tracking-wide leading-relaxed mb-4 ">
                  {post.description}
                </p>
                <p className="text-gray-500 text-sm tracking-wide flex leading-relaxed mb-4">
                  {" "}
                  <span className=" text-blue-500 mr-2 text-lg">
                    <TfiAlarmClock />
                  </span>{" "}
                  {post.descriptio}{" "}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-500 hover:text-gray-700 tracking-wide  flex items-center gap-2"
                  >
                    Learn More
                    <span className="text-2xl text-green-500">
                      <IoIosArrowForward />
                    </span>
                  </a>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-green-500">
                      <VscGraph />
                    </span>
                    <span className="text-sm">
                      {post.comments}
                      Comments
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
