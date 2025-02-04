import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-black mb-4">
            About Us
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto leading-relaxed">
            We provide professional, high-quality services with a focus on customer satisfaction and long-term relationships.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Section (Content Card) */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative bg-[#FF9900] p-10 rounded-xl shadow-xl  hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-black mb-4">Why Choose Us?</h3>
              <p className="text-black mb-4 leading-relaxed">
                At <span className="font-semibold text-[#ffffff]">ServiceHub</span>, we take pride in offering
                professional services including cleaning, plumbing, and electrical work. Our goal is to provide
                reliable and efficient service to all our customers.
              </p>
              <p className="text-black mb-6 leading-relaxed">
                We believe in transparency, reliability, and customer satisfaction. From simple repairs to major
                installations, our team is here to make your life easier.
              </p>
              <button className="bg-[#FF9900] text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-[#FF7F00]">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section (Text and Icons) */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-8">
              {/* Icon 1 */}
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-[#FF9900] text-white rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Professional Cleaning</h4>
                  <p className="text-black">
                    We provide comprehensive home cleaning solutions to make your home spotless.
                  </p>
                </div>
              </div>

              {/* Icon 2 */}
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-[#FF9900] text-white rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Expert Plumbing</h4>
                  <p className="text-black">
                    Our team offers reliable plumbing services, from installations to urgent repairs.
                  </p>
                </div>
              </div>

              {/* Icon 3 */}
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-[#FF9900] text-white rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">Electrical Solutions</h4>
                  <p className="text-black">
                    Our team ensures top-quality electrical services for safety and efficiency.
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-[#FF9900] text-white px-6 py-3 mt-8 rounded-lg font-medium transition-all hover:bg-[#FF7F00]">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
