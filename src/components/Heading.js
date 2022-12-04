import React from "react";

const Heading = (props) => {
  return (
    <div className="bg-slate-800 mx-[30%] h-12 rounded-xl flex justify-center items-center">
      <h2 className="text-2xl text-white font-bold items-center">
        {props.children}
      </h2>
    </div>
  );
};

export default Heading;
