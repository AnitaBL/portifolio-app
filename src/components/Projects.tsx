import React from "react";
import klar_logo_invert from "../assets/klar_logo_invert.png"
import vandrebar from "../assets/vandrebar.jpg"

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
            <p className="text-2xl justify-center">
              Frivillig og verv er ett fast innslag i min studie hverdag. Selv har jeg deltatt...
            </p>
            <img
              className="w-10"
              src={vandrebar}
              alt="Kielder Vandrebar"
            />
          </div>
        </div>
      </div>
    </div>


  );
};

export default Projects;
