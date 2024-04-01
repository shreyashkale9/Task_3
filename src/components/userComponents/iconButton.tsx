import React, { MouseEvent, ReactElement } from "react";
import { IconType } from "react-icons";

interface IconButtonProps {
  icon: IconType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
}: IconButtonProps): ReactElement => {
  return (
    <div>
      <button>
        <div className="p-4">
          <Icon className="w-6 h-6 text-gray-500" />
        </div>
      </button>
    </div>
  );
};

export default IconButton;
