import React from "react";
import img from "../images/services.jpg";
import Back from "../Common/Back";
import FeaturedCard from "../home/featured/FeaturedCard";
import "../home/featured/featured.css";
const Services = () => {
  return (
    <>
      <section className="services mb">
        <Back name="Services" title="Services -All Services" cover={img} />
        <div className="featured container">
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Services;
