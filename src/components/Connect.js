import React from "react";
import { FiMail } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

const Connect = () => {
  return (
    <div className="bg-slate-800 mx-[30%] h-64 rounded-md mb-16 p-auto">
      <h1 className="text-4xl text-white font-bold m-2 items-center">
        Connect with me
      </h1>
      <div className="flex justify-center mt-6">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/s-shylesh"
          className="mr-[2rem]"
        >
          <button className="text-2xl">
            <SiLinkedin color="white" />
          </button>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="mailto: shyleshstylo@gmail.com"
          className="flex"
        >
          <button className="text-2xl">
            <FiMail color="white" />
          </button>
          <p className="text-white ml-3">Shyleshstylo@gmail.com</p>
        </a>
      </div>
      <div className="flex justify-center m-5 "></div>
      <p className="text-white text-xs px-[5%]">
        Full Stack Web Developer intern working in Ansr source India Private
        Limited, My responbilities are working on web Appplication using NextJS
        and ExpressJS, working on Front End changes,and creating REST API to
        access in the front end.
      </p>
    </div>
  );
};

export default Connect;
