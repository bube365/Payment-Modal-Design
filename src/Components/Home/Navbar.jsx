import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white py-6 px-6 sm:px-12  font-bold fixed w-full top-0 left-0 z-10">
        <div className="flex justify-between items-center ">
          <div className="cursor-pointer flex items-center gap-3 ">
            <div className="h-4 w-4 bg-primary"></div>
            <Link to={"./"}>
              <p>
                My
                <span className="font-light text-GreyTwo text-[14px]">
                  Company
                </span>
              </p>
            </Link>
          </div>

          <Link to={"./staff"} className="text-primary">
            Staff
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
