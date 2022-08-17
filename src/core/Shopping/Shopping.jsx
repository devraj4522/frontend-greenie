import React, { useEffect, useState } from "react";
import Category from "../../Components/Category/Category";
import Base from "../Base";
import CardGallery from "../CardGallery/CardGallery";
import { getProducts } from "../helper/coreapicalls";
import "./Shopping.css";

const Shopping = () => {
	return (
		<Base>
			<div className="shoppingMain">
				<Category />
				<CardGallery />
			</div>
		</Base>
	);
};

export default Shopping;
