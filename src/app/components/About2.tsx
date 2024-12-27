import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

interface TeamMember {
  name: string;
  profession: string;
  image: string;
  bgColor: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Username",
    profession: "Profession",
    image: "/picture/ab-1.jpg",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/picture/ab-2.png",
    bgColor: "bg-gray-100",
  },
  {
    name: "Username",
    profession: "Profession",
    image: "/picture/ab-3.png",
    bgColor: "bg-blue-500",
  },
];

export default function About2() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-medium tracking-wide">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image Container */}
            <div
              className={`w-full aspect-[3/4] mb-4 overflow-hidden ${member.bgColor}`}
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>

            {/* Member Info */}
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-4">{member.profession}</p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors text-2xl"
              >
                <FaFacebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors text-2xl"
              >
                <FaInstagram />

                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors text-2xl"
              >
                <FaTwitter />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
