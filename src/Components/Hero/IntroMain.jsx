import { useState } from "react";
import AboutComponent from "./aboutComponent";
import ExperienceComponent from "./ExperienceComponent";
import Recommended from "./Recommended";

const IntroMain = () => {
  const [tab, setTab] = useState("about");

  return (
    <div className="w-full">
      <div className="bg-black introHeaderShadow flex text-center items-center gap-3 p-1 justify-between rounded-[23px] w-full h-[62px]">
        <div
          className={`${
            tab === "about" &&
            "bg-[#28292F] text-[#FFFFFF] shadow-2xl shadow-black"
          }  py-3 rounded-2xl flex-1 font-sans text-[18px] font-medium cursor-pointer text-[#A3ADB2] transition duration-300`}
          onClick={() => setTab("about")}
        >
          About Me
        </div>
        <div
          className={`${
            tab === "experience" &&
            "bg-[#28292F] text-[#FFFFFF] shadow-2xl shadow-black"
          }  py-3 rounded-2xl flex-1 font-sans text-[18px] font-medium cursor-pointer text-[#A3ADB2] transition duration-300`}
          onClick={() => setTab("experience")}
        >
          Experience
        </div>
        <div
          className={`${
            tab === "recommended" &&
            "bg-[#28292F] text-[#FFFFFF] shadow-2xl shadow-black"
          }  py-3 rounded-2xl flex-1 font-sans text-[18px] font-medium cursor-pointer text-[#A3ADB2] transition duration-300`}
          onClick={() => setTab("recommended")}
        >
          Recommended
        </div>
      </div>
      <div className="py-6 text-[#969696]">
        {tab === "about" && <AboutComponent />}
        {tab === "experience" && <ExperienceComponent />}
        {tab === "recommended" && <Recommended />}
      </div>
    </div>
  );
};

export default IntroMain;
