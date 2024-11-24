import React from "react";
import dp from "../../assets/dp.jpg";

const RoleCard = ({ role, permissions, acn }) => {
  const getPermissionColor = (permission) => {
    switch (permission) {
      case "create":
        return "bg-blue-300";
      case "read":
        return "bg-green-300";
      case "update":
        return "bg-yellow-300";
      case "delete":
        return "bg-red-300";
      default:
        return "bg-blue-300";
    }
  };
  return (
    <div className="p-3 rounded-md border border-black hover:shadow-lg transition-all duration-300 ease-in-out w-full md:w-[320px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-2">
        <span className="text-sm font-medium">
          {acn} {acn > 1 ? "ACCOUNTS" : "ACCOUNT"}
        </span>
        <div className="flex items-center -space-x-2">
          <img
            src={dp}
            alt="member-dp"
            width={20}
            height={20}
            className=" rounded-full"
          />
          <img
            src={dp}
            alt="member-dp"
            width={20}
            height={20}
            className=" rounded-full"
          />
          <img
            src={dp}
            alt="member-dp"
            width={20}
            height={20}
            className=" rounded-full"
          />
          <img
            src={dp}
            alt="member-dp"
            width={20}
            height={20}
            className=" rounded-full"
          />
        </div>
      </div>

      <p className=" text-blue-900 text-lg font-semibold uppercase">{role}</p>

      <p className="text-green-500 font-semibold uppercase pt-2">
        Permissions:
      </p>
      <ul className="list-none flex flex-col gap-2">
        {permissions.map((permission, index) => (
          <li
            key={index}
            className={`text-sm capitalize font-medium p-2 border border-gray-300 rounded-sm bg-blue-300 text-white ${getPermissionColor(
              permission
            )}`}
          >
            {permission}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleCard;
