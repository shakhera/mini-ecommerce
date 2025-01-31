import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  ChevronDown,
  ChevronUp,
  DollarSign,
  Lock,
  Phone,
  SearchIcon,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";

/* -------------------------------------------------------------------------- */
/*                            main navbr component                            */
/* -------------------------------------------------------------------------- */

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Shops", href: "/shops" },
  {
    name: "Products",
    href: "/products",
    subMenu: [
      { name: "New Arrivals", href: "/products/new-arrivals" },
      { name: "Best Sellers", href: "/products/best-sellers" },
      { name: "Sale", href: "/products/sale" },
    ],
  },
  {
    name: "Categories",
    href: "/categories",
    subMenu: [
      { name: "Electronics", href: "/categories/electronics" },
      { name: "Fashion", href: "/categories/fashion" },
      { name: "Home & Garden", href: "/categories/home-garden" },
    ],
  },
  { name: "Blogs", href: "/blogs" },
  {
    name: "Pages",
    href: "/pages",
    subMenu: [
      { name: "About Us", href: "/pages/about-us" },
      { name: "Contact Us", href: "/pages/contact-us" },
      { name: "FAQ", href: "/pages/faq" },
    ],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDolarDropdownOpen, setIsDolarDropdownOpen] = useState(false);

  return (
    <header className=" bg-white text-black transition-all duration-300">
      <div className="flex  justify-between items-center max-w-7xl mx-auto pb-4 space-y-4">
        {/* toggle for mobile */}
        <Button
          className="md:hidden relative z-[999999] "
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          variant="outline"
        >
          {isMobileMenuOpen ? (
            <FaTimes size={20} className="text-red-600" />
          ) : (
            <FaBars size={20} className="text-red-600" />
          )}
        </Button>

        {/* Support Contact */}
        <div className="ml-4 space-x-1 hidden md:block">
          <p className="text-sm font-normal">Hotline </p>
          <p className="flex gap-x-2">
            <Phone size={20} className="" />
            <span className="hover:text-red-500 cursor-pointer font-bold">
              (+84) 589 242 641
            </span>
          </p>
        </div>
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600">
          <Link to="/">ExCom</Link>
        </div>

        <div className="flex items-center space-x-3">
          {/* USD dropdown  */}
          <DropdownMenu onOpenChange={(open) => setIsDolarDropdownOpen(open)}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center transition-colors duration-300 hover:bg-transparent hover:text-red-500 font-normal text-sm"
              >
                <DollarSign size={16} className="" />
                USD {/* Default Currency */}
                {isDolarDropdownOpen ? (
                  <ChevronUp size={14} className="ml-1" />
                ) : (
                  <ChevronDown size={14} className="ml-1" />
                )}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Currency (USD $)</DropdownMenuLabel>
              <DropdownMenuSeparator />

              {/* Currency Options */}
              <DropdownMenuItem>
                <DollarSign size={14} className="mr-2" />
                USD - US Dollar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">€</span>
                EUR - Euro
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">£</span>
                GBP - British Pound
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="mr-2">¥</span>
                JPY - Japanese Yen
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Additional Options */}
              <DropdownMenuItem>Currency Settings</DropdownMenuItem>
              <DropdownMenuItem>Update Exchange Rates</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* search icon  */}
          <div>
            <SearchIcon size={18} />
          </div>
          {/* User dropdown */}
          <DropdownMenu onOpenChange={(open) => setIsDropdownOpen(open)}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center transition-colors duration-300 hover:bg-transparent hover:text-red-500 font-normal text-sm"
              >
                <User size={16} className="" />
                {isDropdownOpen ? (
                  <ChevronUp size={14} className="" />
                ) : (
                  <ChevronDown size={14} className="" />
                )}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Login</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart size={22} className="" />
            <span className="absolute top-0 right-0 text-xs bg-red-300 text-white rounded-full px-2 py-1 -mt-4 -mr-4">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* border  */}
      <Separator orientation="horizontal" />

      {/* Category Navigation */}
      <nav className="hidden md:flex justify-center item-center space-x-4 py-4 w-full left-0 right-0  transition-all duration-300 ">
        {menuItems?.map((item, i) => (
          <div className="relative group" key={i}>
            <Link
              to={item.href}
              className="hover:text-red-600 px-2 rounded-md py-1 flex items-center"
            >
              {item.name}
              {item.subMenu && <ChevronDown className="" size={14} />}
            </Link>
            {item.subMenu && (
              <div className="absolute left-0 bg-white hidden group-hover:flex group-hover:flex-col w-64 shadow-lg pt-5 z-50">
                {item.subMenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.href}
                    className="block px-4 py-2 hover:text-red-600"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform md:hidden p-4 z-50`}
      >
        <Accordion type="single" collapsible>
          {menuItems.map((item, i) =>
            item.subMenu ? (
              <AccordionItem key={i} value={item.name}>
                <AccordionTrigger className="py-2 text-lg font-medium flex justify-between text-start">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent className="pl-4">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.href}
                      className="block  py-2 hover:text-red-600 text-start"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Link
                key={i}
                to={item.href}
                className="block py-2  text-lg hover:text-red-600 text-start"
              >
                {item.name}
              </Link>
            )
          )}
        </Accordion>
      </div>
    </header>
  );
};

export default Navbar;
