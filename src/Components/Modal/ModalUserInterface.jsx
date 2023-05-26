import React, { useState } from "react";
import Timer from "./Timer/Timer";
import InputCardField from "./Cards/InputCardField";
import RightSideCard from "./Cards/RightSideCard";

const ModalUserInterface = ({ closeModal, isOpen }) => {
  // Fetching Data from Child component and passing as prop
  const [valueFromChild, setValueFromChild] = useState("");
  const handleValueChange = (value) => {
    setValueFromChild(value);
  };
  return (
    <section className="flex flex-col sm:flex-row w-full items-center gap-10 font-poppins">
      <div className="sm:w-[60%] ">
        <div className="flex  flex-col xs:flex-row justify-between items-center mt-4">
          <div className="cursor-pointer flex  items-center gap-3 font-bold text-darkBlue">
            <div className="logo"></div>
            <p>
              AceCoin
              <span className="font-[400] text-GreyTwo">Pay</span>
            </p>
          </div>
          <Timer closeModal={closeModal} />
        </div>
        <div className="">
          <InputCardField
            onValueChange={handleValueChange}
            closeModal={closeModal}
          />
        </div>
      </div>

      <div className="sm:w-[35%] w-[60%]  ">
        {/* Data retrieved by parent component from another child component is passed to this child component */}
        <RightSideCard valueFromChild={valueFromChild} />
      </div>
    </section>
  );
};

export default ModalUserInterface;
