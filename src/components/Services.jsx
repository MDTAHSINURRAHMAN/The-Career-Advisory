import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="mt-8 lg:mt-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">Our Services</h1>
      <h2 className="text-sm md:text-lg text-center text-gray-600 mb-12">
        Explore a wide range of services to meet your needs, with expert
        guidance and personalized attention.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.slice(0, 6).map((service) => (
          <div
            key={service.id}
            className="bg-btnColor rounded-none shadow-2xl overflow-hidden"
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
                  <span className="text-sm md:text-base text-navColor">{service.rating}</span>
                </span>
              </div>
              <Link
                to={`/services/${service.id}`}
                className="block text-sm md:text-base text-center bg-navColor text-btnColor py-2 rounded hover:bg-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
