import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    date: "August 01, 2023",
    title: "The Art of Layering: Creating Stylish Outfits",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 2,
    date: "August 01, 2023",
    title: "A Glimpse into Men's Fashion Trends: What's Hot and What's Not",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    date: "August 01, 2023",
    title: "Mastering Minimalist Fashion: Less is More",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
];

const LatestBlog = () => {
  return (
    <section className="py-12 container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Latest Blog</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 text-start">
              <div className="flex items-center gap-x-2 mb-4">
                <Calendar size={14} className="text-gray-600" />
                <span className="text-sm text-gray-600">{post.date}</span>
              </div>

              <h3 className="text-md font-semibold text-gray-600 mb-4">
                {post.title}
              </h3>

              <Button
                variant="ghost"
                className="text-red-400 px-6 py-2 rounded-lg hover:text-white hover:bg-red-700"
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
