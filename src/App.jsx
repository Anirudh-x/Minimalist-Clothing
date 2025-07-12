import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import heroImage1 from "./assets/imgs/hero1.jpg";
import heroImage2 from "./assets/imgs/hero2.jpg";
import heroImage3 from "./assets/imgs/hero3.jpg";

import kids from "./assets/imgs/kids.jpg";
import women from "./assets/imgs/women.jpg";
import men from "./assets/imgs/men.jpg";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        id="home"
        className="w-full h-[100vh] flex justify-between px-[6rem] items-center text-red-300"
      >
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-7xl font-devil-breeze">Minimalist Clothing</h1>
          <h3 className="text-2xl">Upto 70% off</h3>
          <p>Shop now before it ends </p>
          <button className="bg-red-300 h-[3rem] w-[7rem] flex items-center justify-center rounded-2xl text-white">
            Shop Now
          </button>
        </div>

        <div>
          <img src={heroImage1} className="h-[80vh] bg-blend-screen" />
        </div>
      </div>

      {/* Products Section */}
      <div
        id="products"
        className="w-full p-[4rem] bg-red-300 flex flex-col gap-1 justify-center items-center"
      >
        {/* Row with 3 div */}
        <div className="flex gap-1">
          <div className="bg-white flex flex-wrap">
            <img src={men} className="h-[40vh] w-[20vw]" />
            <div className="text-2xl flex flex-col justify-center items-center pr-8 text-red-300">
              <p>M</p>
              <p>E</p>
              <p>N</p>
              <p>S</p>
            </div>
          </div>

          <div className="bg-white flex flex-wrap">
            <div className="text-2xl flex flex-col justify-center items-center pl-8 text-red-300">
              <p>W</p>
              <p>O</p>
              <p>M</p>
              <p>E</p>
              <p>N</p>
              <p>S</p>
            </div>
            <img src={women} className="h-[40vh] w-[20vw]" />
          </div>

          <div className="bg-white flex flex-wrap">
            <img src={kids} className="h-[40vh] w-[20vw]" />
          </div>
        </div>

        {/* Row with 2 div */}
        <div className="flex gap-1 text-red-300">
          <div className="bg-white h-[40vh] w-[30vw] flex items-center justify-center gap-6">
            <div className="flex flex-col gap-[0.5rem]">
              <p className="text-2xl">Deal Of The Day</p>
              <p className="text-2xl">Girls Bag</p>
              <p>Member Discount</p>
            </div>
            <p className="text-6xl">60% OFF</p>
          </div>

          <div className="bg-white h-[40vh] w-[30vw] flex justify-center items-center">
            <p className="text-6xl">More Products</p>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div
        id="about"
        className="w-full h-auto p-[5rem] flex items-center justify-between"
      >
        {/*  */}
        <div className="flex flex-col justify-center w-[40vw] gap-2">
          <h2 className="text-7xl font-devil-breeze">About Us</h2>
          <p>
            Our story is one of passion, creativity, and a commitment to
            quality. We believe that fashion should be accessible to everyone,
            regardless of budget or style. That is why we offer a wide range of
            clothing options that cater to different tastes and preferences.
          </p>
        </div>

        {/*  */}
        <div className="bg-red-300 h-[60vh] w-[40vw] rounded-2xl text-white flex flex-col flex-wrap">
          {/*  */}
          <div className="flex gap-30 h-[30vh] justify-center items-center">
            <div>
              <span className="text-6xl font-bold">50+</span>
              <p>Happy Customers</p>
            </div>
            <div>
              <span className="text-6xl font-bold">100+</span>
              <p>Happy Customers</p>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col h-[30vh] justify-center items-center">
            <span className="text-6xl font-bold">1M+</span>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Costumer Reviews */}
      <div id="testimonials" className="text-red-300">
        <hr className="text-red-100" />
        <div className="px-[4rem] py-[2rem] w-full">
          <h2 className="text-4xl pb-[2rem]">Costumer Reviews</h2>
          <div className="flex justify-between w-full items-center">
          <CardComponent heroImage1={heroImage1} username={"Username"} review={"Description"} />
          <CardComponent heroImage2={heroImage2} username={"Username"} review={"Description"} />
          <CardComponent heroImage3={heroImage3} username={"Username"} review={"Description"} />
          <CardComponent heroImage3={heroImage3} username={"Username"} review={"Description"} />
          <CardComponent heroImage3={heroImage3} username={"Username"} review={"Description"} />
          </div>
        </div>
        <hr className="text-red-100" />
      </div>

      {/* Newsletter */}
      <div
        id="newsletters"
        className="flex flex-col py-[10rem] justify-center items-center gap-2"
      >
        <h2 className="text-2xl">GET EXTRA 10% OFF ON YOUR FIRST ORDER</h2>
        <p>
          Subscribe to get special offers, free giveaways, and once in a
          lifetime deals
        </p>
        <div className="flex gap-2 rounded-2xl w-[21vw] h-[5vh] bg-red-300">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-100 p-[1rem] rounded-2xl w-[15vw] h-[5vh]"
          />
          <button className="bg-transparent">Subscribe</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

function CardComponent(props) {
  return (
    <div className="bg-red-300 text-white h-[20rem] w-[15rem] flex flex-col justify-center items-center gap-5 rounded-2xl">
      <img src={props.heroImage1} className="h-[4rem] w-[4rem] rounded-4xl" />
      <div>
        <h1>{props.username}</h1>
        <p>{props.review}</p>
      </div>
    </div>
  );
}

export default App;
