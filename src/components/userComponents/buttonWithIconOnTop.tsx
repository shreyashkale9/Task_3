import React, { ReactElement } from "react";
import { IconType } from "react-icons";


interface ButtonWithIconOnTopProps {
  /** Text to display on the button */
  icon: IconType;
  name: string;
  size: number;
  /** Optional click handler function */
  onClick?: () => void;
}

const ButtonWithIconOnTop : React.FC<ButtonWithIconOnTopProps> = ({ icon : Icon, name, size, onClick }) : ReactElement => {

  return (
    <div>
      <button
        className="flex flex-col items-center bg-white py-2 px-4 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:ring-none"
        onClick={onClick}
      >
        <Icon className="text-green-500 mb-1" size={size} />
        <span className="font-semibold mt-1">{name}</span>
      </button>
    </div>
  );
};

export default ButtonWithIconOnTop;
