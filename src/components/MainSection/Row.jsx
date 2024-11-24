import React from "react";
import dp from "../../assets/dp.jpg";
import useWindowSize from "../../hooks/useWindowSize";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";

const Row = ({ name, role, status }) => {
  const screen = useWindowSize();
  return (
    <>
      <p className="member">
        <img
          src={dp}
          alt={`${name}-dp`}
          width={screen.width > 768 ? 24 : 18}
          height={screen.width > 768 ? 24 : 18}
          className=" rounded-full"
        />

        <span>{name}</span>
      </p>
      <p className="role">{role}</p>
      <span
        className={`${
          status.toLowerCase() === "active" ? "text-green-500" : "text-gray-500"
        } status`}
      >
        {status}
      </span>
      <div className="actions">
        <TrashSimple
          size={20}
          weight="fill"
          className=" text-red-500 hover:cursor-pointer"
        />
        <PencilSimple
          size={20}
          weight="fill"
          className=" text-gray-500 hover:cursor-pointer"
        />
      </div>
    </>
  );
};

export default Row;
