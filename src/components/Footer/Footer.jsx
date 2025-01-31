import { Facebook, Instagram, Twitch, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 text-left">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm mb-4">
            EXcom E-Commerce is a dynamic and innovative online retail platform
            that offers a wide range of products to customers worldwide.
          </p>
          <div className="flex space-x-4 justify-center">
            <Facebook className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            <Twitch className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            <Youtube className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            <Instagram className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 ">Quick Links</h3>
          <ul className="text-sm space-y-2 ">
            <li className="cursor-pointer hover:underline">My Account</li>
            <li className="cursor-pointer hover:underline">My Cart</li>
            <li className="cursor-pointer hover:underline">Wishlist</li>
            <li className="cursor-pointer hover:underline">Gift Card</li>
            <li className="cursor-pointer hover:underline">Need Help?</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Contact</li>
            <li className="cursor-pointer hover:underline">Blogs</li>
            <li className="cursor-pointer hover:underline">Size Chart</li>
            <li className="cursor-pointer hover:underline">FAQ</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
          <div className="flex">
            <Input
              type="email"
              placeholder="email@example.com"
              className="flex-1 px-3 py-2 border rounded-l-md"
            />
            <Button className="bg-red-500 text-white px-4 rounded-r-md">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 border-t pt-4 text-sm text-center lg:flex justify-between">
        <p>© 2025 Excom. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <span className="cursor-pointer hover:underline">Refund Policy</span>
          <span className="cursor-pointer hover:underline">
            Shipping Policy
          </span>
          <span className="cursor-pointer underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">
            Terms Of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
