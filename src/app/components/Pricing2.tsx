import { IoIosArrowForward } from "react-icons/io";


export default function Pricing2() {
    return (
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pricing FAQs
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="p-6 rounded-lg hover:shadow-lg transition-shadow">
                 
              <h3 className="font-bold text-lg mb-3 flex">
              <span className="flex text-blue-400 text-2xl"><IoIosArrowForward /></span>
                the quick fox jumps over the lazy dog
              </h3>
              <p className="text-gray-600 leading-relaxed pl-6">
                Met minim Mollie non desert Alamo est sit clique dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Haven&apos;t got your answer?{" "}
            <a href="#" className="text-gray-600 hover:underline">
              Contact our support
            </a>
          </p>
        </div>
      </section>
    )
  }
  
  