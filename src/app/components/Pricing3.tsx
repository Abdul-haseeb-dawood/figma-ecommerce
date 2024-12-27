import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Pricing3() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-xl text-center">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Start your 14 days free trial
        </h2>

        <p className="text-gray-600 max-w-md mx-auto">
          Met minim Mollie non desert Alamo est sit clique dolor do met sent.
          RELIT official consequent.
        </p>

        <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors">
          Try it free now
        </button>

        <div className="flex items-center justify-center gap-6 pt-4 text-2xl">
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <FaTwitter />
          </a>

          <a href="#" className="text-blue-900 hover:text-blue-950">
            <FaFacebookSquare />
          </a>

          <a href="#" className="text-black hover:text-gray-800">
            <FaInstagram />
          </a>

          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
