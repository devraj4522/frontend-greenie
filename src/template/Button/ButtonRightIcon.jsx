import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
const ButtonRightIcon = (props) => {
  return (
    <button className="group font-semibold px-5 py-2 text-gray-50 bg-orange-500 hover:bg-orange-600 rounded-full">
      {props.text}
      <ChevronRightIcon
        className="transition
            ease-in-out delay-150 group-hover:-translate-x-[-0.5rem]
            text-gray-900 ml-2 p-1 inline-block h-6 w-6 
            rounded-full bg-yellow-400 group-hover:bg-yellow-600"
      />
    </button>
  );
};

export default ButtonRightIcon;
