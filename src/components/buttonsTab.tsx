import React from "react";
import { GoBold } from "react-icons/go";
import { CiText } from "react-icons/ci";
import { LiaMarkerSolid } from "react-icons/lia";
import { GrTable } from "react-icons/gr";
import { PiRectangle } from "react-icons/pi";
import { BiEraser, BiSolidEraser } from "react-icons/bi";
import { FaPenClip } from "react-icons/fa6";
import { PiStampFill } from "react-icons/pi";
import SmallButtonWithIconOnTop from "./userComponents/SmallButtonWithIconOnTop";

const ButtonsTab = () => {
  return (
    <div className="bg-[#ffffff] w-[132px] h-[336px] p-2 mt-5">
      <div className="flex">
        <SmallButtonWithIconOnTop icon={GoBold} name="Bold" />
        <SmallButtonWithIconOnTop icon={CiText} name="Text" />
      </div>
      <div className="flex">
        <SmallButtonWithIconOnTop icon={LiaMarkerSolid} name="HLT" />
        <SmallButtonWithIconOnTop icon={GrTable} name="Table" />
      </div>
      <div className="flex">
        <SmallButtonWithIconOnTop icon={PiRectangle} name="Reactangle" />
        <SmallButtonWithIconOnTop icon={BiSolidEraser} name="Eraser" />
      </div>
      <div className="flex">
        <SmallButtonWithIconOnTop icon={FaPenClip} name="Pen" />
        <SmallButtonWithIconOnTop icon={PiStampFill} name="Stamp" />
      </div>
    </div>
  );
};

export default ButtonsTab;
