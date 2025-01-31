import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const InstragramPhoto = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/posts.json");
        setPosts(res.data.posts);
        console.log(res.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-10 overflow-hidden">
      <div className="relative">
        <div className="absolute right-0 -top-0 z-10 gap-1">
          {/* Arrow Left */}
          <Button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? posts.length - 1 : prev - 1
              )
            }
            className="p-2 rounded-full bg-white border border-gray-300 hover:bg-red-500 transition duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-white" />
          </Button>
          {/* Arrow Right */}
          <Button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === posts.length - 1 ? 0 : prev + 1
              )
            }
            className="p-2 rounded-full bg-white border border-gray-300 hover:bg-red-500 transition duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 hover:text-white" />
          </Button>
        </div>
      </div>

      <div
        className="relative ease-linear duration-300 flex items-center gap-2"
        style={{ transform: `translateX(-${currentIndex * 10}%)` }}
      >
        <div
          key={currentIndex}
          className=" flex space-x-4 transition-transform duration-500 transform"
        >
          {posts.map((item, i) => (
            <>
              <Card
                key={i}
                className={`max-w-sm mx-auto w-56 relative duration-200 rounded-md`}
              >
                <div className="relative group overflow-hidden ">
                  <img
                    src={item.img}
                    alt="instragram image"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Card>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstragramPhoto;
