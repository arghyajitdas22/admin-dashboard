import React from "react";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import CreateUserModal from "./Modal/CreateUserModal";
import EditUserModal from "./Modal/EditUserModal";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <CreateUserModal />
      <EditUserModal />
      <Header />
      <MainSection />
    </>
  );
};

export default Dashboard;
