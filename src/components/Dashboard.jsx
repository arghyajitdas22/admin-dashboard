import React from "react";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import CreateUserModal from "./Modal/CreateUserModal";
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
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <CreateUserModal />
      <Header />
      <MainSection />
    </>
  );
};

export default Dashboard;
