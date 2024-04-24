import React from "react";
import Hero from "./Hero/Hero";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Award from "./award/Award";
import Location from "./location/Location";
import Term from "./term/Term";
import Price from "./price/Price";
const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Award />
      <Location />
      <Term />
      <Price />
    </>
  );
};

export default Home;
