import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


export const HomePage = () => {

  return (
    <div id="home" className="w-full h-screen bg-[#e9ecef]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-black">
          Mitt navn er </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
          Anita Bueno Lindmoen
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#848794]">
          Jeg er en elsyser.
        </h2>
        <p className="text-[#848794] py-4 max-w-[700px]">
          I 2021 startet jeg mitt studieløp som student ved NTNU Trondheim. Studiet Elektronisk systemdesign og innovasjon har gitt meg mange muligheter til å bli kjent med ulike fagfelt og fagmiljøer.
        </p>
        <div>
        <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white"
          >
            Se verv
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
