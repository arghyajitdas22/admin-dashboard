import React from "react";

const RoleCard = ({
  role,
  permissions,
  acn,
  handlePermissionChange,
  index,
}) => {
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
        return "bg-gray-300";
    }
  };

  const handleChange = (permission, index) => {
    handlePermissionChange(permission, index);
  };

  return (
    <div className="p-3 rounded-md border border-black  w-full md:w-[320px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-2">
        <span className="text-sm font-medium">
          {acn} {acn > 1 ? "ACCOUNTS" : "ACCOUNT"}
        </span>
        {/* <div className="flex items-center -space-x-2">
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
        </div> */}
      </div>

      <p className=" text-blue-900 text-lg font-semibold uppercase">{role}</p>

      <p className="text-green-500 font-semibold uppercase pt-2">
        Permissions:
      </p>
      <form className="flex flex-col gap-2">
        <div
          className={`text-sm capitalize font-medium p-2 border border-gray-300 rounded-sm bg-blue-300 text-white ${getPermissionColor(
            permissions.includes("create") ? "create" : "none"
          )} flex items-center justify-between`}
        >
          <label htmlFor="permission-1" className="w-full">
            create
          </label>
          <input
            type="checkbox"
            id="permission-1"
            checked={permissions.includes("create")}
            onChange={() => handleChange("create", index)}
            className="w-6 h-6 rounded-sm focus:outline-none focus:ring-0 hover:cursor-pointer"
          />
        </div>

        <div
          className={`text-sm capitalize font-medium p-2 border border-gray-300 rounded-sm bg-blue-300 text-white ${getPermissionColor(
            permissions.includes("read") ? "read" : "none"
          )} flex items-center justify-between`}
        >
          <label htmlFor="permission-2" className="w-full">
            read
          </label>
          <input
            type="checkbox"
            id="permission-2"
            checked={permissions.includes("read")}
            onChange={() => handleChange("read", index)}
            className="w-6 h-6 rounded-sm focus:outline-none focus:ring-0 hover:cursor-pointer"
          />
        </div>

        <div
          className={`text-sm capitalize font-medium p-2 border border-gray-300 rounded-sm bg-blue-300 text-white ${getPermissionColor(
            permissions.includes("update") ? "update" : "none"
          )} flex items-center justify-between`}
        >
          <label htmlFor="permission-3" className="w-full">
            update
          </label>
          <input
            type="checkbox"
            id="permission-3"
            checked={permissions.includes("update")}
            onChange={() => handleChange("update", index)}
            className="w-6 h-6 rounded-sm focus:outline-none focus:ring-0 hover:cursor-pointer"
          />
        </div>

        <div
          className={`text-sm capitalize font-medium p-2 border border-gray-300 rounded-sm bg-blue-300 text-white ${getPermissionColor(
            permissions.includes("delete") ? "delete" : "none"
          )} flex items-center justify-between`}
        >
          <label htmlFor="permission-4" className="w-full">
            delete
          </label>
          <input
            type="checkbox"
            id="permission-4"
            checked={permissions.includes("delete")}
            onChange={() => handleChange("delete", index)}
            className="w-6 h-6 rounded-sm focus:outline-none focus:ring-0 hover:cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default RoleCard;
