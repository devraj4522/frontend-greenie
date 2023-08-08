import {
	Button,
	IconButton,
	ThemeProvider,
	Typography,
} from "@material-tailwind/react";
import "./SingleProduct.css";

import React, { useState, useEffect, useContext } from "react";
import ButtonRightIcon from "../../template/Button/ButtonRightIcon";
import Base from "../Base";
import {
	CashIcon,
	CheckIcon,
	DeviceMobileIcon,
	TicketIcon,
} from "@heroicons/react/solid";
import { getSingleProduct } from "../helper/coreapicalls";
import { useHistory, useParams } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/outline";
import {
	addItemToCart,
	isAvailableInCart,
	removeItemFromCart,
} from "../helper/cartHelper";
import toast from "react-hot-toast";
import Counter from "../../Components/Counter/Counter";
import Review from "../../Components/Review/Review";

const SingleProduct = (props) => {
	const [product, setProduct] = useState(null);
	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		getSingleProduct(id)
		.then((res) => setProduct(res))
		.catch(err => toast.error(err));
		if (isAvailableInCart(id)) setIsAddedToCart(true);
	}, []);

	console.log(product)

	const FlipCartandRemove = () => {
		if (!isAddedToCart)
			return (
				<button
					onClick={() => {
						addItemToCart(product, () =>
							toast.success("Added to cart")
						);
						setIsAddedToCart(true);
					}}
					className="flex  text-white bg-lime-600 border-0 py-2 px-6 focus:outline-none hover:bg-lime-700 rounded"
				>
					Add to Cart
				</button>
			);
		else
			return (
				<button
					onClick={() => {
						toast.success("Removed From cart");
						removeItemFromCart(product.id);
						setIsAddedToCart(false);
					}}
					className="flex  text-white bg-lime-600 border-0 py-2 px-6 focus:outline-none hover:bg-lime-700 rounded"
				>
					Remove From Cart
				</button>
			);
	};

	if (product && product.detail)
		return (
			<Base>
				<section className="text-gray-600 body-font overflow-hidden">
					<div className="container px-5 py-24 mx-auto">
						<h1 className="text-center my-[120px] font-bold text-4xl">
							{product.detail}
						</h1>
					</div>
				</section>
			</Base>
		);
	return (
		<Base>
			{product && (
				<div className="singleMain">
					<section className="text-gray-600 body-font overflow-hidden">
						<div className="container px-5 py-24 mx-auto">
							<div className="lg:w-4/5 mx-auto flex flex-wrap">
								<img
									alt="ecommerce"
									className="lg:w-1/2  bg-gradient-to-br from-zinc-500 via-zinc-300 to-zinc-100 w-full lg:h-auto h-64 object-cover object-center rounded"
									src={product.images.length: 'https://res.cloudinary.com/dhcwfa4vu/image/upload/c_fill/v1' + product.images[0]?.public_id }
								/>
								<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
									<h2 className=" capitalize text-sm title-font text-gray-500 tracking-widest">
										<span className=" font-semibold">
											Plant Type:{" "}
										</span>
										{product.category}
									</h2>
									<h1 className="text-gray-900 text-4xl title-font font-bold mb-1">
										{product.name}
									</h1>
									<div className="flex mb-4">
										<span className="flex items-center">
											<svg
												fill="currentColor"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4 text-orange-500"
												viewBox="0 0 24 24"
											>
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
											</svg>
											<svg
												fill="currentColor"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4 text-orange-500"
												viewBox="0 0 24 24"
											>
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
											</svg>
											<svg
												fill="currentColor"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4 text-orange-500"
												viewBox="0 0 24 24"
											>
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
											</svg>
											<svg
												fill="currentColor"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4 text-orange-500"
												viewBox="0 0 24 24"
											>
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
											</svg>
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4 text-yellow-500"
												viewBox="0 0 24 24"
											>
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
											</svg>
											<span className="text-gray-600 ml-3">
												4 Reviews
											</span>
										</span>
										<span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
											<a className="text-gray-500">
												<svg
													fill="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a className="text-gray-500">
												<svg
													fill="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a className="text-gray-500">
												<svg
													fill="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</a>
										</span>
									</div>
									<p className="leading-relaxed">
										{product.description}
									</p>
									<div className="flex mt-6 items-center pb-5 border-b-2 border-zinc-400 mb-5"></div>
									<span className="title-font font-medium text-2xl text-gray-900">
										{"₹ "} {product.price}
									</span>
									{isAddedToCart && (
										<Counter product={product} />
									)}
									<div className="flex my-5 mb-7">
										<FlipCartandRemove />
										<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-pink-700 ml-4">
											<svg
												fill="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
											</svg>
										</button>
									</div>
									<div className="mt-12">
										<h3 className=" font-semibold">
											100% Original Products
										</h3>
										<h3 className=" my-3">
											View Eligible Products
										</h3>

										<div className="flex">
											<CashIcon className="w-7 h-7 text-lime-400" />
											<p>Pay on Delivery</p>
										</div>
										<div className="flex">
											<DeviceMobileIcon className="w-7 h-7 text-lime-300" />
											<p>
												EMI option available EMI
												starting from Rs.61/month
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<Review product={product} />
				</div>
			)}

			{!product && (
				<div className="mx-0 sm:px-12 md: pb-6 xl:px-40 lg:pb-12">
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
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				</div>
			)}
		</Base>
	);
};

export default SingleProduct;
