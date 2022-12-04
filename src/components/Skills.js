import React from "react";
import Logo from "./Logo";
import node from "../images/nodePNG.png";
import Next from "../images/Next.png";
import mongo from "../images/mongoDB.png";
import reactLogo from "../images/reactIcon.png";
import expresss from "../images/pngwing.com.png";
import Heading from "./Heading";

const Skills = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <Heading>My Skills</Heading>
      <div className="flex justify-center">
        <div className="flex flex-wrap mx-20 w-[40rem]  justify-evenly mt-8">
          {/* <Logo src={react} name="react" /> */}
          <Logo src={node} name="Node JS" />
          <Logo src={reactLogo} name="React JS" />
          <Logo src={Next} name="Next JS" />
          <Logo src={expresss} name="Express JS" />
          <Logo src={mongo} name="Mongo DB" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
