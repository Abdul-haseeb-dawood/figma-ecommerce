import Image from "next/image";

export default function About4() {
  return (
    <div className="w-full">
      {/* Work With Us Section */}
      <section className="grid md:grid-cols-2">
        {/* Left Column */}
        <div className="bg-blue-600 p-4 md:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <span className="text-white text-sm font-medium mb-1 block">
              WORK WITH US
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-1">
              Now Lets grow Yours
            </h2>
            <p className="text-white/80 mb-3 text-lg">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
            <button
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50
               transition-colors"
            >
              Button
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gray-100">
          <Image
            src="/picture/ab-4.png"
            alt="Person in coral top"
            width={400}
            height={400}
            className="w-full h-[600px]"
          />
        </div>
      </section>
    </div>
  );
}
