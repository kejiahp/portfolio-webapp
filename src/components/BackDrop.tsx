import React from "react";
import { PacmanLoader } from "react-spinners";
import { Spinner } from "../utils/types-util";

const BackDrop: React.FC<Spinner> = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div className="w-screen h-screen fixed bg-custBlack-200 z-50 flex justify-center flex-col items-center bg-opacity-60 top-0 left-0">
          <PacmanLoader color="#36d7b7" size={50} loading={loading} />
        </div>
      ) : null}
    </>
  );
};

export default BackDrop;
