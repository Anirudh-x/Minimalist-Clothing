import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="bg-red-300 text-white flex justify-between items-center p-4 fixed top-0 w-full h-16 shadow-2xl">
      <div>
        <h1>Minimalist Clothing</h1>
      </div>

      <div className="flex gap-4">
        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
          Home
        </Link>
        <Link to="products" spy={true} smooth={true} offset={-40} duration={500}>
          Products
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
          About Us
        </Link>
        <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500}>
          Testimonials
        </Link>
        <Link to="newsletters" spy={true} smooth={true} offset={50} duration={500}>
          Newsletter
        </Link>
      </div>

      <div className="flex gap-2">
        <p>Cart</p>
        <p>login</p>
      </div>
    </div>
  );
};

export default Navbar;
