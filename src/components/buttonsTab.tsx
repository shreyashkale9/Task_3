import React from "react";
import { GoBold } from "react-icons/go";
import { CiText } from "react-icons/ci";
import { LiaMarkerSolid } from "react-icons/lia";
import ButtonWithIconOnTop from "./userComponents/buttonWithIconOnTop";
import { GrTable } from "react-icons/gr";
import { PiRectangle } from "react-icons/pi";
import { BiSolidEraser } from "react-icons/bi";
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
    <div className="bg-white w-[132px] h-[336px] p-2">
      <div className="flex">
        <ButtonWithIconOnTop icon={GoBold} name="Bold" size={10}/>
        <ButtonWithIconOnTop icon={CiText} name="Text" size={10}/>
      </div>
      <div className="flex">
      <ButtonWithIconOnTop icon={LiaMarkerSolid} name="HLT" size={10} />
      <ButtonWithIconOnTop icon={GrTable} name="Table" size={10} />
      </div>
      <div className="flex">
      <ButtonWithIconOnTop icon={PiRectangle} name="Reactangle" size={10} />
      <ButtonWithIconOnTop icon={BiSolidEraser} name="Eraser" size={10} />
      </div>
      <div className="flex">
        <SmallButtonWithIconOnTop icon={} name="" size={}/>
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