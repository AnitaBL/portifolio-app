import { logDOM } from "@testing-library/react";
import React from "react";
import klar_logo_invert from "../assets/klar_logo_invert.png"

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen bg-[#000000] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <img
              className="w-50"
              src={klar_logo_invert}
              alt="Sanctus Omegas Broderskab"
            />
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-8xl justify-center font-lincoln font-bold inline border-b-4 border-gray-700">
              Verv
            </p>
          </div>
          <div className="sm:text-right pb-8 pl-4">
          </div>
        </div>
      </div>
    </div>


  );
};

export default Projects;