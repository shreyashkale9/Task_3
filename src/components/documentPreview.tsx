import React from "react";
import Dropdown from "./userComponents/dropdown";
import ButtonWithIconOnLeft from "./userComponents/buttonWithIconOnLeft";
import { IoPawSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { RiSave3Line } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";

const DocumentPreview = () => {
  const signatureFlowOptions = ["All at once", "Hierarchy"];
  const priorityOptions = ["Normal", "Urgent"];
  return (
    <div className="flex justify-between p-2 bg-[#efefef] h-20 w-full">
      <div className="flex">
        <Dropdown name="Signature Flow" options={signatureFlowOptions} />
        <Dropdown name="Priority" options={priorityOptions} />
      </div>
      <div className="flex">
        <ButtonWithIconOnLeft
          icon={IoPawSharp}
          name="Set Hierarcy"
          color="#FFBA33"
        />
        <ButtonWithIconOnLeft icon={RiSave3Line} name="Save" color="#336BFF" />
        <ButtonWithIconOnLeft
          icon={FaPlusCircle}
          name="Add Attachments"
          color="#33FFE9"
        />
        <ButtonWithIconOnLeft
          icon={BsFillSendFill}
          name="Send"
          color="#33ECFF"
        />
      </div>
    </div>
  );
};

export default DocumentPreview;
