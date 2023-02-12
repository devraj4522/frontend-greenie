import React, { useEffect, useState } from "react";
import Category from "../../Components/Category/Category";
import Base from "../Base";
import CardGallery from "../CardGallery/CardGallery";
import "./Shopping.css";

const Shopping = () => {
	const [categories, setCategories] = useState([])
	return (
		<Base>
			<div className="shoppingMain">
				<Category setCategories={setCategories}/>
				<CardGallery categories={categories}/>
			</div>
		</Base>
	);
};

export default Shopping;
