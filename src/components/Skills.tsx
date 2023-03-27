import React from "react";
import kvinnelig_leder from "../assets/kvinnelig_leder.png"
import studass_ikon from "../assets/studass_ikon.png"
import tools from "../assets/tools_ikon.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full sm:h-screen bg-[#495057]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-grey-500 text-[#edede9]">
            Nøkkelerfaringer
          </p>
          <p className="py-4 text-[#edede9]">Dette er noen utvalgte erfaringer jeg har opparbeidet meg gjennom årene. </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-center py-8">
          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img
              // className="w-10 mx-auto"
              // src={Developing}
              // alt="Developing icon"
              className="w-10 mx-auto"
              src={kvinnelig_leder}
              alt="kvinnelig_leder_ikon"
            />
            <p className="my-4 font-semibold">Leder for Omega Kielderstyret</p>
            <p className="my-4">
              Som andreklassing har jeg ved siden av studiet tatt på meg et frivillig sosialt verv i linjeforeningen Sct. Omegas Broderskab. 
              Jeg påtok meg rollen som kommiteleder for kommiteen Kielderstyret som har ansvar for drift av studentbaren Kielderen på Moholt, og drifting av Omegas internbar.
              i tillegg til dette er jeg også et aktivt medlem, og deltar på flere av Omegas forsamlinger for å bidre til forbedring av studenthverdagen for Omegas medlemmer!
            </p>
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img               
            className="w-10 mx-auto"
              src={tools}
              alt="Verktøy"
              />
            <p className="my-4 font-semibold">Design</p>
            <p className="my-4">
              I 2021 bestod jeg fagprøven i industriell produksjonsteknikk hos Plasman AS Raufoss. Jeg har flere år erfaring i produksjonsanlegg og har jobbet i flere avdelinger som produksjonstekniker.
              Fagbrevet mitt tok jeg i et automatisk lakkanlegg hvor jeg hadde ansvar for å sørge for god og effektiv drift av syv lakkeringsroboter, transportbånd og klargjøring av lakk.
            </p>
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img               
              className="w-10 mx-auto"
              src={studass_ikon}
              alt="Læringsassistent i C++" 
              />
            <p className="my-4 font-semibold">Læringsassistent i C++</p>
            <p className="my-4">
              Våren 2023 har jeg vært læringsassistent i faget Prosedyre- og objektorientert programmering, som for mange kjennes igjen som programmeringsspårket C++. 
              Å være læringsassistent har vært en kilde til inspirasjon og motivasjon og jeg har tatt på meg ulike utfordringer for å utvikle mine evner i faget. C++ er et språk jeg synes er gøy å utforske, og noe jeg kommer til å oppsøke mer kunnskap om!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

//Programmeringsspråk
//Andre skills (Presentation) (kan klikke seg inn på bilder av foredrag og arbeid jeg har gjort)
//Design

//Arrangering
