import React, { useState, useEffect } from "react";
import Product from "../../Components/Product/Product";
import Base from "../Base";
import { getProductByCategory } from "../helper/coreapicalls";
import { Link, useHistory, useParams } from "react-router-dom";

const SingleCategory = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const { id } = useParams();

	const loadAllProducts = () => {
		getProductByCategory(id).then((data) => {
			if (data.error) {
				setError(data.error);
				console.log(error);
			} else {
				setProducts(data);
			}
		});
	};

	useEffect(() => {
		loadAllProducts();
	}, []);

	const CTA = () => {
		return (
			<div class=" py-6 sm:py-8 lg:py-12">
				<div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
					<div class="md:h-80 flex flex-col sm:flex-row bg-gray-900 rounded-lg overflow-hidden">
						{/* <!-- content - start --> */}
						<div class="w-full sm:w-1/2 lg:w-2/5 flex flex-col p-4 sm:p-8">
							<h2 class="text-white text-xl md:text-2xl lg:text-4xl font-bold mb-4">
								End of Season Sale
								<br />
								Up to 70% off.
							</h2>

							<p class="max-w-md text-gray-400 mb-8">
								Buy outdoor & indoor plants online in India at
								best prices from MyBageecha.Wide range, fast
								delivery & prompt support.COD Available.Buy
								Plants Online Now.
							</p>

							<div class="mt-auto">
								<Link
									to="/Shopping"
									class="inline-block bg-pink-600 text-white hover:bg-pink-700 active:bg-pink-800 focus-visible:ring ring-indigo-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
								>
									Save now
								</Link>
							</div>
						</div>
						{/* <!-- content - end --> */}

						{/* <!-- image - start --> */}
						<div class="w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-auto order-first sm:order-none bg-gray-700">
							<img
								src="https://images.unsplash.com/photo-1583753075968-1236ccb83c66?auto=format&q=75&fit=crop&crop=top&w=1000&h=500"
								loading="lazy"
								alt="Photo by Dom Hill"
								class="w-full h-full object-cover object-center"
							/>
						</div>
						{/* <!-- image - end --> */}
					</div>
				</div>
			</div>
		);
	};

	if (products.length === 0)
		return (
			<Base>
				<div className="bg-[#ebe7ce] h-[80vh] mx-0 sm:px-12 md: pt-6 lg:pt-12  pb-6 xl:px-40 lg:pb-12">
					<h1 className=" text-center text-3xl font-bold">
						Not Products to Show
					</h1>
					{CTA()}
				</div>
			</Base>
		);
	return (
		<Base>
			<div className="bg-[#ebe7ce] mx-0 sm:px-12 md: pt-6 lg:pt-12  pb-6 xl:px-40 lg:pb-12">
				{/* <!-- Component Start --> */}
				<h1 className="text-4xl font-bold pb-2">
					Buy Your Favourite Plant
				</h1>

				{/* Filter */}
				{/* <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
				<span className="text-sm font-semibold">
					1-16 of 148 Products
				</span>
				<button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
					<div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
						<span className="font-medium">Popular</span>
						<svg
							className="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
						<a
							className="w-full px-4 py-2 text-left hover:bg-gray-200"
							href="#"
						>
							Popular
						</a>
						<a
							className="w-full px-4 py-2 text-left hover:bg-gray-200"
							href="#"
						>
							Featured
						</a>
						<a
							className="w-full px-4 py-2 text-left hover:bg-gray-200"
							href="#"
						>
							Newest
						</a>
						<a
							className="w-full px-4 py-2 text-left hover:bg-gray-200"
							href="#"
						>
							Lowest Price
						</a>
						<a
							className="w-full px-4 py-2 text-left hover:bg-gray-200"
							href="#"
						>
							Highest Price
						</a>
					</div>
				</button>
			</div> */}
				<div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
					{/* <!-- Product Tile Start --> */}

					{products.map((product, id) => (
						<Product product={product} key={id} />
					))}
				</div>

				{/* Pagination */}
				{/* <div className="flex justify-center mt-10 space-x-1">
        <button className="flex items-center justify-center h-8 w-8 rounded text-gray-400">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400"
          disabled
        >
          Prev
        </button>
        <button
          className="flex items-center justify-center h-8 w-8 rounded bg-indigo-200 text-sm font-medium text-indigo-600"
          disabled
        >
          1
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          2
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          3
        </button>
        <button className="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
          Next
        </button>
        <button className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div> */}

				{CTA()}
			</div>
		</Base>
	);
};

export default SingleCategory;
