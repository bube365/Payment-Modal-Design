import React, { useState } from "react";
import PaymentModal from "../Modal/PaymentModal";

const Hero = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="bg-blue-gradient h-[100vh] w-full">
        <button
          className="text-white font-semibold text-[14px] bg-primary w-64 px-2 py-2 text-center ml-6 mt-4 top-[50%] left-[50%] absolute transform -translate-x-[50%] -translate-y-[50%]  rounded-lg hover:cursor-pointer hover:drop-shadow-xl"
          onClick={openModal}
        >
          Open Payment Modal
        </button>
      </div>
      {isOpen && (
        <PaymentModal
          closeModal={closeModal}
          openModal={openModal}
          isOpen={isOpen}
          text=""
        />
      )}
    </>
  );
};

export default Hero;
