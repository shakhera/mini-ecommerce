import { Button } from "@/components/ui/button";
import { useState } from "react";

const FlawlessFoundation = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8">
      <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg">
        <div className="relative w-full h-96">
          <img
            src="https://img.freepik.com/free-photo/woman-before-after-rhinoplasty-side-view_23-2149947593.jpg?t=st=1738357351~exp=1738360951~hmac=29938634f637616ff81081dc30038bd16a2cb283b0ef242bd109fa445b68de0f&w=826"
            alt="Before Makeup"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute top-0 left-1/2 w-1 h-full bg-white cursor-ew-resize"
            draggable
            onDrag={(e) =>
              setSliderPosition((e.clientX / window.innerWidth) * 100)
            }
          ></div>

          <button className="absolute bottom-4 left-4 bg-red-400 font-bold text-white px-4 py-2 rounded-md">
            Before
          </button>
          <button className="absolute bottom-4 right-4 bg-red-400 font-blod text-white px-4 py-2 rounded-md">
            After
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 text-left">
        <h2 className="text-2xl font-semibold mb-4">
          Flawless Finish Foundation.
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Discover the secret to a flawless complexion with our Flawless Finish
          Foundation. This exceptional foundation offers seamless, long-lasting,
          and radiant finish, leaving you looking and feeling your best.
        </p>
        <ul className="text-sm text-gray-600 space-y-2 mb-6 list-disc list-inside">
          <li>Seamless Coverage</li>
          <li>Long-Lasting</li>
          <li>Skin-Nourishing</li>
          <li>Variety of Shades</li>
          <li>Radiant Glow</li>
        </ul>
        <Button className="bg-red-400 text-white font-bold px-6 py-2 rounded-md">
          Shop now
        </Button>
      </div>
    </section>
  );
};

export default FlawlessFoundation;
