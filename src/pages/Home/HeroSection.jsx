import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-12 h-[435px]">
      <aside className="relative flex flex-col lg:flex-row items-centerspace-x-3">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/foundation-bottles-advertising-arrangement_23-2149511225.jpg?semt=ais_hybrid"
              alt="Face Skincare"
              className="w-full object-cover h-full"
            />
          </div>
          <div className="relative text-left text-black z-10 lg:w-1/2 px-20">
            <p className="text-muted-foreground font-bold mb-5">
              Organic Collection
            </p>
            <h3 className="mb-5 text-5xl font-bold ">Face Skincare</h3>
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
