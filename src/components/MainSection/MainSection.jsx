import React, { useState } from "react";
import RoleCard from "./RoleCard";
import { Plus, UserCirclePlus } from "@phosphor-icons/react";
import FilterBtn from "./FilterBtn";
import Row from "./Row";
import UserArray from "../../assets/users.json";
import useCreateUserModal from "../../hooks/useCreateUserModal";

const MainSection = () => {
  const roleArray = [
    {
      role: "Super Admin",
      permissions: ["create", "read", "update", "delete"],
      acn: "1",
    },
    {
      role: "Admin",
      permissions: ["create", "read", "update"],
      acn: "3",
    },
    {
      role: "Member",
      permissions: ["create", "read"],
      acn: "5",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const handleFilter = (role) => {
    setActiveFilter(role);
  };

  const open = useCreateUserModal((state) => state.open);

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

          <button className="flex items-center gap-2 text-blue-950 hover:scale-105 transition-all duration-300 ease-in-out">
            <Plus size={24} weight="fill" className="rounded-full" />
            <span className="font-semibold whitespace-nowrap">Add Role</span>
          </button>
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
            number="12"
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
          {UserArray.map((user, index) => (
            <Row
              key={index}
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
