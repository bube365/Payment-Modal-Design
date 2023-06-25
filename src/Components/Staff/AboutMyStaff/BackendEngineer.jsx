import React, { useState } from "react";
import ProfilePic from "../../../assets/profilePicture2.svg";
import { FaTimes, FaArrowLeft } from "react-icons/fa";

const BackendEngineer = () => {
  const [openBckRemoveTab, setBckOpenRemoveTab] = useState(false);
  const [BckFirstName, setBckFirstName] = useState("Austin");
  const [BckLastName, setBckLastName] = useState("Duke");
  const [BckEmail, setBckEmail] = useState("Me");
  const [BckSkills, setBckSkills] = useState(["me", ", ", "Goodthings"]);

  // .......

  const [selectBckFirstName, setSelectBckFirstName] = useState(false);
  const [selectBckLastName, setSelectBckLastName] = useState(false);
  const [selectBckEmail, setSelectBckEmail] = useState(false);
  const [selectBckSkills, setSelectBckSkills] = useState(false);
  return (
    <>
      <div className="bg-lightGreen py-10 w-full h-[100vh] sm:h-full px-6 ">
        <div className="flex flex-col relative items-center justify-center mt-12 ">
          <div className="hidden sm:block staffShrimer"></div>
          <h1 className="text-mainBlack text-[36px] font-bold my-6 text-center">
            About Backend Engineer
          </h1>
          <div className="bg-primary  w-full sm:w-[70%] xsm:w-[50%]  p-6 rounded-md text-lightGreen flex flex-col justify-between text-[18px] sm:text-[16px]">
            <img
              src={ProfilePic}
              alt=""
              className="w-[30%] sm:w-[20%] bg-mainWhite p-1 rounded-full"
            />

            {/*  */}
            <div className="my-6 sm:my-4 flex flex-col">
              <div className=" w-full flex sm:flex-row flex-col mb-2">
                <p className="w-28">FirstName :</p>
                <p className="bg-transparent px-2 text-mainWhite">
                  {BckFirstName}
                </p>
              </div>

              <div className=" w-full flex sm:flex-row flex-col mb-2">
                <p className="w-28">LastName :</p>
                <p className="bg-transparent px-2 text-mainWhite">
                  {BckLastName}
                </p>
              </div>

              <div className=" w-full flex sm:flex-row flex-col mb-2">
                <p className="w-28">Email :</p>
                <p className="bg-transparent px-2 text-mainWhite">{BckEmail}</p>
              </div>

              <div className=" w-full flex sm:flex-row flex-col mb-2">
                <p className="w-28">Skills :</p>
                <p className="bg-transparent px-2 text-mainWhite">
                  {BckSkills}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => {}}
                className="bg-secondary py-2 w-32 rounded-md hover:bg-primary hover:border border-lightGreen "
              >
                Add
              </button>

              <button
                onClick={() => {
                  openBckRemoveTab
                    ? setBckOpenRemoveTab(false)
                    : setBckOpenRemoveTab(true);
                }}
                className="bg-mainWhite py-2  w-32 text-primary hover:bg-primary hover:border border-lightGreen rounded-md hover:text-lightGreen"
              >
                Remove
              </button>
            </div>
          </div>

          {openBckRemoveTab ? (
            <>
              <div className="sm:w-[15rem] w-[20rem] sm:text-[13px] text-[16px] rounded-r-md bg-primary border border-lightGreen  sm:border-primary  p-2  absolute sm:bottom-2 sm:right-12 sm:top-48 top-24 right-0">
                <h1 className="sm:text-[14px] text-[18px] font-semibold text-mainWhite flex justify-between items-center">
                  Remove Detail <FaArrowLeft />
                </h1>
                <p className="text-gray-200 my-2">
                  Select the detail/details you want to remove from profile
                </p>

                <div className="text-lightGreen font-medium  flex justify-between items-center px-2 py-1 ">
                  <p>FirstName</p>
                  <button
                    onClick={() => {
                      selectBckFirstName
                        ? setSelectBckFirstName(false)
                        : setSelectBckFirstName(true);
                    }}
                    className="bg-mainWhite text-red font-bold rounded-full text-center sm:w-3 sm:h-3 w-4 h-4"
                  >
                    {selectBckFirstName ? <FaTimes /> : ""}
                  </button>
                </div>

                <div className="text-lightGreen font-medium hover:pl-3  flex justify-between items-center px-2 py-1 ">
                  <p>LastName</p>
                  <button
                    onClick={() => {
                      selectBckLastName
                        ? setSelectBckLastName(false)
                        : setSelectBckLastName(true);
                    }}
                    className="bg-mainWhite text-red font-bold rounded-full text-center sm:w-3 sm:h-3 w-4 h-4"
                  >
                    {selectBckLastName ? <FaTimes /> : ""}
                  </button>
                </div>

                <div className="text-lightGreen font-medium hover:pl-3  flex justify-between items-center px-2 py-1 ">
                  <p>Email</p>
                  <button
                    onClick={() => {
                      selectBckEmail
                        ? setSelectBckEmail(false)
                        : setSelectBckEmail(true);
                    }}
                    className="bg-mainWhite text-red font-bold rounded-full text-center sm:w-3 sm:h-3 w-4 h-4"
                  >
                    {selectBckEmail ? <FaTimes /> : ""}
                  </button>
                </div>

                <div className="text-lightGreen font-medium hover:pl-3  flex justify-between items-center px-2 py-1">
                  <p>Skills</p>
                  <button
                    onClick={() => {
                      selectBckSkills
                        ? setSelectBckSkills(false)
                        : setSelectBckSkills(true);
                    }}
                    className="bg-mainWhite text-red font-bold rounded-full text-center sm:w-3 sm:h-3 w-4 h-4"
                  >
                    {selectBckSkills ? <FaTimes /> : ""}
                  </button>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setBckOpenRemoveTab(false);

                      if (selectBckFirstName) {
                        setBckFirstName("");
                      } else if (selectBckLastName) {
                        setBckLastName("");
                      } else if (selectBckEmail) {
                        setBckEmail("");
                      } else if (selectBckSkills) {
                        setBckSkills([]);
                      } else {
                        return;
                      }

                      setSelectBckFirstName(false);
                      setSelectBckLastName(false);
                      setSelectBckEmail(false);
                      setSelectBckSkills(false);
                      // switch (true) {
                      //   case selectCeoFirstName:
                      //     setCeoFirstName("");
                      //   case selectCeoLastName:
                      //     setCeoLastName("");
                      //   case selectCeoEmail:
                      //     setCeoEmail("");

                      //   default:
                      //     break;
                      // }
                    }}
                    className="bg-transparent mt-2 px-2 rounded-md border border-lightGreen text-mainWhite "
                  >
                    Done
                  </button>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default BackendEngineer;
