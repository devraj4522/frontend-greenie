import React, { useEffect, useState } from "react";
import Category from "../../Components/Category/Category";
import Base from "../Base";
import CardGallery from "../CardGallery/CardGallery";
import "./Shopping.css";

const Shopping = () => {
	const [categories, setCategories] = useState([]);
	const loadCategories = (items) => setCategories(items);
	return (
		<Base>
			<div className="shoppingMain">
				<CardGallery categories={categories}/>
				<Category setCategories={loadCategories}/>
			</div>
		</Base>
	);
};

export default Shopping;
