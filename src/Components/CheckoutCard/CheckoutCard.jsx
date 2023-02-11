import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { removeItemFromCart } from "../../core/helper/cartHelper";
import ButtonRightIcon from "../../template/Button/ButtonRightIcon";

const CheckoutCard = ({
	product,
	addtoCart = true,
	removeFromCart,
	reload = undefined,
	setReload = (f) => f,
	// function(f){return f}
}) => {
	// console.log(product);
	return (
		<div className=" rounded-md shadow-md hover:shadow-sm hover:opacity-80 flex space-x-1 text-left m-2 bg-zinc-100  items-center justify-start  relative ">
			<img
				src={product.images?.images?.[0]}
				alt=""
				className="w-20 h-20 md:w-24 md:h-24"
				srcSet=""
			/>
			<div className="p-2">
				<h2 className="pb-1 font-semibold text-md">{product.name}</h2>
				<p className=" font-bold text-lime-600 text-lg">
					{"₹ "}
					{product.price}
				</p>
			</div>
			<button
				onClick={() => {
					removeItemFromCart(product.id);
					setReload(!reload);
				}}
				className=" right-3 text-slate-600 hover:text-rose-600  absolute"
			>
				<TrashIcon className="w-7 " />
			</button>
		</div>
	);
};

export default CheckoutCard;
