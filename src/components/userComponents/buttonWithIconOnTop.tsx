import React, { ReactElement } from "react";
import { IconType } from "react-icons";

interface ButtonWithIconOnTopProps {
  icon: IconType;
  name: string;
  color?: string;
  size?: number;
  /** Optional click handler function */
  onClick?: () => void;
}

const ButtonWithIconOnTop: React.FC<ButtonWithIconOnTopProps> = ({
  icon: Icon,
  name,
  color,
  size,
  onClick,
}): ReactElement => {
  return (
    <div>
      <button
        className="flex flex-col items-center bg-white w-[132px] h-[84px] py-2 px-4 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:ring-none"
        onClick={onClick}
      >
        <Icon color={color} className="mb-1" size={32} />
        <span className="h-[20px] w-[110px] mt-1">{name}</span>
      </button>
    </div>
  );
};

export default ButtonWithIconOnTop;
