import React from "react";
import { Link, Outlet } from "react-router-dom";

const Staff = () => {
  return (
    <>
      <div className="bg-lightGreen py-10 w-full">
        <div className="flex flex-col items-center justify-center mt-12 text-center">
          <h1 className="text-mainBlack text-[36px] font-bold my-6 ">
            Meet Our Team
          </h1>
          <ul className="flex flex-col gap-4">
            <Link to={"/about/ceo"}>
              <li className="w-[17rem] py-3 bg-secondary  cursor-pointer hover:bg-primary rounded-md">
                CEO
              </li>
            </Link>

            <Link to={"/about/frontendengineer"}>
              <li className="w-[17rem] py-3 bg-secondary  cursor-pointer hover:bg-primary rounded-md">
                Frontend Engineer
              </li>
            </Link>

            <Link to={"/about/backendengineer"}>
              <li className="w-[17rem] py-3 bg-secondary  cursor-pointer hover:bg-primary rounded-md">
                Backend Engineer
              </li>
            </Link>

            <Link to={"/about/productmanager"}>
              <li className="w-[17rem] py-3 bg-secondary  cursor-pointer hover:bg-primary rounded-md">
                Product Manager
              </li>
            </Link>

            <Link to={"/about/chiefdesigner"}>
              <li className="w-[17rem] py-3 bg-secondary  cursor-pointer hover:bg-primary rounded-md">
                Chief Designer
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Staff;
