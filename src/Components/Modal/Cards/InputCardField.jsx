import React, { useState } from "react";
import { MdEdit, MdVerified } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { Link, useNavigate, useLocation } from "react-router-dom";

const InputCardField = ({ onValueChange, closeModal }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardVerification, setCardVerification] = useState("");
  const [validCard, setValidCard] = useState(false);
  const [lastDigits, setLastDigits] = useState("");
  const [buttonText, setButtonText] = React.useState("Pay Now");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/success";

  const formatCardNumber = (event) => {
    const inputCardNumber = event.target.value.replace(/-/g, "");
    const formattedCardNumber = [];

    for (let i = 0; i < inputCardNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedCardNumber.push("-");
      }
      formattedCardNumber.push(inputCardNumber[i]);
    }
    setCardNumber(formattedCardNumber.join(""));

    if (inputCardNumber.length < 16) {
      setCardVerification(<p className="text-red-500 text-[14px]">Invalid</p>);
    } else if (inputCardNumber.length > 16) {
      setCardVerification(<p className="text-red-500 text-[14px]">Invalid</p>);
    } else {
      setCardVerification(<MdVerified className="text-primary text-[17px]" />);
      setLastDigits(formattedCardNumber.slice(-4));
      setValidCard(true);
    }

    onValueChange(formattedCardNumber);
  };

  // Handle Submit Event
  async function handleSubmit(event) {
    event.preventDefault();

    // set button name to ...
    setButtonText("Processing Payment...");

    try {
      if (validCard) {
        navigate(from, { replace: true });
        closeModal();
      } else {
        setButtonText("Pay Now");
      }
    } catch (error) {}
  }

  return (
    <section className="text-darkBlue font-bold mt-4 text-[14px] ">
      {/* <button onClick={handleClick}>Pass Value</button> */}

      <form onSubmit={handleSubmit}>
        {/* Card Number */}

        <div className="flex justify-between">
          <div>
            <h2>Card Number</h2>
            <p className="font-normal text-grey">
              Enter the 16-digit card number on the card
            </p>
          </div>

          <p className="text-primary font-medium flex items-center gap-2 cursor-pointer">
            <MdEdit /> Edit
          </p>
        </div>

        <div className="w-full mt-4 border-[0.05px] font-medium border-greyThree bg-LightGrey rounded-[0.35rem] px-2 flex justify-between items-center">
          <div className="masterCard1"></div>
          <input
            type="text"
            name=""
            id=""
            value={cardNumber}
            required
            onChange={formatCardNumber}
            placeholder="Enter Card Number"
            className="w-full bg-transparent p-2 mx-6"
          />

          {cardVerification}
        </div>

        {/* Cvv Number */}
        <div className="flex flex-col ss:flex-row justify-between mt-5 ss:items-center">
          <div>
            <h2>Cvv Number</h2>
            <p className="font-normal text-grey">
              Enter the 3 or 4 digit number on the card
            </p>
          </div>

          <div className="ss:w-[40%] mt-4  border-[0.05px] font-medium border-greyThree bg-LightGrey rounded-[0.35rem] px-2 flex justify-between items-center">
            <input
              type="text"
              name=""
              id=""
              required
              // value={cardNumber}
              // onChange={formatCardNumber}
              placeholder="Cvv"
              className="w-full bg-transparent p-2 mx-6"
            />

            <CgMenuGridO className="text-[28px] text-greyFour" />
          </div>
        </div>

        {/* Expiry Date */}

        <div className="flex justify-between my-5 flex-col ss:flex-row  ">
          <div>
            <h2>Expiry Date</h2>
            <p className="font-normal text-grey">
              Enter the expiration date of the card
            </p>
          </div>

          <div className=" flex justify-between items-center gap-4 w-[40%]">
            <input
              type="text"
              name=""
              id=""
              placeholder="07"
              required
              className="w-full   border-[0.05px] font-medium border-greyThree bg-LightGrey rounded-[0.35rem] px-4 py-2"
            />
            /
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="12"
              className="w-full  border-[0.05px] font-medium border-greyThree bg-LightGrey rounded-[0.35rem] px-4 py-2"
            />
          </div>
        </div>

        <div className="flex flex-col ss:flex-row justify-between mb-5 ss:items-center">
          <div>
            <h2>Password</h2>
            <p className="font-normal text-grey">Enter your Dynamic password</p>
          </div>

          <div className="ss:w-[40%] mt-4  border-[0.05px] font-medium border-greyThree bg-LightGrey rounded-[0.35rem] px-2 flex justify-between items-center">
            <input
              type="password"
              name=""
              id=""
              required
              placeholder="**********"
              className="w-full bg-transparent p-2 mx-6"
            />

            <CgMenuGridO className="text-[28px] text-greyFour" />
          </div>
        </div>

        <button
          type="submit"
          className="text-white font-semibold text-[14px] bg-primary w-full px-2 py-3 text-center mt-4 rounded-[0.35rem] hover:cursor-pointer hover:drop-shadow-xl"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
};

export default InputCardField;
