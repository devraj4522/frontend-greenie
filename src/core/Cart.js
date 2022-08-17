import React, { useState, useEffect } from "react";
import CheckoutCard from "../Components/CheckoutCard/CheckoutCard";
import Product from "../Components/Product/Product";
import Base from "./Base";

import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";

const Cart = () => {
	const [reload, setReload] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(loadCart());
	}, [reload]);

	const loadAllProducts = (products) => {
		return (
			<div>
				{products.map((product, id) => (
					// <Product
					//   key={index}
					//   product={product}
					//   removeFromCart={true}
					//   addtoCart={false}
					//   reload={reload}
					//   setReload={setReload}
					// />
					<CheckoutCard
						product={product}
						removeFromCart={true}
						addtoCart={false}
						reload={reload}
						setReload={setReload}
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
					{products.length > 0 ? (
						loadAllProducts(products)
					) : (
						<h4>No products</h4>
					)}
				</div>
				<div className="col-6">
					<PaymentB products={products} setReload={setReload} />
				</div>
			</div>
		</Base>
	);
};

export default Cart;
