import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";
import AddAddressCard from "../Components/AddressCard/AddAddressCard";
import AddressCard from "../Components/AddressCard/AddressCard";
import CheckoutCard from "../Components/CheckoutCard/CheckoutCard";
import Product from "../Components/Product/Product";
import { ProductsContext } from "../Context/MainContext";
import Spinner from "../template/Spinner/Spinner";
import Base from "./Base";

import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";

const Cart = (props) => {
	const {cartitems, toggleLoading, isLoading, user} = useContext(ProductsContext);
	const [currentDeleveryAddress, setCurrentDeleveryAddress] = useState()

	const loadAllProducts = (items) => {
		return (
			<div>
				{isLoading && <Spinner /> }
				{items.map((order, id) => (
					<CheckoutCard
						order={order}
						key={id}
					/>
				))}
			</div>
		);
	};

	const handleCurrentDeleveryAddress = (delevery_adddress_id) => {
		setCurrentDeleveryAddress(delevery_adddress_id);
	};
	console.log(currentDeleveryAddress)
	return (
		<Base title="Cart page" description="Welcome to checkout">
			<div className=" bg-[#ebe7ce] min-h-[600px] mx-0 px-3 sm:pl-12 py-12 xl:px-40 lg:py-32 ">
				<AddressCard user={user} handleCurrentDeleveryAddress={handleCurrentDeleveryAddress}/>
				{currentDeleveryAddress &&
				<div className="grid md:grid-cols-2 gap-4  grid-cols-1 text-center">
					<div className="grid grid-cols-1">
						{cartitems.length > 0 ? (
							loadAllProducts(cartitems)
						) : (
							<h4>No orders</h4>
						)}
					</div>
					<div className="col-6">
						<PaymentB delevery_adddress_id={currentDeleveryAddress}/>
					</div>
				</div>
				}
			</div>
		</Base>
	);
};

export default Cart;
