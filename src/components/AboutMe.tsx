import React from "react";
// import klar_logo_invert from "../assets/klar_logo_invert.png"
import phaestumUte from "../assets/phaestumGløs.JPG"
import styrephaest from "../assets/styrephaest.JPG"
import AnitaRory from "../assets/AnitaRory.JPG"


const AboutMe = () => {
  return (
    <div id="about" className="w-full (h-screen)*10 bg-[#ced4da] text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              Om meg
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Mitt navn er Anita og jeg liker mange forskjellige ting.</p>
          </div>
          <div>
            <p>Jeg liker å kode og jeg liker å være meg selv</p>
          </div>
          <div className="sm:text-right">
            <p>Jeg er et aktivt medlem i Sct. Omegas Broderskab</p>
          </div>
          <img
              className="w-50"
              src={styrephaest}
              alt="styrephaestVandrebar"
            />
            <div>
            <img
              className="w-50"
              src={phaestumUte}
              alt="phaestum"
            />
            </div>
            <div>
              <p> Har stått masse i vandrebar</p>
            </div>
            <div>
              <p> Har vært mye på phaestum</p>
            </div>
            <div> 
            <img
              className="w-50"
              src={AnitaRory}
              alt="AnitaRoryPhaestum"
            />
            </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
