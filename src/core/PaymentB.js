import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { cartEmpty } from "./helper/cartHelper";
import { getmeToken, processPayment } from "./helper/paymentHelper";
import { createOrder } from "./helper/orderHelper";
import { isAuthenticated, signout } from "../auth/helper";
import DropIn from "braintree-web-drop-in-react";

const PaymentB = ({ products, reload = undefined, setReload = (f) => f }) => {
	const [info, setInfo] = useState({
		loading: false,
		success: false,
		clientToken: null,
		error: "",
		instance: {},
	});
	console.log(products)
	const [orderSuccess, setOrderSuccess] = useState(false);

	const userId = isAuthenticated && isAuthenticated().user.id;
	const token = isAuthenticated && isAuthenticated().token;

	const getToken = (userId, token) => {
		getmeToken(userId, token).then((info) => {
			if (info.error) {
				setInfo({
					...info,
					error: info.error,
				});
				signout(() => {
					return <Redirect to="/" />;
				});
			} else {
				const clientToken = info.clientToken;
				setInfo({ clientToken });
			}
		});
	};

	useEffect(() => {
		getToken(userId, token);
	}, []);

	const getAmount = () => {
		let amount = 0;
		products.map((p) => {
			amount = amount + parseInt(p.price);
		});
		return amount;
	};

	const onPurchase = () => {
		setInfo({ loading: true });
		let nonce;
		let getNonce = info.instance.requestPaymentMethod().then((data) => {
			console.log("MYDATA", data);
			nonce = data.nonce;
			const paymentData = {
				paymentMethodNonce: nonce,
				amount: getAmount(),
			};
			processPayment(userId, token, paymentData)
				.then((response) => {
					console.log("POINT-1", response);
					if (response.error) {
						if (response.code === "1") {
							console.log("PAYMENT Failed!");
							signout(() => {
								return <Redirect to="/" />;
							});
						}
					} else {
						setInfo({
							...info,
							success: response.success,
							loading: false,
						});
						console.log("PAYMENT SUCCESS");

						let product_names = "";
						products.forEach(function (item) {
							product_names += item.name + ", ";
						});

						const orderData = {
							products: product_names,
							transaction_id: response.transaction.id,
							amount: response.transaction.amount,
						};
						createOrder(userId, token, orderData)
							.then((response) => {
								if (response.error) {
									if (response.code === "1") {
										console.log("Order Failed!");
										signout(() => {
											return <Redirect to="/" />;
										});
									}
								} else {
									if (response.success === true) {
										console.log("ORDER PLACED!!");
									}
								}
							})
							.catch((error) => {
								setInfo({ loading: false, success: false });
								console.log("Order FAILED", error);
							});
						cartEmpty(() => {
							// console.log("Did we got a crash?");
							setOrderSuccess(true);
						});

						setReload(!reload);
					}
				})
				.catch((error) => {
					setInfo({ loading: false, success: false });
					console.log("PAYMENT FAILED", error);
				});
		});
	};

	const showbtnDropIn = () => {
		return (
			<div>
				{info.clientToken !== null && products.length > 0 ? (
					<div>
						{info.error && info.error != "" ? (
							<>
								<h1 className="font-bold text-red-600 text-3xl">
									Error Occured...
								</h1>
								<p className="py-2">
									Customer Bank Declined payment
								</p>
							</>
						) : (
							<>
								<h3 className=" font-bold text-2xl text-slate-800">
									Your bill is ₹ {getAmount()}
								</h3>
								<DropIn
									options={{
										authorization: info.clientToken,
									}}
									onInstance={(instance) =>
										(info.instance = instance)
									}
								></DropIn>
								<button
									className=" bg-lime-600 text-white py-2 px-3 hover:shadow-md shadow-sm rounded-md hover:bg-lime-700"
									onClick={onPurchase}
								>
									Buy Now
								</button>

								{info.loading && info.error !== true && (
									<div className="flex justify-center items-center">
										<div role="status">
											<svg
												aria-hidden="true"
												className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
												viewBox="0 0 100 101"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
													fill="currentColor"
												/>
												<path
													d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
													fill="currentFill"
												/>
											</svg>
											<span className="sr-only">
												Loading...
											</span>
										</div>
									</div>
								)}
							</>
						)}
					</div>
				) : (
					<>
						{orderSuccess ? (
							<>
								<h1 className=" text-3xl font-bold text-green-600">
									Order Successfully Placed!
								</h1>
								<p className="pt-3 text-md font-medium">
									Your Parcel is on the way!
								</p>
							</>
						) : (
							<h3>Please login first or add something in cart</h3>
						)}
					</>
				)}
			</div>
		);
	};

	return <div>{showbtnDropIn()}</div>;
};

export default PaymentB;
