import React from "react";
import HeroSection from "./HeroSection";
import TrendingProduct from "./TrendingProduct";
import Serum from "./Serum";
import FaceCream from "./FaceCream";
import HurryUpOffer from "./HurryUpOffer";

const Home = () => {
  return (
    <section>
      <div className="p-4">
        <HeroSection />
        <TrendingProduct />
        <Serum />
        <FaceCream />
        <HurryUpOffer />
      </div>
    </section>
  );
};

export default Home;
