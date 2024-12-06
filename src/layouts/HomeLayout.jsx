import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import SwiperCarousel from "../components/SwiperCarousel";
import Footer from "../components/Footer";
import SkillDevelopmentPrograms from "../components/SkillDevelopmentPrograms";
import AboutUs from "../components/AboutUs";

const HomeLayout = () => {
  return (
    <div>
      <Helmet>
        <title>The Career Advisory | Home</title>
      </Helmet>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="w-11/12 mx-auto">
        <section className="font-lora">
          <SwiperCarousel></SwiperCarousel>
        </section>
        <section className="font-lora">
          <AboutUs></AboutUs>
        </section>
        <section className="font-lora">
          <Services></Services>
        </section>
        <section className="font-lora">
          <SkillDevelopmentPrograms></SkillDevelopmentPrograms>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
