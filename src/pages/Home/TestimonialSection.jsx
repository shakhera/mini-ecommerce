const TestimonialSection = () => {
  return (
    <section className="bg-red-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/virtual-currency-erupi-symbol-background-contactless-wallet-payment-vector_1017-46479.jpg?ga=GA1.1.297780449.1738347540&semt=ais_hybrid"
            alt=""
            className="h-8 w-8"
          />
        </div>

        <div className="p-8 max-w-2xl mx-auto">
          <blockquote className="text-lg text-gray-600 mb-6">
            "Discovering Minimalin has been a revelation for me. As a busy
            professional, I often find myself juggling multiple tasks and
            struggling to find the right words."
          </blockquote>
          <p className="text-sm text-gray-900">Alex Rodriguez</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
