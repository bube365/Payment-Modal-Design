import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="bg-blue-gradient h-[100vh] w-full">
      <div className="top-[50%] left-[50%] absolute transform -translate-x-[50%] -translate-y-[50%] text-darkBlue bg-white p-6 rounded-lg flex flex-col items-center">
        <article>
          <h1 className="font-bold text-[36px]">Dear Valued Customer,</h1>
          <p>
            Your payment is being processed. You'll get a notification soon.
          </p>
        </article>
        <Link
          to={"/"}
          className="text-white font-semibold text-[14px] bg-primary w-64 px-2 py-2 text-center mt-4 rounded-lg hover:cursor-pointer hover:drop-shadow-xl"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
