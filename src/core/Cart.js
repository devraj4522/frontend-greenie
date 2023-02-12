import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import CheckoutCard from "../Components/CheckoutCard/CheckoutCard";
import Product from "../Components/Product/Product";
import Spinner from "../template/Spinner/Spinner";
import Base from "./Base";

import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";

const Cart = () => {
	const [reload, setReload] = useState(false);
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(async() => {
		try {
			const response = await loadCart();
			console.log(response);
			setOrders(response?.data_dict);
			setIsLoading(false);
		} catch (error) {
			toast.error("Error occured in loading Cart!")			
		}
	}, [reload]);
	console.log(isLoading)
	const loadAllProducts = (orders) => {
		return (
			<div>
				{isLoading && <Spinner /> }
				{orders.map((order, id) => (
					<CheckoutCard
						order={order}
						removeFromCart={true}
						addtoCart={false}
						reload={reload}
						setReload={setReload}
						setIsLoading = {setIsLoading}
						key={id}
					/>
				))}
			</div>
		);
	};

	const loadCheckout = () => {
		return (
			<div>
				<h1>Checkout</h1>
			</div>
		);
	};

	return (
		<Base title="Cart page" description="Welcome to checkout">
			<div className=" bg-[#ebe7ce] min-h-[600px] mx-0 px-3 sm:pl-12 py-12 xl:px-40 lg:py-32 grid md:grid-cols-2 gap-4  grid-cols-1 text-center">
				<div className="grid grid-cols-1">
					{orders.length > 0 ? (
						loadAllProducts(orders)
					) : (
						<h4>No orders</h4>
					)}
				</div>
				<div className="col-6">
					<PaymentB orders={orders} setReload={setReload} />
				</div>
			</div>
		</Base>
	);
};

export default Cart;
