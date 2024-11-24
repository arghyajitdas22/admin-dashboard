import React from "react";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import CreateUserModal from "./Modal/CreateUserModal";

const Dashboard = () => {
  return (
    <>
      <CreateUserModal />
      <Header />
      <MainSection />
    </>
  );
};

export default Dashboard;
