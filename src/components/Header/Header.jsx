import { SignOut, Speedometer } from "@phosphor-icons/react";
import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  const screenSize = useWindowSize();
  return (
    <header className="w-full h-16 border-b border-gray-600 shadow-md flex items-center justify-between px-5 sticky top-0 bg-white">
      <div className="flex items-center gap-3">
        {/* logo */}
        <Speedometer size={36} weight="fill" color="#2563eb" />
        {/* name */}
        <span className=" text-blue-600 font-semibold text-2xl">
          ADMIN DASHBOARD
        </span>
      </div>

      <div className="flex items-center gap-1 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
        <SignOut size={20} color="#374151" />
        {screenSize.width > 450 && (
          <span className=" text-gray-700 font-medium">Signout</span>
        )}
      </div>
    </header>
  );
};

export default Header;
