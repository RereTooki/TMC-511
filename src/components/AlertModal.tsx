import React from "react";
import { Dialog } from "@headlessui/react";
// import { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose }) => {
  // Function to handle the click event and scroll to the top
  // const handleItemClick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-20 focus:outline-none select-none"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Title className="fixed inset-0 bg-black opacity-30" />
            <Dialog.Panel
              data-aos="zoom-in"
              data-aos-duration="500"
              className="w-full max-w-md rounded-xl bg-white/90 p-6 backdrop-blur-lg duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <Dialog.Title
                as="h3"
                className="text-bases/7 font-semibold text-2xl text-gray-700 hover:text-gray-900 "
              >
                <span className="underline underline-offset-4">TMC 511</span>{" "}
              </Dialog.Title>
              <p className="mt-8 text-sm/6 text-gray-500 hover:text-gray-700 shadow rounded-lg p-4">
                <div className="containers mx-auto sborder-4 border-black max-h-[40vh] soverflow-y-scroll scroll scrollModal overflow-y-scroll">
                  <p>
                    Hello and welcome to the TMC 511 hub! <br></br> <br></br>{" "}
                    Here, you'll find every scripture, book and quote taught so
                    far this semester. Also, there's now a quiz feature.
                    <br></br>
                    <br></br>P.S. READ YOUR NOTES TOO<br></br>P.S. Check this
                    out:{" "}
                    <a
                      href="https://rere-tooki.vercel.app/"
                      target="_blank"
                      title="Rere Tooki"
                      className="underline underline-offset-2 hover:underline-offset-4"
                    >
                      My Portfolio Site
                    </a>
                    <br></br>
                    <br></br>Thank you!<br></br>~ rere
                  </p>
                </div>
              </p>
              <button className="absolute top-4 right-4 " onClick={onClose}>
                <IoMdClose className="h-5 w-5" color="gray-100" />
              </button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AlertModal;
