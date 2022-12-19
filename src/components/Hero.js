import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <div className={"hero__container container-xl mx-[15%] p-4 "}>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-self-center ">
          <h1 className="text-xl text-black font-medium text-left">Hey</h1>
          <h1 className="text-4xl text-black font-bold text-left">
            I am Shylesh S
          </h1>
          <h3 className="text-xl text-black font-medium text-left">
            From Bangalore, India
          </h3>
          <div className="h-2" />
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/s-shylesh"
            >
              <button className="text-2xl">
                <SiLinkedin />
              </button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto: shyleshstylo@gmail.com"
            >
              <button className="text-2xl">
                <FiMail />
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="bg-white rounded-full"
            style={{
              width: "160px",
              height: "160px",
            }}
          >
            <img
              className="rounded-full w-full h-full object-cover"
              src="../images/shylesh.jpg"
              alt="profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
