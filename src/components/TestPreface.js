import React, { useEffect, useRef, useState } from "react";
import ToolKit from "../images/toolkit.png";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import DownArrow from "../images/downarrow.svg";

const TestPreface = () => {
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
        isVisible && setIsVisible(false);
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [isVisible]);

  return (
    <div className="flex flex-col w-full" ref={info}>
      <div
        className="flex flex-col md:flex-row md:py-6 items-center bg-[#edf6f6] justify-center border-b-2 shadow-md h-[45vh]"
        style={{ display: isVisible ? "" : "none" }}
      >
        <img
          src={ToolKit}
          alt="toolkit-logo"
          className="h-[200px] md:h-[300px] w-auto"
        />
        <div className="text-lg md:w-1/2 text-sm md:text-base pb-2">
          <div className="md:ml-12">
            <Tabs>
              <TabList className="flex cursor-pointer border-b">
                <Tab>About</Tab>
                <Tab>Principles/Focuses</Tab>
                <Tab>Abstract</Tab>
              </TabList>
              <div className="mt-4">
                <TabPanel>
                  DVRPC has designed this Municipal Implementation Toolbox to
                  serve as a guide for municipalities to help implement the
                  goals of Connections 2045, the region’s Long-Range Plan. It
                  contains resources, case studies, and model/sample ordinances
                  for more than 60 tools municipalities can use to implement the
                  5 Core Principles of the Plan in their own jurisdictions.
                  Scroll down to find the tools that best fit your
                  municipality’s needs, either by using the interactive word
                  cloud, or by viewing the full toolkit.
                </TabPanel>
                <TabPanel>
                  <p>
                    Lorem ipsum dolor sit amet, an nominavi complectitur sea, ut
                    voluptua ullamcorper usu, vero lobortis duo cu. Dicat
                    repudiare an sea. In eam bonorum theophrastus. Ea libris
                    appetere vix, ea commodo sapientem splendide nec. Sed at
                    summo populo, purto timeam periculis mei in, eam id fugit
                    interesset. Has no veri utroque.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    Vel ne dicta adipiscing, doctus aliquando id mea, mel ne
                    homero consul. Malis facilis fierent mei et, et eloquentiam
                    theophrastus duo. Laudem efficiantur vim ex, vim te dicat
                    qualisque suscipiantur. Ad nobis albucius nec, id his tota
                    ridens discere. Laudem graecis ea sea. Alii menandri
                    liberavisse at mei, causae salutatus sadipscing vim te.
                    Illud oratio ius id, ne sit discere cotidieque efficiantur.
                  </p>
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

export default TestPreface;
