import React, { useState } from "react";
import ProfilePic from "../../../assets/profilePicture.svg";
import { FaTimes, FaArrowLeft } from "react-icons/fa";
import ChiefDesignerModal from "../../Modal/ChiefDesignerModal";

const ChiefDesigner = () => {
  const [openChiefRemoveTab, setChiefOpenRemoveTab] = useState(false);

  const ChFirstName = localStorage.getItem("ChiefFirstName");
  const ChLastName = localStorage.getItem("ChiefLastName");
  const ChEmail = localStorage.getItem("ChiefEmail");
  const ChSkills = localStorage.getItem("ChiefSkills");

  // .......

  const [selectChiefFirstName, setSelectChiefFirstName] = useState(false);
  const [selectChiefLastName, setSelectChiefLastName] = useState(false);
  const [selectChiefEmail, setSelectChiefEmail] = useState(false);
  const [selectChiefSkills, setSelectChiefSkills] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="bg-lightGreen py-10 w-full h-[100vh] sm:h-full px-6 ">
        <div className="flex flex-col relative items-center justify-center mt-12 ">
          <div className="hidden sm:block staffShrimer"></div>
          <h1 className="text-mainBlack text-[36px] font-bold my-6 text-center">
            About Chief Designer
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
                  {ChFirstName}
                </p>
              </div>

              <div className=" w-full flex sm:flex-row flex-col mb-2">
                <p className="w-28">LastName :</p>
                <p className="bg-transparent px-2 text-mainWhite">
                  {ChLastName}
                </p>
              </div>

              <div className=" w-full flex sm:flex-row flex-col mb-2">
                <p className="w-28">Email :</p>
                <p className="bg-transparent px-2 text-mainWhite">{ChEmail}</p>
              </div>

              <div className=" w-full flex sm:flex-row flex-col mb-2">
                <p className="w-28">Skills :</p>
                <p className="bg-transparent px-2 text-mainWhite">{ChSkills}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={openModal}
                className="bg-secondary py-2 w-32 rounded-md hover:bg-primary hover:border border-lightGreen "
              >
                Add
              </button>

              <button
                onClick={() => {
                  openChiefRemoveTab
                    ? setChiefOpenRemoveTab(false)
                    : setChiefOpenRemoveTab(true);
                }}
                className="bg-mainWhite py-2  w-32 text-primary hover:bg-primary hover:border border-lightGreen rounded-md hover:text-lightGreen"
              >
                Remove
              </button>
            </div>
          </div>

          {openChiefRemoveTab ? (
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
                      selectChiefFirstName
                        ? setSelectChiefFirstName(false)
                        : setSelectChiefFirstName(true);
                    }}
                    className="bg-mainWhite text-red font-bold rounded-full text-center sm:w-3 sm:h-3 w-4 h-4"
                  >
                    {selectChiefFirstName ? <FaTimes /> : ""}
                  </button>
                </div>

                <div className="text-lightGreen font-medium hover:pl-3  flex justify-between items-center px-2 py-1 ">
                  <p>LastName</p>
                  <button
                    onClick={() => {
                      selectChiefLastName
                        ? setSelectChiefLastName(false)
                        : setSelectChiefLastName(true);
                    }}
                    className="bg-mainWhite text-red font-bold rounded-full text-center sm:w-3 sm:h-3 w-4 h-4"
                  >
                    {selectChiefLastName ? <FaTimes /> : ""}
                  </button>
                </div>

                <div className="text-lightGreen font-medium hover:pl-3  flex justify-between items-center px-2 py-1 ">
                  <p>Email</p>
                  <button
                    onClick={() => {
                      selectChiefEmail
                        ? setSelectChiefEmail(false)
                        : setSelectChiefEmail(true);
                    }}
                    className="bg-mainWhite text-red font-bold rounded-full text-center sm:w-3 sm:h-3 w-4 h-4"
                  >
                    {selectChiefEmail ? <FaTimes /> : ""}
                  </button>
                </div>

                <div className="text-lightGreen font-medium hover:pl-3  flex justify-between items-center px-2 py-1">
                  <p>Skills</p>
                  <button
                    onClick={() => {
                      selectChiefSkills
                        ? setSelectChiefSkills(false)
                        : setSelectChiefSkills(true);
                    }}
                    className="bg-mainWhite text-red font-bold rounded-full text-center sm:w-3 sm:h-3 w-4 h-4"
                  >
                    {selectChiefSkills ? <FaTimes /> : ""}
                  </button>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setChiefOpenRemoveTab(false);

                      if (selectChiefFirstName) {
                        localStorage.setItem("ChiefFirstName", "");
                      } else if (selectChiefLastName) {
                        localStorage.setItem("ChiefLastName", "");
                      } else if (selectChiefEmail) {
                        localStorage.setItem("ChiefEmail", "");
                      } else if (selectChiefSkills) {
                        localStorage.setItem("ChiefSkills", []);
                      } else {
                        return;
                      }

                      setSelectChiefFirstName(false);
                      setSelectChiefLastName(false);
                      setSelectChiefEmail(false);
                      setSelectChiefSkills(false);
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
                    className="bg-red mt-2 px-2 rounded-md border border-red text-mainWhite "
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
      {isOpen && (
        <ChiefDesignerModal
          closeModal={closeModal}
          openModal={openModal}
          isOpen={isOpen}
          title="Add Details To Profile"
          text="Add Details"
        />
      )}
    </>
  );
};
export default ChiefDesigner;
