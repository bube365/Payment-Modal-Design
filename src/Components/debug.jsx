import React, { useState } from "react";
// import ProfilePic from "../../../assets/profilePicture2.svg";
// import { FaTimes, FaArrowLeft } from "react-icons/fa";
// import AddDetailsModal from "../../Modal/AddDetailsModal";

// const CEO = () => {
//   // const fisrtname = localStorage.getItem("fisrtname");
//   // const lastName = localStorage.getItem("lastName");
//   const Ceoemail = localStorage.getItem("Ceoemail");
//   const skills = localStorage.getItem("skills");

//   const [removePortal, setRemovePortal] = useState(false);
//   // const [selectFirstname, setSelectFirstName] = useState(false);
//   // const [selectLastname, setSelectLastName] = useState(false);
//   const [selectCeoEmail, setCeoSelectEmail] = useState(false);
//   const [selectSkills, setSelectSkills] = useState(false);

//   let [isOpen, setIsOpen] = useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <>
//       <div className="bg-lightGreen py-10 w-full h-[100vh] px-6 ">
//         <div className="flex flex-col items-center justify-center mt-12 relative">
//           <h1 className="text-mainBlack text-[36px] font-bold my-6 text-center">
//             About CEO
//           </h1>
//           <div className="bg-primary w-full sm:w-[70%] xsm:w-[50%]  p-6 rounded-md text-lightGreen flex flex-col justify-between text-[18px] sm:text-[16px]">
//             <img
//               src={ProfilePic}
//               alt=""
//               className="w-[30%] sm:w-[20%] bg-mainWhite p-1 rounded-full"
//             />

//             <div className="my-6 sm:my-4 flex flex-col">
//               {/* <div className=" w-full flex sm:flex-row flex-col mb-2">
//                 <label htmlFor="firstname" className="w-28">
//                   FirstName :
//                 </label>
//                 <input
//                   type="text"
//                   name=""
//                   id="firstname"
//                   className="bg-transparent px-2 text-mainWhite"
//                   disabled
//                   value={fisrtname}
//                 />
//               </div> */}

//               {/* <div className=" w-full flex sm:flex-row flex-col mb-2">
//                 <label htmlFor="lastname" className="w-28">
//                   LastName :
//                 </label>

//                 <input
//                   type="text"
//                   name=""
//                   id="lastname"
//                   className="bg-transparent px-2 text-mainWhite"
//                   disabled
//                   value={lastName}
//                 />
//               </div> */}

//               <div className=" w-full flex sm:flex-row flex-col mb-2">
//                 <p className="w-28 ">Email :</p>
//                 <p className="bg-transparent px-2 text-mainWhite">{Ceoemail}</p>
//               </div>

//               <div className=" w-full flex sm:flex-row flex-col  mb-2">
//                 <p className="w-28">Skills :</p>
//                 <p id="skills" className="bg-transparent   px-2 text-mainWhite">
//                   {skills}
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-between items-center">
//               <button
//                 onClick={openModal}
//                 className="bg-secondary py-2 w-32 rounded-md hover:bg-primary hover:border border-lightGreen"
//               >
//                 Add
//               </button>
//               <button
//                 onClick={() => {
//                   removePortal ? setRemovePortal(false) : setRemovePortal(true);
//                 }}
//                 className="bg-mainWhite py-2  w-32 text-primary hover:bg-primary hover:border border-lightGreen rounded-md hover:text-lightGreen"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//           {removePortal ? (
//             <div className="w-[15rem]  text-[14px]  bg-black p-2 rounded-md absolute top-0 right-0 ">
//               <h1 className="text-[18px] font-bold text-mainWhite flex justify-between items-center">
//                 Remove Detail <FaArrowLeft />
//               </h1>
//               <p className="text-lightGreen my-2">
//                 Select the detail/details you want to remove from profile
//               </p>

