import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const Services = () => {
  const [service, setService] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all or limited services

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // Toggle between showing all services or just a limited number
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <Helmet>
        <title>The Career Advisory | Services</title>
      </Helmet>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="ml-0 xl:ml-44 py-8">
          <h2 className="font-lora text-2xl md:text-4xl font-bold uppercase pt-5 pb-0">
            <span className=" text-black">Services by</span>{" "}
            <span className="text-gray-400">The Career Advisory</span>
          </h2>
          <p className="text-sm md:text-base text-btnColor mt-2 tracking-widest">
            Browse services
          </p>
        </div>
        <div className="font-lora grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.slice(0, showAll ? service.length : 6).map((service) => (
            <div
              key={service.id}
              className="bg-btnColor rounded-lg shadow-2xl overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-44 md:h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-md md:text-xl text-white font-semibold mb-2">
                  {service.serviceName}
                </h2>
                <p className="text-sm md:text-base text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm md:text-base text-gray-100 font-medium">
                    Price: {service.pricing}
                  </span>
                  <span className="text-sm md:text-base text-gray-100 font-medium">
                    Rating:{" "}
                    <span className="text-navColor">{service.rating}</span>
                  </span>
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className="block text-center text-sm md:text-base bg-navColor text-btnColor py-2 rounded hover:bg-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="font-lora text-center mt-6">
          <button
            onClick={handleShowAll}
            className="px-6 py-2 bg-btnColor text-white rounded hover:bg-navColor hover:text-btnColor transition-colors"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
