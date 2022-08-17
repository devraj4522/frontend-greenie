import React from "react";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
// import Menu from "./Menu";
import { Toaster } from "react-hot-toast";

const Base = ({ children }) => {
	return (
		<>
			<Header className />
			<div className="loose-focus">{children}</div>
			<Footer className />
			<Toaster position="bottom-center" reverseOrder={false} />
		</>
	);
};

export default Base;
