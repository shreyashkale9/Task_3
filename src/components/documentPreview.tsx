import React from "react";
import Dropdown from "./userComponents/dropdown";
import ButtonWithIconOnLeft from "./userComponents/buttonWithIconOnLeft";
import { IoPawSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { RiSave3Line } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";


const DocumentPreview = () => {
  return (
    <div className="flex justify-between p-2 bg-[#c5c564] h-20 w-full">
      <div className="flex">
        <Dropdown />
        <Dropdown />
      </div>
      <div className="flex">
        <ButtonWithIconOnLeft icon={IoPawSharp} name="Set Hierarcy" />
        <ButtonWithIconOnLeft icon={RiSave3Line} name="Save" />
        <ButtonWithIconOnLeft icon={FaPlusCircle} name="Add Attachments" />
        <ButtonWithIconOnLeft icon={BsFillSendFill} name="Send" />
      </div>
    </div>
  );
};

export default DocumentPreview;