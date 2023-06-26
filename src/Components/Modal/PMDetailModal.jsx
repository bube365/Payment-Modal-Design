import React, { useContext, useEffect, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate, Link } from "react-router-dom";

export default function PMDetailModal({
  closeModal,
  isOpen,
  openModal,
  title,
  text,
}) {
  const [PMFirstName, setPMFirstName] = useState("");
  const [PMLastName, setPMLastName] = useState("");
  const [PMEmail, setPMEmail] = useState("");
  const [PMSkills, setPMSkills] = useState([]);

  // setting these values as placeholder on inputs to know which details have not been filled before.
  // const Firstname = localStorage.getItem("CeoFirstName");
  // const LastName = localStorage.getItem("CeoLastName");
  // const Email = localStorage.getItem("CeoEmail");

  function handleSubmit(event) {
    event.preventDefault();
    closeModal();
    localStorage.setItem("PMFirstName", PMFirstName);
    localStorage.setItem("PMLastName", PMLastName);
    localStorage.setItem("PMEmail", PMEmail);
    const MySkills = PMSkills.split(",");
    setPMSkills(MySkills);
    localStorage.setItem("PMSkills", PMSkills);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-primary bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-mainWhite rounded-md p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-lg tracking-wide text-gray-500">
                      {text}
                    </p>
                  </div>

                  <form
                    action=""
                    onSubmit={handleSubmit}
                    className="text-mainBlack w-full"
                  >
                    <div className="w-full bg-lightGreen rounded-md p-2 flex flex-col">
                      <label htmlFor="firstname " className="">
                        FirstName
                      </label>
                      <input
                        className="border border-secondary rounded-md p-1  w-full text-gray-400 "
                        type="text"
                        name=""
                        id="firstname"
                        onChange={(e) => {
                          setPMFirstName(e.target.value);
                        }}
                        value={PMFirstName}
                      />{" "}
                    </div>
                    <div className="w-full bg-lightGreen rounded-md p-2 flex flex-col">
                      <label htmlFor="lastname">LastName</label>
                      <input
                        className="border border-secondary rounded-md p-1  w-full  text-gray-400"
                        type="text"
                        name=""
                        id="lastname"
                        onChange={(e) => {
                          setPMLastName(e.target.value);
                        }}
                        value={PMLastName}
                      />{" "}
                    </div>
                    <div className="w-full bg-lightGreen rounded-md p-2 flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                        className="border border-secondary rounded-md p-1  w-full  text-gray-400"
                        type="email"
                        name=""
                        id="email"
                        onChange={(e) => {
                          setPMEmail(e.target.value);
                        }}
                        value={PMEmail}
                      />
                    </div>

                    <div className="bg-lightGreen">
                      <p className="text-gray-900 mt-2">
                        Please select your favorite Web language:
                      </p>
                       {" "}
                      <input
                        type="checkbox"
                        id="html"
                        name="fav_language"
                        onChange={(e) => {
                          setPMSkills(e.target.value);
                        }}
                        value={[PMSkills.concat(["HTML,"])]}
                      />
                      <label for="html">HTML</label>
                      <br />
                      <input
                        type="checkbox"
                        id="css"
                        name="fav_language"
                        onChange={(e) => {
                          setPMSkills(e.target.value);
                        }}
                        value={[PMSkills.concat(["CSS,"])]}
                      />
                      <label for="css">CSS</label>
                      <br />
                      <input
                        type="checkbox"
                        id="javascript"
                        name="fav_language"
                        onChange={(e) => {
                          setPMSkills(e.target.value);
                        }}
                        value={[PMSkills.concat(["Javascript,"])]}
                      />
                      <label for="javascript">JavaScript</label>
                      <br />
                      <input
                        type="checkbox"
                        id="view"
                        name="fav_language"
                        onChange={(e) => {
                          setPMSkills(e.target.value);
                        }}
                        value={[PMSkills.concat(["VIEW,"])]}
                      />
                      <label for="view">View</label>
                    </div>

                    <div className="mt-4 w-full flex justify-between">
                      <div className="border border-secondary p-2 bg-primary  rounded-md text-lightGreen">
                        <button
                          type="submit"
                          classnames="flex justify-center items-center group text-base  font-semibold w-full rounded-md text-center p-4"
                        >
                          Proceed
                        </button>
                      </div>
                      <div className="border border-primary p-2 bg-lightGreen  rounded-md text-primary">
                        <button
                          type="button"
                          classnames="flex justify-center items-center group text-base  font-semibold w-full rounded-md text-center p-4"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
