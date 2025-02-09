import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { projectsSites } from "./Projects";

interface AlertModal2Props {
  isOpen2: boolean;
  onClose: () => void;
}

const AlertModal2: React.FC<AlertModal2Props> = ({ isOpen2, onClose }) => {
  // Function to handle the click event and scroll to the top
  const handleItemClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Dialog
        open={isOpen2}
        as="div"
        className="relative z-20 focus:outline-none select-none"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Title className="fixed inset-0 bg-black opacity-30" />
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/90 p-6 backdrop-blur-lg duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-bases/7 font-semibold text-2xl text-gray-700 hover:text-gray-900 sss"
              >
                <span className="underline underline-offset-4">
                  My Projects
                </span>{" "}
              </DialogTitle>
              <p className="mt-8 text-sm/6 text-gray-500 hover:text-gray-700 shadow rounded-lg p-4">
                <p className="underline underline-offset-4 decoration-dotted">
                  Some of My Works
                </p>
                <div className="containers mx-auto sborder-4 border-black max-h-[40vh] overflow-y-scroll scroll scrollModal mt-2">
                  <ol className="list-decimal px-5">
                    {projectsSites.map((project, index) => (
                      //    <a
                      //    href="https://rere-tooki.vercel.app/"
                      //    target="_blank"
                      //    title="Rere Tooki"
                      //    className="underline underline-offset-2 hover:underline-offset-4"
                      //  >
                      //    My Portfolio Site
                      //  </a>
                      <a
                        href={project.route}
                        target="_blank"
                        onClick={handleItemClick}
                        key={index}
                      >
                        <li className="flex items-center mb-2 list-decimal border-b-2 border-black py-2 border-double hover:bg-gray-500 hover:rounded-lg hover:text-white hover:scale-[1.03]">
                          <img
                            src={project.imgSrc}
                            alt={project.imgAlt}
                            className="w-10 h-10 mr-2 rounded-lg object-covers" // Tailwind classes for 20x20px image
                          />
                          <span>{project.title}</span>
                        </li>
                      </a>
                    ))}
                  </ol>
                </div>
              </p>
              <button className="absolute top-4 right-4 " onClick={onClose}>
                <IoMdClose className="h-5 w-5" color="gray-100" />
              </button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AlertModal2;
