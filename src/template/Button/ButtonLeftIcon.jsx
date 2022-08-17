import React from "react";
import { CameraIcon } from "@heroicons/react/outline";
const ButtonLeftIcon = (props) => {
  return (
    <button className="group font-semibold px-3 pr-4 py-2 text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full">
      <CameraIcon
        className="transition
            ease-in-out delay-150 group-hover:-translate-x-[0.5rem]
            text-gray-900 mr-2 p-2 inline-block h-8 w-8 
            rounded-full bg-gray-300 group-hover:bg-gray-400"
      />
      {props.text}
    </button>
  );
};

export default ButtonLeftIcon;
