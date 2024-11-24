import React, { useEffect, useState } from "react";
import RoleCard from "./RoleCard";
import { UserCirclePlus } from "@phosphor-icons/react";
import FilterBtn from "./FilterBtn";
import Row from "./Row";
import useCreateUserModal from "../../hooks/useCreateUserModal";
import useUser from "../../hooks/useUser";

const MainSection = () => {
  const users = useUser((state) => state.users);
  const [roleArray, setRoleArray] = useState([
    {
      role: "Super Admin",
      permissions: ["create", "read", "update", "delete"],
      acn: "0",
    },
    {
      role: "Admin",
      permissions: ["create", "read", "update"],
      acn: "0",
    },
    {
      role: "Member",
      permissions: ["create", "read"],
      acn: "0",
    },
  ]);

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [activeFilter, setActiveFilter] = useState("All");
  const handleFilter = (role) => {
    setActiveFilter(role);
  };
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter((user) => user.role === activeFilter.toLocaleLowerCase())
      );
    }
  }, [activeFilter, users]);

  const open = useCreateUserModal((state) => state.open);

  useEffect(() => {
    let supAdmins = 0,
      admins = 0,
      members = 0;
    users.forEach((user) => {
      if (user.role.toLowerCase() === "super admin") supAdmins++;
      if (user.role.toLowerCase() === "admin") admins++;
      if (user.role.toLowerCase() === "member") members++;
    });
    const updatedRoleArray = roleArray.map((role) => {
      if (role.role === "Super Admin") {
        return { ...role, acn: supAdmins };
      }
      if (role.role === "Admin") {
        return { ...role, acn: admins };
      }
      if (role.role === "Member") {
        return { ...role, acn: members };
      }
      return role; // Default case (though it might not be necessary here)
    });

    setRoleArray(updatedRoleArray);
  }, [users, roleArray]);

  return (
    <main className="w-full h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden py-5 px-2 md:px-3 lg:px-5 md:p-8 lg:p-10 flex flex-col gap-5 lg:gap-7 overflow-auto">
      <h1 className="font-bold text-3xl text-blue-950">PROJECT-X</h1>
      {/* section-1: role section */}
      <section className="px-4 py-5 border border-black rounded-md bg-white">
        <div className="flex items-start justify-between">
          <div className="w-fit">
            <h2 className="font-semibold text-lg text-blue-900">
              Roles Available
            </h2>
            <h3 className=" text-sm">
              The Roles assigned provides different levels of access in the
              project
            </h3>
          </div>

          {/* <button className="flex items-center gap-2 text-blue-950 hover:scale-105 transition-all duration-300 ease-in-out">
            <Plus size={24} weight="fill" className="rounded-full" />
            <span className="font-semibold whitespace-nowrap">Add Role</span>
          </button> */}
        </div>
        <section className="flex flex-col md:flex-row gap-4 flex-wrap mt-4">
          {/* role card */}
          {roleArray.map((role, index) => (
            <RoleCard
              key={index}
              role={role.role}
              permissions={role.permissions}
              acn={role.acn}
            />
          ))}
        </section>
      </section>
      {/* section-2: user info table */}
      <section className="px-2 md:px-4 py-5 border border-black rounded-md bg-white">
        <div className="flex items-start justify-between">
          <div className="w-fit">
            <h2 className="font-semibold text-lg text-blue-900">
              Project Members
            </h2>
            <h3 className=" text-sm">
              Gives a comprehensive overview of users's details and roles
            </h3>
          </div>

          <button
            onClick={open}
            className="flex items-center gap-2 text-blue-950 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <UserCirclePlus size={24} weight="fill" className="rounded-full" />
            <span className="font-semibold whitespace-nowrap">Add User</span>
          </button>
        </div>

        <div className="flex items-center pb-3 pt-7 border-b border-gray-400 gap-4 md:gap-6 xl:gap-8">
          <FilterBtn
            role="All"
            number={users.length}
            active={"All" === activeFilter}
            handleClick={() => handleFilter("All")}
          />
          {roleArray.map((role, index) => (
            <FilterBtn
              key={index}
              role={role.role}
              number={role.acn}
              active={role.role === activeFilter}
              handleClick={() => handleFilter(role.role)}
            />
          ))}
        </div>

        <section className="grid grid-cols-9 w-full my-4 px-2">
          <p className="member">Account</p>
          <p className="role">Role</p>
          <p className="status">Status</p>
          <p className="actions">Actions</p>
          {filteredUsers.map((user) => (
            <Row
              key={user.id}
              id={user.id}
              name={user.name}
              role={user.role}
              status={user.status}
            />
          ))}
        </section>
      </section>
    </main>
  );
};

export default MainSection;
