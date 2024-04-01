import React from "react";
import ButtonWithIconOnTop from "./userComponents/buttonWithIconOnTop";
import { FaPlusCircle } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbTemplate } from "react-icons/tb";

const LargeButtonsTab = () => {
  return (
    <div className="mt-5">
      <div className="mb-2">
        <ButtonWithIconOnTop icon={FaPlusCircle} name="Add Signature" />
      </div>
      <div className="mb-2">
        <ButtonWithIconOnTop icon={SlEnvolopeLetter} name="Letter Head" />
      </div>
      <div className="mb-2">
        <ButtonWithIconOnTop icon={GiHamburgerMenu} name="Content" />
      </div>
      <div className="mb-2">
        <ButtonWithIconOnTop icon={TbTemplate} name="Templates" />
      </div>
    </div>
  );
};

export default LargeButtonsTab;
