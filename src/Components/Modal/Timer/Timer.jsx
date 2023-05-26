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
    <div className="flex gap-1 mt-6 xs:mt-0">
      <p className="text-mainWhite ">
        <span className="bg-darkBlue p-1 text-[13px] rounded-[0.2rem]">
          {preceedingMin}
        </span>
        <span className="bg-darkBlue ml-[1px] p-1 text-[13px] rounded-[0.2rem]">
          {minutes}
        </span>{" "}
      </p>
      :
      <p className="text-mainWhite ">
        <span className="bg-darkBlue p-1 text-[13px] rounded-[0.2rem]">
          {preceedingSec}
        </span>
        <span className="bg-darkBlue ml-[1px] p-1 text-[13px] rounded-[0.2rem]">
          {seconds}
        </span>
      </p>
    </div>
  );
};

export default Timer;