//               {/* <div className="text-black hover:pl-5 bg-secondary flex justify-between items-center px-2 py-1">
//                 <p>FirstName</p>
//                 <button
//                   onClick={() => {
//                     selectFirstname
//                       ? setSelectFirstName(false)
//                       : setSelectFirstName(true);
//                   }}
//                   className="bg-mainWhite border border-primary text-red font-bold rounded-full text-center w-3 h-3"
//                 >
//                   {selectFirstname ? <FaTimes /> : ""}
//                 </button>
//               </div> */}

//               {/* <div className="text-black bg-lightGreen  hover:pl-5 flex justify-between items-center px-2 py-1">
//                 <p>LastName</p>
//                 <button
//                   onClick={() => {
//                     selectLastname
//                       ? setSelectLastName(false)
//                       : setSelectLastName(true);
//                   }}
//                   className="bg-mainWhite border border-primary text-red font-bold rounded-full text-center w-3 h-3"
//                 >
//                   {selectLastname ? <FaTimes /> : ""}
//                 </button>
//               </div> */}

//               <div className="text-mainWhite bg-primary hover:pl-5 flex justify-between items-center px-2 py-1">
//                 <p>Email</p>
//                 <button
//                   onClick={() => {
//                     selectCeoEmail
//                       ? setCeoSelectEmail(false)
//                       : setCeoSelectEmail(true);
//                   }}
//                   className="bg-mainWhite text-red font-bold rounded-full text-center w-3 h-3"
//                 >
//                   {selectCeoEmail ? <FaTimes /> : ""}
//                 </button>
//               </div>

//               <div className="text-mainWhite bg-secondary hover:pl-5 flex justify-between items-center px-2 py-1">
//                 <p>Skills</p>
//                 <button
//                   onClick={() => {
//                     selectSkills
//                       ? setSelectSkills(false)
//                       : setSelectSkills(true);
//                   }}
//                   className="bg-mainWhite text-red font-bold rounded-full text-center w-3 h-3"
//                 >
//                   {selectSkills ? <FaTimes /> : ""}
//                 </button>
//               </div>
//               <button
//                 onClick={() => {
//                   setRemovePortal(false);

//                   switch (true) {
//                     // case selectFirstname:
//                     //   localStorage.setItem("fisrtname", "");

//                     case selectCeoEmail:
//                       localStorage.setItem("Ceoemail", "");

//                     // case selectLastname:
//                     //   localStorage.setItem("lastName", "");

//                     case selectSkills:
//                       localStorage.setItem("skills", []);

//                     default:
//                       break;
//                   }
//                 }}
//                 className="bg-transparent mt-2 px-2 rounded-md border border-lightGreen text-mainWhite "
//               >
//                 Done
//               </button>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>

//       {isOpen && (
//         <AddDetailsModal
//           closeModal={closeModal}
//           openModal={openModal}
//           isOpen={isOpen}
//           title="Add Details To Profile"
//           text="Add Details"
//         />
//       )}
//     </>
//   );
// };

// export default CEO;

modal;

// import React, { useContext, useEffect, Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { useNavigate, Link } from "react-router-dom";

// export default function AddDetailsModal({
//   closeModal,
//   isOpen,
//   openModal,
//   title,
//   text,
// }) {

//   const [fisrtname, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [Ceoemail, setCeoEmail] = useState("");
//   const [skills, setSkills] = useState([]);

//   setting these values as placeholder on inputs to know which details have not been filled before.
//   const Firstname = localStorage.getItem("fisrtname");
//   const LastName = localStorage.getItem("lastName");
//   const Email = localStorage.getItem("email");

//   function handleSubmit(event) {
//     event.preventDefault();
//     closeModal();

//     localStorage.setItem("fisrtname", fisrtname);
//     localStorage.setItem("lastName", lastName);
//     localStorage.setItem("Ceoemail", Ceoemail);
//     const MySkills = skills.split(",");
//     setSkills(MySkills);
//     localStorage.setItem("skills", skills);
//   }

