import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="">
      <nav>
        <Navbar></Navbar>
      </nav>
      <section className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
