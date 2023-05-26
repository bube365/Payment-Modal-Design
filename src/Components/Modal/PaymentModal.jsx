import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ActionButton from "../Input/ActionButton";
import ModalUserInterface from "./ModalUserInterface";
import { FaTimes } from "react-icons/fa";

export default function PaymentModal({
  closeModal,
  isOpen,
  openModal,

  text,
}) {
  return (
    <>
      {/* Modal by React HeadlessUi  */}
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
            <div className="fixed inset-0 bg-blue-gradient" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6 md:px-40 xl:px-60 xxl:px-96 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  transform overflow-hidden bg-white py-2 px-3 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <ActionButton
                      type="button"
                      classnames="text-right text-base bg-gradedBlue font-semibold text-mainBlue rounded-md  text-gray-500 "
                      onClick={closeModal}
                      label={<FaTimes />}
                    />
                  </div>
                  <div className="px-4">
                    <ModalUserInterface
                      closeModal={closeModal}
                      openModal={openModal}
                      isOpen={isOpen}
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-lg tracking-wide text-gray-500">
                      {text}
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
