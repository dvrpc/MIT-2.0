import React from "react";
import Logo from "./Logo";

const FocusAreas = () => {
  return (
    <div className="border-b-4 border-[#4fa3a8] mx-[100px] py-12 text-lg">
      <h3 className="text-2xl pb-6 mx-24 text-[#4fa3a8]">Focus Areas:</h3>
      <div className="grid grid-cols-2 mb-12">
        <div className="mx-24">
          <div className="flex">
            <h3 className="text-xl text-[#5a732d]">Sustain The Environment</h3>
            <Logo focus={"Environment"} />
          </div>
          Connections 2045 aims to SUSTAIN THE ENVIRONMENT by permanently
          protecting one million acres of open space. This will improve the
          region’s air and water quality, preserve historic and cultural
          resources, and increase access to healthy, locally-produced food.
        </div>
        <div className="mx-24">
          <div className="flex">
            <h3 className="text-xl text-[#006ba6]">
              Develop Livable Communities
            </h3>
            <Logo focus={"Communities"} />
          </div>
          Connections 2045 seeks to DEVELOP LIVABLE COMMUNITIES by focusing
          growth in 125 Centers across the region. More compact, mixed-use, and
          mixed-income development will shorten distances between destinations,
          and encourage alternative and active forms of transportation.
        </div>
      </div>
      <div className="grid grid-cols-2 mb-12">
        <div className="mx-24">
          <div className="flex">
            <h3 className="text-xl text-[#bd2556]">
              Integrated, Multimodal Transportation Network
            </h3>
            <Logo focus={"Economy"} />
          </div>
          Connections 2045 aims to improve mobility choices by CREATING AN
          INTEGRATED, MULTIMODAL TRANSPORTATION NETWORK that is well-maintained,
          improves accessibility and security, reduces congestion and
          auto-dependence, incorporates new services and technologies, and moves
          the region toward zero roadway deaths.
        </div>
        <div className="mx-24">
          <div className="flex">
            <h3 className="text-xl text-[#582267]">
              Advance Equity and Foster Diversity
            </h3>
            <Logo focus={"Regional Planning"} />
          </div>
          Connections 2045 aims to ADVANCE EQUITY AND FOSTER DIVERSITY by
          removing barriers, and protecting Civil Rights and the most vulnerable
          people. The Plan aims to reduce poverty, increase economic mobility,
          and support racially and socioeconomically integrated communities.
        </div>
      </div>
      <div className="w-1/2 mx-24">
        <div className="flex">
          <h3 className="text-xl text-[#b15817]">Expand the Economy</h3>
          <Logo focus={"Transportation"} />
        </div>
        Connections 2045 will work to further diversify and EXPAND THE ECONOMY,
        with more innovation, business formation, workforce skills, and global
        connections.
      </div>
    </div>
  );
};

export default FocusAreas;
