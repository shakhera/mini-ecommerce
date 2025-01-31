import { Button } from "@/components/ui/button";

const HurryUpOffer = () => {
  return (
    <section className="relative py-12 h-auto lg:h-[500px] flex flex-col lg:flex-row items-center justify-center">
      {/* Left Image */}
      <img
        src="https://img.freepik.com/free-vector/concept-poster-organic-natural-cream_88138-47.jpg?ga=GA1.1.297780449.1738347540&semt=ais_hybrid"
        alt="Left Image"
        className="w-full lg:w-1/4 h-64 lg:h-full object-cover"
      />

      <div className="relative z-10 text-center w-full lg:w-2/4 px-4 py-8 lg:py-0">
        <h2 className="text-xl mb-4 text-red-300">Hurry Up!</h2>
        <p className="text-3xl font-bold mb-6">
          Best Offer - Up to <span className="text-red-300">50%</span>
        </p>
        <p className="text-sm mb-8">
          Explore our latest New Arrivals & unlock discounts of up to 50% off!
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="text-center bg-white text-black px-2 py-2 w-16 h-16">
            <span className="text-3xl font-bold">11</span>
            <span className="block text-sm">Days</span>
          </div>
          <div className="text-center bg-white text-black px-2 py-2 w-16 h-16">
            <span className="text-3xl font-bold">05</span>
            <span className="block text-sm">Hrs</span>
          </div>
          <div className="text-center bg-white text-black px-2 py-2 w-16 h-16">
            <span className="text-3xl font-bold">15</span>
            <span className="block text-sm">Mins</span>
          </div>
          <div className="text-center bg-white text-black px-2 py-2 w-16 h-16">
            <span className="text-3xl font-bold">02</span>
            <span className="block text-sm">Secs</span>
          </div>
        </div>
        <Button
          variant="default"
          className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700"
        >
          Shop Now
        </Button>
      </div>

      {/* Right Image */}
      <img
        src="https://img.freepik.com/free-vector/colored-cosmetic-template-composition-business-presentation-with-label-with-brand_1284-17379.jpg?ga=GA1.1.297780449.1738347540&semt=ais_hybrid"
        alt="Right Image"
        className="w-full lg:w-1/4 h-64 lg:h-full object-cover"
      />
    </section>
  );
};

export default HurryUpOffer;
