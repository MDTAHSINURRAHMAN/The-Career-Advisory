import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <section className="">
      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          About Us
        </h1>
        <p className="text-sm md:text-lg text-center text-gray-600 mb-10">
          Discover who we are and how we strive to make a positive impact in
          your journey towards success.
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div className="space-y-3 md:space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Who We Are</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              At <strong>Career Advisory</strong>, we are dedicated to
              empowering individuals to achieve their dreams. Our team of
              experts provides professional guidance, resources, and tailored
              solutions to help you navigate the complexities of career growth
              and personal development.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              From personalized counseling to skill-building programs, we are
              committed to being your partner in success. Let us help you take
              the next step with confidence.
            </p>
            <Link to="/services">
              <button className="mt-8 md:mt-16 px-6 py-3 bg-btnColor text-white rounded-lg shadow-md hover:bg-navColor hover:text-btnColor">
                Our Services
              </button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
