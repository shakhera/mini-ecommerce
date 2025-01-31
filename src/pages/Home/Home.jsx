import React from "react";
import HeroSection from "./HeroSection";
import TrendingProduct from "./TrendingProduct";
import Serum from "./Serum";

const Home = () => {
  return (
    <section>
      <div className="p-4">
        <HeroSection />
        <TrendingProduct />
        <Serum />
      </div>
    </section>
  );
};

export default Home;
