import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

const RightSideCard = ({ valueFromChild }) => {
  // Getting the last four digits of the propValue (Card Number)
  const lastFourDigits = valueFromChild.slice(-4);
  return (
    <section className="relative w-full text-darkBlue">
      <div className="bg-primary w-12 h-[0.35rem] rounded-[0.5rem] blueshadow mt-4  absolute left-[50%] top-[-4rem] z-[10] transform -translate-x-[50%]"></div>

      <div className="shadoww w-[12rem] sm:w-[10rem] h-[12rem]  rounded-[0.5rem] p-2 text-[11px] font-semibold bg-white absolute top-[-2.75rem] left-[50%]  transform -translate-x-[50%]  flex flex-col justify-between">
        <div className="w-full flex items-center justify-between">
          <div className="atmBar h-[2rem] w-[2rem]"></div>
          <AiOutlineWifi className="text-[18px] " />
        </div>

        <article>
          <div className="mb-3 ">
            Jonathan Michael
            <p className="text-[14px]  flex items-center">
              **** <span className="text-[12px] ml-2">{lastFourDigits}</span>
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p>07/12</p>
            <div>
              <div className="masterCard1"></div>
              <p className="text-[4px] font-bold">MasterCard</p>
            </div>
          </div>
        </article>
      </div>

      <article className="bg-greySix w-full h-[17rem] rounded-[0.5rem] mt-16 flex flex-col justify-end py-4 px-4 gap-1 text-[12px]">
        <div className="flex w-full justify-between">
          <p className="text-grey ">Company</p>
          <p className="font-semibold flex items-center gap-1">
            <span className="bg-darkBlue rounded-full p-[1.75px] ">
              <BsApple className="text-mainWhite  text-[10px] text-center" />
            </span>
            Apple
          </p>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-grey  ">Order Number</p>
          <p className=" font-semibold">1266201</p>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-grey  ">Product</p>
          <p className="font-semibold">MackBook Air</p>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-grey  ">VAT (20%)</p>
          <p className=" font-semibold">$ 100.00</p>
        </div>
      </article>

      <div className="bg-greySix w-full flex justify-between items-center h-[5rem] rounded-[0.5rem] mt-[6px] p-4">
        <div>
          <p className="text-grey text-[12px] ">You have to pay</p>
          <p className="font-bold ">
            549.<span className="text-[12px] font-medium">99</span>{" "}
            <span className="text-grey text-[12px] font-medium">USD</span>
          </p>
        </div>
        <div className="footerIcon w-6 h-6"></div>
      </div>
    </section>
  );
};

export default RightSideCard;
