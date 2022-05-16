import React from "react";
import ToolKit from "../images/toolkit.png";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Close from "../images/close.svg";
import DownArrow from "../images/downarrow.svg";

const Preface = () => {
  return (
    <div className="flex flex-col w-full absolute z-10 -mt-[1%] md:mt-0">
      <div className="flex flex-col md:flex-row px-6 md:py-6 items-center bg-[#edf6f6] justify-center border-b-2 shadow-md">
        <img
          src={ToolKit}
          alt="toolkit-logo"
          className="h-[200px] md:h-[300px] w-auto"
        />
        <div className="text-lg mt-4 md:w-1/2 text-sm md:text-base pb-2">
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
      <div className="flex text-white w-full">
        <img
          src={Close}
          alt="arrow"
          className="h-[30px] mt-1 p-1.5 ml-auto mr-auto cursor-pointer rounded-full bg-[#4fa3a8]"
          onClick={e => {
            const parentSibling = e.target.parentNode.previousSibling;
            parentSibling.classList.toggle("hidden");
            e.target.classList.toggle("hidden");
            e.target.nextSibling.classList.toggle("hidden");
          }}
        />
        <img
          src={DownArrow}
          alt="arrow"
          className="h-[30px] mt-1 p-2 ml-auto mr-auto cursor-pointer ball hidden rounded-full bg-[#4fa3a8]"
          onClick={e => {
            const parentSibling = e.target.parentNode.previousSibling;
            parentSibling.classList.toggle("hidden");
            e.target.classList.toggle("hidden");
            e.target.previousSibling.classList.toggle("hidden");
          }}
        />
      </div>
    </div>
  );
};

export default Preface;