//   return (
//     <>
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-primary bg-opacity-70" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-mainWhite rounded-md p-6 text-left align-middle shadow-xl transition-all">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-bold leading-6 text-gray-900"
//                   >
//                     {title}
//                   </Dialog.Title>
//                   <div className="mt-4">
//                     <p className="text-lg tracking-wide text-gray-500">
//                       {text}
//                     </p>
//                   </div>

//                   <form
//                     action=""
//                     onSubmit={handleSubmit}
//                     className="text-mainBlack w-full"
//                   >
//                     <div className="w-full bg-lightGreen rounded-md p-2 flex flex-col">
//                       <label htmlFor="firstname " className="">
//                         FirstName
//                       </label>
//                       <input
//                         className="border border-secondary rounded-md p-1  w-full text-gray-400 "
//                         type="text"
//                         name=""
//                         id="firstname"
//                         onChange={(e) => {
//                           setFirstName(e.target.value);
//                         }}
//                         value={fisrtname}
//                       />{" "}
//                     </div>
//                     <div className="w-full bg-lightGreen rounded-md p-2 flex flex-col">
//                       <label htmlFor="lastname">LastName</label>
//                       <input
//                         className="border border-secondary rounded-md p-1  w-full  text-gray-400"
//                         type="text"
//                         name=""
//                         id="lastname"
//                         onChange={(e) => {
//                           setLastName(e.target.value);
//                         }}
//                         value={lastName}
//                       />{" "}
//                     </div>
//                     <div className="w-full bg-lightGreen rounded-md p-2 flex flex-col">
//                       <label htmlFor="email">Email</label>
//                       <input
//                         className="border border-secondary rounded-md p-1  w-full  text-gray-400"
//                         type="email"
//                         name=""
//                         id="email"
//                         onChange={(e) => {
//                           setCeoEmail(e.target.value);
//                         }}
//                         value={Ceoemail}
//                       />
//                     </div>

//                     <div className="bg-lightGreen">
//                       <p className="text-gray-900 mt-2">
//                         Please select your favorite Web language:
//                       </p>
//                        {" "}
//                       <input
//                         type="checkbox"
//                         id="html"
//                         name="fav_language"
//                         onChange={(e) => {
//                           setSkills(e.target.value);
//                         }}
//                         value={[skills.concat(["HTML,"])]}
//                       />
//                       <label for="html">HTML</label>
//                       <br />
//                       <input
//                         type="checkbox"
//                         id="css"
//                         name="fav_language"
//                         onChange={(e) => {
//                           setSkills(e.target.value);
//                         }}
//                         value={[skills.concat(["CSS,"])]}
//                       />
//                       <label for="css">CSS</label>
//                       <br />
//                       <input
//                         type="checkbox"
//                         id="javascript"
//                         name="fav_language"
//                         onChange={(e) => {
//                           setSkills(e.target.value);
//                         }}
//                         value={[skills.concat(["Javascript,"])]}
//                       />
//                       <label for="javascript">JavaScript</label>
//                       <br />
//                       <input
//                         type="checkbox"
//                         id="view"
//                         name="fav_language"
//                         onChange={(e) => {
//                           setSkills(e.target.value);
//                         }}
//                         value={[skills.concat(["VIEW,"])]}
//                       />
//                       <label for="view">View</label>
//                     </div>

//                     <div className="mt-4 w-full flex justify-between">
//                       <div className="border border-secondary p-2 bg-primary  rounded-md text-lightGreen">
//                         <button
//                           type="submit"
//                           classnames="flex justify-center items-center group text-base  font-semibold w-full rounded-md text-center p-4"
//                         >
//                           Proceed
//                         </button>
//                       </div>
//                       <div className="border border-primary p-2 bg-lightGreen  rounded-md text-primary">
//                         <button
//                           type="button"
//                           classnames="flex justify-center items-center group text-base  font-semibold w-full rounded-md text-center p-4"
//                           onClick={closeModal}
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// }
