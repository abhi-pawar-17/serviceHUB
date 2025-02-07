import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import b1 from "../assets/1.webp"; // Importing local image
import b2 from "../assets/2.webp"; // Importing local image
import b3 from "../assets/3.webp"; // Importing local image

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapping local images to service indices for demo purposes
  const localImages = [b1, b2, b3]; // Replace/add images as needed

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://107.21.85.231:8292/api/services/services"
        );
        const data = response.data.map((service, index) => ({
          ...service,
          image: localImages[index % localImages.length], // Assigning local images
        }));
        setServicesData(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch services.");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl md:max-w-[70%]">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Our Services
          </h2>
          <p className="text-md text-gray-600 mb-4">
            Whether it's a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ height: "380px" }}
            >
              <div className="relative group overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-[#ff9f00] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#ffd13c] transition-all">
                    Read More
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center space-x-3">
                  <span className="bg-[#ff9f00] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </span>
                  <span className="text-[#ff9900] text-xs font-semibold">{service.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
