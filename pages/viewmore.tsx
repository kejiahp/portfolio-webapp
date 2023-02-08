import React from "react";
import MoreProjects from "../src/components/MoreProjects";
import NavBar from "../src/components/NavBar";
import RequestCV from "../src/components/RequestCV";

const viewmore = () => {
  return (
    <>
      <NavBar />
      <RequestCV />
      <MoreProjects />
      <NavBar />
    </>
  );
};

export default viewmore;
