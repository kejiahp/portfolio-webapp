import Image from "next/image";
import React from "react";
import { SingleProject } from "../utils/types-util";

const SingleProject: React.FC<SingleProject> = ({
  name,
  techUsed,
  image,
  projectLink,
  githubLink,
}) => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="target-con cursor-pointer">
        <Image className="w-full" src={image} alt="Project Image" priority />
        <div className="target">
          <span className="text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200">
            {projectLink && (
              <a target={"_blank"} href={projectLink}>
                VIEW PROJECT
              </a>
            )}
          </span>
          <span className="text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200">
            {githubLink && (
              <a target={"_blank"} href={githubLink}>
                VIEW CODE
              </a>
            )}
          </span>
        </div>
      </div>
      <h1 className="font-bold text-xl text-custBlack-400 mt-2">{name}</h1>
      {techUsed.map((item, index) => (
        <span className="text-custBlack-300 text-sm mt-5" key={index}>
          {item}
        </span>
      ))}
      <div className="flex lg:hidden ">
        <p className="text-custBlack-400 uppercase w-fit font-bold leading-6 mt-4 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100">
          {projectLink && (
            <a target={"_blank"} href={projectLink}>
              VIEW PROJECT
            </a>
          )}
        </p>
        <p className="text-custBlack-400 uppercase w-fit font-bold leading-6 ml-6 mt-4 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100">
          {githubLink && (
            <a target={"_blank"} href={githubLink}>
              VIEW CODE
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
