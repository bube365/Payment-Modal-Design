import React, { useState, useEffect } from "react";

const Timer = ({ closeModal, isOpen }) => {
  const [preceedingMin, setPreceedingMin] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(9);
  const [preceedingSec, setPreceedingSec] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      } else if (preceedingSec > 0) {
        setPreceedingSec((preceedingSec) => preceedingSec - 1);
        setSeconds(9);
      } else if (minutes > 0) {
        setMinutes((minutes) => minutes - 1);
        setPreceedingSec(5);
        setSeconds(9);
      } else if (minutes <= 0 && seconds <= 0) {
        closeModal();
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="flex gap-1 mt-6 xs:mt-0 mr-1 sm:mr-0">
      <div className="text-mainWhite flex ">
        <p className="bg-darkBlue w-[1.5rem] text-center p-1 text-[13px] rounded-[0.2rem]">
          {preceedingMin}
        </p>
        <p className="bg-darkBlue ml-[1px] text-center w-[1.5rem]  p-1 text-[13px] rounded-[0.2rem]">
          {minutes}
        </p>{" "}
      </div>
      :
      <div className="text-mainWhite flex ml-1 sm:ml-0">
        <p className="bg-darkBlue p-1 text-center w-[1.5rem] text-[13px] rounded-[0.2rem]">
          {preceedingSec}
        </p>
        <p className="bg-darkBlue ml-[1px] text-center w-[1.5rem] p-1 text-[13px] rounded-[0.2rem]">
          {seconds}
        </p>
      </div>
    </div>
  );
};

export default Timer;
