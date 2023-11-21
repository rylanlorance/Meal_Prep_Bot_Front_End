import React from "react";
import Hero from "../../Hero/Hero";

import './HomePage.css';
import SubHero from "../../SubHero/SubHero";

function Home() {
  return (
    <div className="home-page">
      <Hero></Hero>
      <SubHero></SubHero>
    </div>
  );
}

export default Home;
