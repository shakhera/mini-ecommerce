import { Button } from "@/components/ui/button";

const Serum = () => {
  return (
    <section className="pt-12 lg:py-12 h-auto lg:h-[435px]">
      <aside className="relative flex flex-col lg:flex-row items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/realistic-background-with-collection-different-cosmetics-containers-tubes-jars-cream-oil-balm-illustration_1284-29149.jpg?ga=GA1.1.297780449.1738347540&semt=ais_hybrid"
              alt="PureRadiance Youth Serum"
              className="w-full h-64 lg:h-96 object-cover" // Adjusted for mobile
            />
          </div>

          {/* Text Content Section */}
          <div className="relative text-left text-black z-10 w-full lg:w-1/2 px-4 lg:px-20 py-8 lg:py-0">
            <h3 className="mb-5 text-2xl font-bold">
              PureRadiance Youth Serum
            </h3>
            <p className="text-muted-foreground mb-5">
              Experience the age-defying power of PureRadiance Youth Serum. This
              skincare marvel is meticulously formulated to rejuvenate and
              replenish your skin's youthful glow. With a potent blend of
              natural ingredients and advanced technology, it diminishes fine
              lines and restores elasticity.
            </p>
            <Button
              variant="default"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Serum;
