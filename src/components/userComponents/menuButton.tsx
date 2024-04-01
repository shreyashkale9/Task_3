import React, { ReactElement, MouseEvent } from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  icon: IconType;
  name: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const MenuButton: React.FC<IconButtonProps> = ({
  name,
  icon: Icon,
  onClick,
}: IconButtonProps): ReactElement => {
  return (
    <div>
      <button>
        <div className="flex items-center p-4">
          <Icon className="w-6 h-6 mr-2 text-gray-500"/>
          <span>{name}</span>
        </div>
      </button>
    </div>
  );
};

export default MenuButton;