import { X } from "@phosphor-icons/react";
import React from "react";

const Modal = ({ title, children, onClose, open }) => {
  if (!open) return null;
  return (
    <article className="absolute z-30 bg-black bg-opacity-30 w-screen h-screen overflow-hidden">
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  rounded-lg w-[320px]">
        {/* modal header */}
        <div className="px-4 py-2 border-b border-gray-500 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-950 ">{title}</h2>

          <X
            size={24}
            className=" hover:cursor-pointer text-blue-950 hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={onClose}
          />
        </div>
        {/* modal body */}
        {children}
        {/* modal footer */}
        {/* <div className="px-4 py-2 border-t border-gray-500 flex items-center justify-end">
          <button
            onClick={handleSave}
            className="block bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-all duration-300 ease-in-out px-2"
          >
            Save
          </button>
        </div> */}
      </section>
    </article>
  );
};

export default Modal;
