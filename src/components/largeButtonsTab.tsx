import React from "react";
import ButtonWithIconOnTop from "./userComponents/ButtonWithIconOnTop";
import { FaPlusCircle } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbTemplate } from "react-icons/tb";

const LargeButtonsTab = () => {
  return (
    <div className="mt-5">
      <div className="mb-2">
        <ButtonWithIconOnTop
          icon={FaPlusCircle}
          name="Add Signature"
          color="#46FF33"
        />
      </div>
      <div className="mb-2">
        <ButtonWithIconOnTop
          icon={SlEnvolopeLetter}
          name="Letter Head"
          color="#FF6C33"
        />
      </div>
      <div className="mb-2">
        <ButtonWithIconOnTop icon={GiHamburgerMenu} name="Content" />
      </div>
      <div className="mb-2">
        <ButtonWithIconOnTop
          icon={TbTemplate}
          name="Templates"
          color="#BF40BF"
        />
      </div>
    </div>
  );
};

export default LargeButtonsTab;
