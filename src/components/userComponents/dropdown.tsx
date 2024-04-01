import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        data-dropdown-toggle="dropdown"
        className="text-gray bg-[#ffffff] font-medium text-sm px-4 py-1 mx-4 my-1 text-center inline-flex items-center"
        type="button"
      >
        Signature Flow{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={`${
          isOpen ? "block" : "hidden"
        } z-10 bg-white divide-y divide-gray-100 shadow w-44 `}
      >
        <ul
          className="py-2 text-sm text-[#000000] dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#000000] hover:bg-gray-100"
            >
              Flow1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#000000] hover:bg-gray-100"
            >
              Flow2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#000000] hover:bg-gray-100 "
            >
              Flow3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#000000] hover:bg-gray-100"
            >
              Flow4
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
