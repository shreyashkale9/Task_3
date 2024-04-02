import React from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { RiDraftLine, RiMailSendLine, RiDeleteBin6Line } from "react-icons/ri";
import { IoArrowUndoOutline } from "react-icons/io5";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LiaSignOutAltSolid } from "react-icons/lia";
import MenuButton from "./userComponents/menuButton";
import IconButton from "./userComponents/iconButton";

const VerticalNavbar = () => {
  return (
    <div className="relative flex flex-col items-start h-[93vh] w-[250px] bg-[#ffffff] shadow">
      {/* Heading */}
      <div className="flex justify-between w-full p-4">
        <span className="text-sm font-semibold">Menu</span>
        <IconButton icon={FaBars} />
      </div>
      <div className="flex flex-col justify-between h-full mt-5">
        {/* Options */}
        <div>
          <MenuButton icon={MdOutlineDashboard} name="Dashboard" />
          <MenuButton icon={RiDraftLine} name="Draft" />
          <MenuButton icon={RiMailSendLine} name="Sent Application" />
          <MenuButton icon={IoArrowUndoOutline} name="Revert Back" />
          <MenuButton icon={AiTwotoneFolderOpen} name="Folders" />
          <MenuButton icon={RiDeleteBin6Line} name="Deleted Items" />
          <MenuButton
            icon={IoMdCheckmarkCircleOutline}
            name="Check Signature"
          />
        </div>
        <div>
          <MenuButton icon={LiaSignOutAltSolid} name="Sign Out" />
        </div>
      </div>
    </div>
  );
};

export default VerticalNavbar;
