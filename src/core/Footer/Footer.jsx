import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-1"></main>

      <footer
        className="bottom-0 text-center"
        style={{ background: "#2d2d22c4" }}
      >
        <div className="max-w-xl mx-auto p-4">
          <h3 className="font-bold text-4xl text-lime-500 font-logofont">
            Greenie <span className=" text-orange-600">.</span>
          </h3>
          <p className="text-gray-50 py-3 font-medium">
            Built With ❤️ By Dev Raj Singh
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
