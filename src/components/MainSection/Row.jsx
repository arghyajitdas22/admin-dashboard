import React from "react";
import dp from "../../assets/dp.jpg";
import useWindowSize from "../../hooks/useWindowSize";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";
import useEditUserModal from "../../hooks/useEditUserModal";

const Row = ({ name, role, status, id }) => {
  const screen = useWindowSize();
  const deleteUser = useUser((state) => state.deleteUser);
  const setUser = useEditUserModal((state) => state.setUser);
  const open = useEditUserModal((state) => state.open);

  const handleDelete = () => {
    if (role.toLowerCase() === "super admin") {
      toast.error("Cannot delete super admin");
    } else {
      deleteUser(id);
      toast.success("User deleted successfully");
    }
  };

  const handleEdit = () => {
    if (role.toLowerCase() === "super admin") {
      toast.error("Cannot edit super admin");
    } else {
      const user = { name, role, status, id };
      setUser(user);
      open();
    }
  };
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
          onClick={handleDelete}
        />
        <PencilSimple
          size={20}
          weight="fill"
          className=" text-gray-500 hover:cursor-pointer"
          onClick={handleEdit}
        />
      </div>
    </>
  );
};

export default Row;
