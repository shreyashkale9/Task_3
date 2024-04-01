import React from "react";
import { GoBold } from "react-icons/go";
import { CiText } from "react-icons/ci";
import { LiaMarkerSolid } from "react-icons/lia";
import ButtonWithIconOnTop from "./userComponents/buttonWithIconOnTop";
import SmallButtonWithIconOnTop from "./userComponents/smallButtonWithIconOnTop";
import { GrTable } from "react-icons/gr";
import { PiRectangle } from "react-icons/pi";
import { BiEraser, BiSolidEraser } from "react-icons/bi";
import { FaPenClip } from "react-icons/fa6";
import { PiStampFill } from "react-icons/pi";


interface TableItem {
  name: string;
  logo: React.ComponentType<any>; // Path to your logo image
}

const tableContents: TableItem[] = [
  {
    name: "Bold",
    logo: GoBold
  },
  {
    name: "Text",
    logo: CiText
  },
  {
    name: "HLT",
    logo: LiaMarkerSolid
  },
  {
    name: "Bold",
    logo: GoBold
  },
  {
    name: "Bold",
    logo: GoBold
  },
  {
    name: "Bold",
    logo: GoBold
  },
  {
    name: "Bold",
    logo: GoBold
  },
  {
    name: "Bold",
    logo: GoBold
  },
];

const ButtonsTab = () => {
  return (
    <div className="bg-white w-[132px] h-[336px] p-2 mt-5">
      <div className="flex">
        <SmallButtonWithIconOnTop icon={GoBold} name="Bold" />
        <SmallButtonWithIconOnTop icon={CiText} name="Text" />
      </div>
      <div className="flex">
      <SmallButtonWithIconOnTop icon={LiaMarkerSolid} name="HLT"  />
      <SmallButtonWithIconOnTop icon={GrTable} name="Table"  />
      </div>
      <div className="flex">
      <SmallButtonWithIconOnTop icon={PiRectangle} name="Reactangle"  />
      <SmallButtonWithIconOnTop icon={BiSolidEraser} name="Eraser"  />
      </div>
      <div className="flex">
        <SmallButtonWithIconOnTop icon={FaPenClip} name="Pen" />
        <SmallButtonWithIconOnTop icon={PiStampFill} name="Stamp" />
      </div>
      <div></div>
    </div>
    // <div className="bg-white shadow-md">
    //   <table className="w-[5%]">
    //     <tbody>
    //       {tableContents.map((item, index) => (
    //         <tr key={index} className="w-[10px] h-20">
    //           <td className="text-left px-1 py-1 bg-gray-200 rounded-l-md">
    //             {item.name}
    //           </td>
    //           <td className="px-1 py-1 bg-gray-200 rounded-r-md">
    //             <img src={item.logo} alt={item.name} className="w-6 h-6" />
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default ButtonsTab;