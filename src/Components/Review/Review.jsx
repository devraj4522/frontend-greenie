import React, { useState, useEffect } from "react";
import { getProductReviews } from "../../core/helper/coreapicalls";
import { CloudImage } from "../../template/Images/CloudImage";
import AddReview from "./AddReview";
import { ShowReviewImage } from "./ShowReviewImage";

const Review = ({ product }) => {
	const [review, setreview] = useState([]);
	const [reload, setReload] = useState(false);

	useEffect(() => {
		getProductReviews(product.id).then((rev) => setreview(rev));
	}, [reload]);

	// return {xyz:12, 'month'}
	const getTimeAgo = (strdate) => {
		const prevDate = new Date(strdate);
		const today = new Date();
		const diffTime = Math.abs(today - prevDate);
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
		const hours = Math.floor(diffTime / (1000 * 60 * 60));
		const diffMonth = Math.floor(diffDays / 30);
		const diffYear = Math.floor(diffMonth / 12);
		if (diffYear) return { data: diffYear, type: "year" };
		if (diffMonth) return { data: diffMonth, type: "month" };
		if (diffDays) return { data: diffDays, type: "days" };
		return { data: hours, type: "hours" };
	};

	const showStars = (rating) => {
		const filled = rating;
		const nonfilled = 5 - rating;
		let content = [];

		for (let i = 0; i < filled; i++) {
			content.push(
				<a key={i} className="inline-block mr-1" href="#">
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
							fill="#FFCB00"
						></path>
					</svg>
				</a>
			);
		}

		for (let i = 0; i < nonfilled; i++) {
			content.push(
				<a
					key={filled + i}
					className="inline-block text-gray-200"
					href="#"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
							fill="currentColor"
						></path>
					</svg>
				</a>
			);
		}
		return content;
	};

	if (review.length == 0)
		return (
			<section className="  text-gray-600 body-font overflow-hidden">
				<div className="container px-5 mx-auto">
					<div className=" lg:w-4/5 mx-auto flex-wrap flex flex-col">
						<h3 className=" font-bold text-2xl mx-auto">
							Add Review
						</h3>
						<AddReview
							product={product.id}
							setReload={setReload}
							reload={reload}
						/>
					</div>
				</div>
			</section>
		);
	return (
		<>
			<section className="  text-gray-600 body-font overflow-hidden">
				<div className="container px-5 mx-auto">
					<div className=" lg:w-4/5 mx-auto flex-wrap flex flex-col">
						<AddReview
							product={product.id}
							setReload={setReload}
							reload={reload}
						/>
						<h1 className="my-5 text-4xl md:text-3xl xl:text-5xl font-heading font-medium leading-tight">
							Reviews
						</h1>
						<span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
							What people say
						</span>

						<div className="flex flex-wrap -mx-2 items-center justify-between">
							<div className="w-full xl:w-3/5 px-2 mb-4 xl:mb-0">
								<div className="flex items-center h-full rounded-3xl">
									<div className="flex flex-wrap items-center justify-between w-full -mx-2">
										<div className="w-full md:w-auto px-2 mb-4 md:mb-0">
											<a
												className="block mx-auto max-w-max"
												href="#"
											>
												<img
													className="h-24 object-cover w-50 rounded-md"
													src={product.images && product.images.images?product.images.images[0]:'https://res.cloudinary.com/dhcwfa4vu/image/upload/v1675602784/greenie/Category/woman-watering-houseplants-royalty-free-image-1616000139_gzkswt.jpg'}
													alt=""
												/>
											</a>
										</div>
										<div className="w-full md:w-auto px-2 mb-8 md:mb-0">
											<a
												className="block mb-2 text-2xl xl:text-3xl font-heading font-medium hover:underline"
												href="#"
											>
												{product.name}
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2 xl:w-1/5 px-2 mb-4 md:mb-0">
								<div className=" px-4 h-full mb-4  rounded-3xl">
									<p className="font-heading font-medium">
										<span className="text-4xl text-slate-700">
											4.3
										</span>
										<span className="text-slate-900">
											/5
										</span>
									</p>
									<div className="flex mb-3">
										<a
											className="inline-block text-slate-900"
											href="#"
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
													fill="currentColor"
												></path>
											</svg>
										</a>
									</div>
									<p className="text-sm text-slare-900 font-medium">
										1 218 reviews
									</p>
								</div>
							</div>
						</div>

						{review.map((item, index) => {
							return (
								<div
									key={index}
									className="mb-6 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden"
								>
									<div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
										<div className={` flex flex-wrap items-center`}>
											<ShowReviewImage user = {item.user} images= {item.user.images}/>
											<h4 className="w-full ml-2 md:w-auto text-xl font-heading font-medium">
												{item.user.name}
											</h4>
											<div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
											<span className="mr-4 text-xl font-heading font-medium">
												{item.rating.toFixed(1)}
											</span>
											<div className="inline-flex">
												{showStars(item.rating)}
											</div>
										</div>
									</div>
									<div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
										<div className="flex flex-wrap">
											<div className="w-full md:w-2/3 mb-6 md:mb-0">
												<h3 className=" max-w-2xl font-bold text-2xl text-darkBlueGray-400 leading-loose">
													{item.title}
												</h3>
												<p className=" max-w-2xl text-darkBlueGray-400 leading-loose">
													{item.description}
												</p>
											</div>
											<div className="w-full md:w-1/3 text-right">
												<p className=" text-sm text-gray-300">
													Added{" "}
													{getTimeAgo(
														item.modified
													)["data"] +
														" " +
														getTimeAgo(
															item.modified
														)["type"]}{" "}
													ago
												</p>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Review;
