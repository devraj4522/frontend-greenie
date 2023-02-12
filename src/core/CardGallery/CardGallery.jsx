import { ShoppingBagIcon } from "@heroicons/react/solid";
import Product from "../../Components/Product/Product";
import "./CardGallery.css";
import React, { useEffect, useState } from "react";
import { getProducts } from "../helper/coreapicalls";
import { toast } from "react-hot-toast";

const CardGallery = (props) => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [pageNo, setPageNo] = useState(1)
	const [count, setCount] = useState(0);
	const [currChoice, setCurrChoice] = useState("");
	const [currCategory, setCurrCategory] = useState('');

	useEffect(async () => {
		await getProducts(pageNo, currCategory).then((data) => {
			setProducts(data.results);
			setCount(data.count)
		})
			.catch(error => {
				setError(error)
				toast.error(`Error Occured loading in CardGallery`);
			});
	}, [pageNo, currCategory]);

	const handlePageChange = (e) => {
		if (pageNo !== e.target.value) {
			setPageNo(e.target.value);
			setProducts([])
		}
	}

	const PagingButton = () => {
		if (!products.length)
			return (<></>);
		
		const arr = Array.from({ length: Math.ceil(count / 5) }, (_, index) => index + 1);
		
		return(
		<>
			{arr.map((item, index) => (
				<button key={index + 1} disabled={pageNo === index + 1} value={index + 1} onClick={e => handlePageChange(e)} className={`flex items-center justify-center h-8 w-8 rounded ${pageNo == 1 ? "" : "hover:"}bg-indigo-200 text-sm font-medium text-indigo-600`}> {index + 1}
				</button>
			))}
		</>);
	}

	return (
		<div className="mx-0 sm:px-12 md: pb-6 xl:px-40 lg:pb-12  px-4 text-center sm:text-left pt-6">
			{/* <!-- Component Start --> */}
			<h1 className="text-4xl font-bold pb-2">
				Buy Your Favourite Plant
			</h1>

			{/* Filter */}
			<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
				<span className="text-sm font-semibold">
					{products.length * (pageNo - 1) + 1}-{products.length * pageNo} of {count} Products
				</span>
				<button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
					<div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
						<span className="font-medium">{currChoice?currChoice:"Popular"}</span>
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
					
					<div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex"
					>
						{props.categories.map((cat, index) =>
							<button
								className="w-full px-4 py-2 text-left hover:bg-gray-200"
								value={cat.id}
								key={index + 1}
								onMouseDown={(e) => {
									setProducts([]);
									setCurrChoice(cat.name)
									setCurrCategory(e.target.value);
								}}
							>
								{cat.name}
							</button>
						)}

					</div>

				</button>
			</div>
			<div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
				{/* <!-- Product Tile Start --> */}
				{products.map((product, id) => (
					<Product product={product} key={id} />
				))}
				{/* Loading spinner */}
				{products.length === 0 && (
					<div className="mx-0 sm:px-12 h-64 md: pb-6 xl:px-40 lg:pb-12">
						<div className="flex justify-center items-center">
							<div role="status">
								<svg
									aria-hidden="true"
									className="text-center mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
			</div>

			{/* Pagination */}
			<div className="flex justify-center mt-10 space-x-1">
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

				<PagingButton />

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
			</div>
		</div>
	);
};

export default CardGallery;
