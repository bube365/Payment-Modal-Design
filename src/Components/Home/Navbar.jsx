import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white py-6 px-12  font-bold fixed w-full">
        <div className="cursor-pointer flex items-center gap-3 ">
          <div className="logo"></div>
          <p>
            AceCoin<span className="font-light text-GreyTwo">Pay</span>
          </p>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
