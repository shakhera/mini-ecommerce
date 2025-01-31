import { Button } from "@/components/ui/button";

const FaceCream = () => {
  return (
    <section className="pb-4 lg:py-12 h-auto lg:h-[435px]">
      <aside className="relative flex flex-col lg:flex-row items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="relative text-left text-black z-10 w-full lg:w-1/2 px-4 lg:px-20 py-8 lg:py-0">
            <h3 className="mb-5 text-2xl font-bold">
              Luminance Renewal Face Cream
            </h3>
            <p className="text-muted-foreground mb-5">
              Rediscover your skin's natural luminance with our Luminance
              Renewal Face Cream. This luxurious formula is designed to deeply
              nourish, hydrate, and revitalize your skin. Packed with potent
              antioxidants and age-defying ingredients, it minimizes the signs
              of aging, leaving your complexion smoother.
            </p>
            <Button
              variant="default"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
            >
              Shop Now
            </Button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/cosmetic-ad_52683-8492.jpg?ga=GA1.1.297780449.1738347540&semt=ais_hybrid"
              alt="Luminance Renewal Face Cream"
              className="w-full h-64 lg:h-96 object-cover" // Adjusted for mobile
            />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default FaceCream;
