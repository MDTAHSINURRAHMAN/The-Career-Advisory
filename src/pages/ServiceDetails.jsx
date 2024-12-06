import { useParams } from "react-router-dom";
import IndividualDetails from "../components/IndividualDetails";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const foundService = data.find(
          (service) => service.id === parseInt(id)
        );
        setService(foundService);
      });
  }, [id]);
  return (
    <div>
      <Helmet>
        <title>The Career Advisory | ServiceDetails </title>
      </Helmet>
      <Navbar></Navbar>
      <section className="w-11/12 mx-auto font-lora mt-5">
        <IndividualDetails service={service}></IndividualDetails>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
