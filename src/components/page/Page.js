import React from "react";
import Header from "../Common/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../Common/footer/Footer";
import About from "../about/About";
import Services from "../services/Services";
import Blog from "../blog/Blog";
import Price from "../home/price/Price";
import Contact from "../contact/Contact";

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Page;
