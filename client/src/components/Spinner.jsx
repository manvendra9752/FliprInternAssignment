import React from "react";
import { PacmanLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="w-full h-lvh flex justify-center items-center text-3xl">
      <PacmanLoader color="blue" />
    </div>
  );
};

export default Spinner;
