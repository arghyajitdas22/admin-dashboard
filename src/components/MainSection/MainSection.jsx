import React from "react";
import RoleCard from "./RoleCard";

const MainSection = () => {
  return (
    <main className="w-full min-h-[calc(100vh-64px)] max-h-fit p-5 md:p-8 lg:p-10 flex flex-col gap-5 lg:gap-7">
      <h1 className="font-bold text-3xl text-blue-950">PROJECT-X</h1>
      {/* section-1: role section */}
      <section className="px-4 py-5 border border-black rounded-md bg-white">
        <h2 className="font-semibold text-lg text-blue-900">Roles Available</h2>
        <h3 className=" text-sm">
          The Roles assigned provides different levels of access in the project
        </h3>
        <section className="flex flex-col md:flex-row gap-4 flex-wrap mt-4">
          {/* role card */}
          <RoleCard
            role="Super Admin"
            permissions={["create", "read", "update", "delete"]}
            acn="3"
          />
          <RoleCard
            role="Admin"
            permissions={["create", "read", "update", "delete"]}
            acn="3"
          />
          <RoleCard
            role="Admin"
            permissions={["create", "read", "update", "delete"]}
            acn="1"
          />
        </section>
      </section>
      {/* section-2: user info table */}
      <section></section>
    </main>
  );
};

export default MainSection;
