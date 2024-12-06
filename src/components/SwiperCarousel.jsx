import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../index.css";

const CareerCarousel = () => {
  const careers = [
    {
      title: "Software Development",
      description:
        "Explore careers in web development, AI, and mobile app development.",
      image: "https://i.ibb.co.com/p3DHwp4/pexels-mart-production-7255730.jpg",
    },
    {
      title: "Data Science",
      description: "Uncover insights and make data-driven decisions.",
      image: "https://i.ibb.co.com/BsT7MWp/pexels-thirdman-7653976.jpg",
    },
    {
      title: "Digital Marketing",
      description: "Build brands and create impactful online campaigns.",
      image: "https://i.ibb.co.com/cywC162/pexels-canvastudio-3153198.jpg",
    },
    {
      title: "Healthcare",
      description:
        "Explore opportunities in medicine, research, and public health.",
      image: "https://i.ibb.co.com/dQTt002/pexels-joaojesusdesign-1084542.jpg",
    },
  ];

  return (
    <div className="w-full py-10">
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #323232;
            opacity: 0.6;
          }

          .swiper-pagination-bullet-active {
            background-color: #FFE802;
            opacity: 1;
          }

          .swiper-button-next,
          .swiper-button-prev {
            color: #FFE802;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: #FFE802;
          }
        `}
      </style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {careers.map((career, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={career.image}
                alt={career.title}
                className="w-full h-42 md:h-56 lg:h-64 xl:h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-2xl font-bold mb-2">{career.title}</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">{career.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CareerCarousel;
