import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-lightGreen h-[100vh] w-full">
      <div className="top-[50%] left-[50%] absolute transform -translate-x-[50%] -translate-y-[50%] text-center">
        <div className="myshimmer"></div>
        <h2 className="text-mainBlack text-[36px] font-bold ">
          Welcome to our company's website
        </h2>

        <Link to={"./staff"}>
          <button className="text-white font-semibold text-[14px] bg-primary w-64 px-2 py-2 rounded-lg hover:cursor-pointer hover:drop-shadow-xl mt-8">
            Staff
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
