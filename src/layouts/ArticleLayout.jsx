import { Outlet } from "react-router-dom";
import ArticleCategory from "../components/ArticleCategory";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const ArticleLayout = () => {
  return (
    <div>
      <Helmet>
        <title>The Career Advisory | Articles</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <section className="w-full xl:w-3/4 mx-auto font-lora">
          <SectionHeader></SectionHeader>
        </section>
        <section className="w-full xl:w-3/4 mx-auto font-bibas_neue">
          <ArticleCategory></ArticleCategory>
        </section>
        <section>
          <Outlet></Outlet>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ArticleLayout;
