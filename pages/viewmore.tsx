import React from "react";
import MoreProjects from "../src/components/MoreProjects";
import NavBar from "../src/components/NavBar";
import RequestCV from "../src/components/RequestCV";
import { ToastContainer } from "react-toastify";

const viewmore = () => {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <RequestCV />
      <MoreProjects />
      <NavBar />
    </>
  );
};

export default viewmore;
