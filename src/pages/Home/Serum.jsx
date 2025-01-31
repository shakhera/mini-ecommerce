import { Button } from "@/components/ui/button";

const Serum = () => {
  return (
    <section className="py-12 h-[435px]">
      <aside className="relative flex flex-col lg:flex-row items-centerspace-x-3">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/realistic-background-with-collection-different-cosmetics-containers-tubes-jars-cream-oil-balm-illustration_1284-29149.jpg?ga=GA1.1.297780449.1738347540&semt=ais_hybrid"
              alt="PureRadiance Youth Serum"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="relative text-left text-black z-10 lg:w-1/2 px-20">
            <h3 className="mb-5 text-2xl font-bold ">
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
