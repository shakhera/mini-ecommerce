import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pb-10 h-auto lg:h-[435px]">
      <aside className="relative flex flex-col lg:flex-row items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/foundation-bottles-advertising-arrangement_23-2149511225.jpg?semt=ais_hybrid"
              alt="Face Skincare"
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>

          <div className="relative text-center text-black z-10 w-full lg:w-1/2 px-4 lg:px-20 py-8 lg:py-0">
            <p className="text-muted-foreground font-bold mb-5">
              Organic Collection
            </p>
            <h3 className="mb-5 text-3xl lg:text-5xl font-bold">
              Face Skincare
            </h3>
            <p className="text-muted-foreground font-bold mb-5">
              Elevate Your Basics with a Touch of Glan
            </p>
            <Button
              variant="default"
              className="px-6 py-3 text-primary-foreground bg-primary"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default HeroSection;
