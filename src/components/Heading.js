import React from "react";

const Heading = (props) => {
  return (
    <div className="bg-slate-800 mx-[30%] h-12 rounded-full">
      <h1 className="text-4xl text-white font-bold items-center">
        {props.children}
      </h1>
    </div>
  );
};

export default Heading;
