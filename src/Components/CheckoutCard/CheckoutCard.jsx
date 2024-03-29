import { TrashIcon } from "@heroicons/react/solid";
import React, {useContext} from "react";
import { toast } from "react-hot-toast";
import { ProductsContext } from "../../Context/MainContext";
import { removeItemFromCart } from "../../core/helper/cartHelper";
import ButtonRightIcon from "../../template/Button/ButtonRightIcon";
import { ShowCartImage } from "./ShowCartImage";

const CheckoutCard = ({order}) => {
	const {toggleReloadCart} = useContext(ProductsContext);

	return (
		<div className=" rounded-md shadow-md hover:shadow-sm hover:opacity-80 flex space-x-1 text-left m-2 bg-zinc-100  items-center justify-start  relative ">
			<ShowCartImage images={order?.product?.images} />
			<div className="p-2">
				<h2 className="pb-1 font-semibold text-md">{order?.product?.name}</h2>
				<p className=" font-bold text-lime-600 text-lg">
					{"₹ "}
					{order?.product?.price}
				</p>
			</div>
			<button
				onClick={async () => {
					try {
						const res = await removeItemFromCart(order?.product?.id);
						await toggleReloadCart();
						toast.success("Item Removed.")
					} catch (error) {
						toast.error("Error occured.")
					}
					
				}}
				className=" right-3 text-slate-600 hover:text-rose-600  absolute"
			>
				<TrashIcon className="w-7 " />
			</button>
		</div>
	);
};

export default CheckoutCard;
