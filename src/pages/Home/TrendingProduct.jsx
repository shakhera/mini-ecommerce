import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TrendingProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products.json");
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto px-4 mt-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Trending Products</h2>
        <p className="text-gray-600 mt-2">Explore our latest collection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>

            <CardContent className="p-4">
              <CardTitle className="text-xl font-bold text-gray-900 truncate">
                {product.title}
              </CardTitle>

              <CardDescription className="mt-2 text-gray-600">
                {product.description}
              </CardDescription>

              <div className="flex justify-center items-center gap-x-4 mt-4">
                {product.discountedPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.price}
                  </span>
                )}
                <span className="text-lg font-bold text-red-600">
                  ${product.discountedPrice || product.price}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
          View All
        </Button>
      </div>
    </section>
  );
};

export default TrendingProduct;
