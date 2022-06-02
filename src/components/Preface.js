import React, { useEffect, useRef, useState } from "react";
import ToolKit from "../images/toolkit.png";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import DownArrow from "../images/downarrow.svg";
import Funding from "../images/funding.png";
import Municipal from "../images/municipal.png";
import Connections from "../images/connections.png";
import Abstract from "../images/abstract.png";
import { flushSync } from "react-dom";

const Preface = () => {
  const info = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const listenToScroll = () => {
      if (!isVisible) return;
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
  }, [isVisible]);

  return (
    <div className="flex flex-col w-full" ref={info}>
      <div
        className="flex flex-col md:flex-row md:py-6 items-center bg-[#edf6f6] justify-center border-b-2 shadow-md min-h-[45vh]"
        style={{ display: isVisible ? "" : "none" }}
      >
        <img
          src={ToolKit}
          alt="toolkit-logo"
          className="h-[200px] md:h-[300px] w-auto"
        />
        <div className="text-lg md:w-3/5 text-sm md:text-base pb-2">
          <div className="md:ml-12">
            <Tabs>
              <TabList className="flex cursor-pointer border-b">
                <Tab>About</Tab>
                <Tab>Principles & Focus Areas</Tab>
              </TabList>
              <div className="mt-4">
                <TabPanel>
                  The Delaware Valley Regional Planning Commission (DVRPC) is
                  responsible for long-range planning at the regional scale, but
                  implementation of the Plan—and much of our collective
                  future—is based on how the region’s 350 municipalities use
                  their home-rule authority to influence land use, provide
                  public services, protect natural and historic resources, and,
                  ultimately, create the places we call home. DVRPC has designed
                  this Municipal Implementation Toolbox to serve as a guide for
                  municipalities to help implement the goals of Connections
                  2050, the region’s Long-Range Plan. It contains resources,
                  case studies, ordinances, and indicators for nearly 80 tools.
                  Scroll down to find the tools that best fit your
                  municipality’s needs by using the interactive filters.{" "}
                  <u>Learn more about Principle and Focus Area filters.</u>
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
                      <div>Connections 2050 Plan</div>
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
                  <div className="flex space-x-4">
                    <ul className="space-y-2">
                      <strong>Principles</strong>
                      <li>
                        EQUITY: commitment to public outreach and participatory
                        planning to hear more voices in the development of
                        communities that we live in, and to increase everyone’s
                        access to the transportation infrastructure needed for
                        all of our daily activities
                      </li>
                      <li>
                        SUSTAINABILITY: reduction of emissions to a net zero
                        level by 2050 through renewable energy, energy
                        management, the electrification of buildings and
                        vehicles, and improving transit and non-motorized travel
                        options
                      </li>
                      <li>
                        RESILIENCY: hardening our communities and their
                        infrastructure systems or moving them out of harm’s way
                        in the face of anticipated flooding; ecosystem
                        degradation; fishing and farming disruptions; and human
                        health risks.
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <strong>Focus Areas</strong>
                      <li>
                        <span className="text-[#7b9d3e]">ENVIRONMENT:</span>{" "}
                        protection and enhancement of natural amenities, air and
                        water quality, open space, and farmland
                      </li>
                      <li>
                        <span className="text-[#006ba6]">COMMUNITIES:</span>{" "}
                        inclusive, healthy, and walkable communities that offer
                        a better quality of life for all residents, using the
                        more than 135 Plan Centers as a framework for
                        infrastructure investments
                      </li>
                      <li>
                        <span className="text-[#de6e1d]">
                          MULTIMODAL TRANSPORTATION:
                        </span>{" "}
                        safe, healthy, and environmentally friendly
                        transportation accessible to a wide range of users for a
                        variety of trip purposes
                      </li>
                      <li>
                        <span className="text-[#bd2556]">ECONOMY:</span>{" "}
                        accelerating the transition to a more environmentally
                        friendly economy, enhancing workforce skills, and
                        supporting inclusive growth.
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="flex items-center absolute w-full">
        <img
          src={DownArrow}
          alt="arrow"
          className="h-[30px] mt-1 p-2 ml-auto mr-auto cursor-pointer ball rounded-full bg-[#4fa3a8]"
          onClick={e => setIsVisible(!isVisible)}
          style={{ display: !isVisible ? "" : "none" }}
        />
      </div>
    </div>
  );
};

export default Preface;
