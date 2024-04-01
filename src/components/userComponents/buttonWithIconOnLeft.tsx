import React, { ReactNode, MouseEvent, ReactElement } from "react";
import { IconType } from "react-icons";

interface ButtonWithIconOnLeftProps {
  icon: IconType;
  name: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonWithIconOnLeft: React.FC<ButtonWithIconOnLeftProps> = ({
  icon: Icon,
  name,
  onClick,
}: ButtonWithIconOnLeftProps): ReactElement => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 bg-white text-black rounded-md shadow-md py-1 px-2 my-2 mx-4 focus:outline-none"
      >
        <Icon className="text-black h-[40px] w-[30px]" />
        <span className="font-semibold">{name}</span>
      </button>
    </div>
  );
};

export default ButtonWithIconOnLeft;
