import React from "react";
import ToolKit from "../images/toolkit.png";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import UpArrow from "../images/uparrow.svg";
import DownArrow from "../images/downarrow.svg";

const Preface = () => {
  return (
    <div className="flex flex-col w-full absolute z-10">
      <div className="flex px-6 py-6 items-center bg-[#edf6f6] justify-center border-b-2 shadow-md">
        <img src={ToolKit} alt="toolkit-logo" className="h-[350px]" />
        <div className="text-lg mt-4 w-1/2">
          <div className="ml-12">
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
                  <p>
                    Et unum dicit menandri mei. Nec elitr suscipit disputationi
                    id. Est adhuc error nostro ne, in adolescens complectitur
                    mel, quem oblique feugiat nec at. Eu omittam constituto qui.
                    Ad eam habeo quando, per dolorem suscipiantur te. Ignota
                    moderatius eloquentiam et mei, diam luptatum accommodare an
                    quo.
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
                  <p>
                    Sit invidunt recusabo ea, quis noluisse concludaturque vim
                    in, dicam oratio ius et. Cum ne iudico abhorreant, simul
                    insolens definitionem mei an. Eu eros omnium temporibus pro,
                    primis atomorum salutatus ex sed. Pri justo nostro salutatus
                    ut, probo utinam legere cu mel. Dico veniam eu qui, ne
                    nostrum rationibus pro.
                  </p>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="flex text-white w-full">
        <img
          src={UpArrow}
          alt="arrow"
          className="h-[30px] p-1 ml-auto mr-auto cursor-pointer ball"
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
          className="h-[30px] p-1 ml-auto mr-auto cursor-pointer ball hidden"
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
