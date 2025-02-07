import React from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Benefits from "./Benefits";
import OurPlans from "./ourPlans";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "./Footer";

const UserPanel = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Benefits />
      <OurPlans />
      <Review />
      <Contact />
      <Footer />
    </>
  );
};

export default UserPanel;
