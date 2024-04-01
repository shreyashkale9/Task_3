import React, { ReactElement } from "react";
import { IconType } from "react-icons";

interface SmallButtonWithIconOnTopProps {
  icon: IconType;
  name: string;
  size?: number;
  /** Optional click handler function */
  onClick?: () => void;
}

const SmallButtonWithIconOnTop: React.FC<SmallButtonWithIconOnTopProps> = ({
  icon: Icon,
  name,
  size,
  onClick,
}): ReactElement => {
  return (
    <div>
      <button
        className="flex flex-col items-center bg-[#D9D9D9] h-[57px] w-[54px] text-xs ml-1 mb-1"
        onClick={onClick}
      >
        <Icon className="text-[#000000] w-[20px] h-[19px] mt-3" />
        {name}
      </button>
    </div>
  );
};

export default SmallButtonWithIconOnTop;
