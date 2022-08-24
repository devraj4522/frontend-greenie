import React from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const ButtonLeftIcon = (props) => {
  return (
    <Link to={props.link} className="group font-semibold px-3 pr-4 py-2 text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full">
      <CameraIcon
        className="transition
            ease-in-out delay-150 group-hover:-translate-x-[0.5rem]
            text-gray-900 mr-2 p-1 inline-block h-7 w-7 
            rounded-full bg-gray-300 group-hover:bg-gray-400"
      />
      {props.text}
    </Link>
  );
};

export default ButtonLeftIcon;
