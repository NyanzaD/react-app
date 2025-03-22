import React from "react";

import Hero from "../components/Hero";
import CardGrid from "../components/CardGrid";
import Testimonials from "../components/Testimonials";
import GetInvolved from "../components/GetInvolved";
import AboutUsRow from "../components/AboutUsRow";


function Home() {
  return (
    <div>
      <Hero />
      <CardGrid />
      <Testimonials />
      <GetInvolved />
      <AboutUsRow />

    </div>
  );
}

export default Home;
