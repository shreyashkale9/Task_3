import React, { useRef, useEffect } from "react";

interface InputFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className="flex items-center w-[1424px] h-[36px] mt-10 ml-20">
      <span className="w-[95px] h-[23px]">Subject:</span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-[1124px] h-[36px] border border-gray-300 rounded px-4"
      />
    </div>
  );
};

export default InputField;
