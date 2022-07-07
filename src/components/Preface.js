import React, { useContext, useEffect } from "react";
import ToolKit from "../images/toolkit.png";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Funding from "../images/funding.png";
import Municipal from "../images/municipal.png";
import Connections from "../images/connections.png";
import Abstract from "../images/abstract.png";
import { flushSync } from "react-dom";
import Icon from "./Icon";
import { focusAreas, principles } from "../utils/icons";
import AppContext from "../utils/AppContext";

const Preface = () => {
  const { info, isVisible, setIsVisible } = useContext(AppContext);

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = Math.floor(
        info.current.getBoundingClientRect().height
      );
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll >= heightToHideFrom) {
        if (isVisible) {
          flushSync(() => setIsVisible(false));
          window.scrollTo({
            top: document.body.scrollTop.toString(),
            behavior: "auto",
          });
        }
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [isVisible, setIsVisible, info]);

  return (
    <div
      className="border-b-2 bg-[#edf6f6] shadow-md py-4"
      ref={info}
      style={{ display: isVisible ? "" : "none" }}
    >
      <div className="flex flex-col md:flex-row md:w-4/5 md:mx-auto p-6 pt-0 md:p-0">
        <div className="md:w-[45%] flex justify-center py-4 md:py-0">
          <img
            src={ToolKit}
            alt="toolkit-logo"
            className="md:max-w-[75%] max-w-[85%] h-auto md:mx-0 self-center"
          />
        </div>
        <div className="w-full md:pl-4 md:p-6 text-lg text-sm md:text-base">
          <Tabs>
            <TabList className="flex cursor-pointer border-b">
              <Tab>About</Tab>
              <Tab>Principles</Tab>
              <Tab>Focus Areas</Tab>
            </TabList>
            <div className="mt-4">
              <TabPanel>
                <span className="preface-bold">
                  The Delaware Valley Regional Planning Commission (DVRPC)
                </span>{" "}
                is responsible for long-range planning at the regional scale,
                but implementation of the Plan—and much of our collective
                future—is based on how the region’s 350 municipalities use their
                home-rule authority to influence land use, provide public
                services, protect natural and historic resources, and,
                ultimately, create the places we call home. DVRPC has designed
                this Municipal Implementation Toolbox to serve as a guide for
                municipalities to help implement the goals of{" "}
                <i>Connections 2050</i>, the region’s Long-Range Plan. It
                contains resources, case studies, ordinances, and indicators for
                nearly 80 tools.{" "}
                <span className="preface-bold">
                  Scroll down to find the tools that best fit your
                  municipality’s needs by using the interactive filters. Lear
                  more about Principle and Focus Area filters.
                </span>
                <div className="grid grid-cols-4 mt-6 text-center text-[#4fa3a8]">
                  <a
                    className="h-min flex flex-col justify-center"
                    href="https://www.dvrpc.org/Funding/"
                  >
                    <img
                      src={Funding}
                      alt="Funding Opportunities"
                      className="h-[70px] object-contain"
                    />
                    <div>Funding Opportunities</div>
                  </a>
                  <a
                    className="h-min flex flex-col justify-center"
                    href="https://www.dvrpc.org/municipaloutreach"
                  >
                    <img
                      src={Municipal}
                      alt="Building Municipal Capacity"
                      className="h-[70px] object-contain"
                    />
                    <div>Building Municipal Capacity</div>
                  </a>
                  <a
                    className="h-min flex flex-col justify-center"
                    href="https://www.dvrpc.org/Connections2045/"
                  >
                    <img
                      src={Connections}
                      alt="Connections 2050 Plan"
                      className="h-[70px] object-contain"
                    />
                    <div className="italic">Connections 2050 Plan</div>
                  </a>
                  <a className="h-min flex flex-col justify-center" href="/">
                    <img
                      src={Abstract}
                      alt="Abstract"
                      className="h-[70px] object-contain"
                    />
                    <div>Abstract</div>
                  </a>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex">
                    <Icon altText="Equity" image={principles["Equity"]} />
                    <div className="w-full ml-2">
                      <span className="preface-bold">EQUITY:</span> commitment
                      to public outreach and participatory planning to hear more
                      voices in the development of communities that we live in,
                      and to increase everyone’s access to the transportation
                      infrastructure needed for all of our daily activities
                    </div>
                  </div>
                  <div className="flex">
                    <Icon
                      altText="Sustainability"
                      image={principles["Sustainability"]}
                    />
                    <div className="w-full ml-2">
                      <span className="preface-bold">SUSTAINABILITY:</span>{" "}
                      reduction of emissions to a net zero level by 2050 through
                      renewable energy, energy management, the electrification
                      of buildings and vehicles, and improving transit and
                      non-motorized travel options
                    </div>
                  </div>
                  <div className="md:mt-4 flex">
                    <Icon
                      altText="Resiliency"
                      image={principles["Resiliency"]}
                    />
                    <div className="w-full ml-2">
                      <span className="preface-bold">RESILIENCY:</span>{" "}
                      hardening our communities and their infrastructure systems
                      or moving them out of harm’s way in the face of
                      anticipated flooding; ecosystem degradation; fishing and
                      farming disruptions; and human health risks.
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex">
                    <Icon
                      altText="Communities"
                      image={focusAreas["Communities"]}
                    />
                    <div className="w-full ml-2">
                      <span className="preface-bold">COMMUNITIES:</span>{" "}
                      inclusive, healthy, and walkable communities that offer a
                      better quality of life for all residents, using the more
                      than 135 Plan Centers as a framework for infrastructure
                      investments
                    </div>
                  </div>
                  <div className="flex">
                    <Icon
                      altText="Transportation"
                      image={focusAreas["Transportation"]}
                    />
                    <div className="w-full ml-2">
                      <span className="preface-bold">
                        MULTIMODAL TRANSPORTATION:
                      </span>{" "}
                      safe, healthy, and environmentally friendly transportation
                      accessible to a wide range of users for a variety of trip
                      purposes
                    </div>
                  </div>
                  <div className="md:mt-4 flex">
                    <Icon altText="Economy" image={focusAreas["Economy"]} />
                    <div className="w-full ml-2">
                      <span className="preface-bold">ECONOMY:</span>{" "}
                      accelerating the transition to a more environmentally
                      friendly economy, enhancing workforce skills, and
                      supporting inclusive growth.
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    <Icon
                      altText="Environment"
                      image={focusAreas["Environment"]}
                    />
                    <div className="w-full ml-2">
                      <span className="preface-bold">ENVIRONMENT:</span>{" "}
                      protection and enhancement of natural amenities, air and
                      water quality, open space, and farmland
                    </div>
                  </div>
                  <div className="mt-4 flex">
                    <Icon
                      altText="Regional Planning"
                      image={focusAreas["Regional Planning"]}
                    />
                    <div className="w-full ml-2">
                      <span className="preface-bold">REGIONAL PLANNING:</span>{" "}
                      local decisions with a regional impact that require or
                      would benefit from coordination across municipal
                      boundaries.
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Preface;
