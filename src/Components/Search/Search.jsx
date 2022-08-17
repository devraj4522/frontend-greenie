import React, { useState } from "react";
import { getProducts } from "../../core/helper/coreapicalls";
import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
	const [searchInp, setSearchInp] = useState("");
	const [filteredArray, setFilteredArray] = useState([]);
	const [initialArray, setInitialArray] = useState([]);
	const [isActivated, setIsActivated] = useState(false);

	const handleChange = (event) => {
		const value = event.target.value;
		setSearchInp(value);
		const tempArr = initialArray.filter((v) => v.name.includes(value));
		setFilteredArray(tempArr);
	};

	const handleFocus = async (event) => {
		// console.log("focus");
		if (isActivated) return;

		getProducts()
			.then((res) =>
				res.map((item) => {
					return { name: item.name, id: item.id };
				})
			)
			.then((res) => {
				setInitialArray(res);
				setIsActivated(true);
			});
	};

	const RecommendationBox = () => {
		return (
			<div className="flex rounded-t-sm rounded-b-sm flex-col absolute top-10 z-50 max-h-[70vh] overflow-hidden">
				{filteredArray.map((item, id) => (
					<a
						href={"/single/" + item.id}
						key={id}
						className="margin-0 cursor-pointer border-b border-gray-200 bg-white p-4 flex flex-col justify-between leading-normal"
					>
						<p className=" text-gray-800 font-medium text-base">
							{item.name}
						</p>
					</a>
				))}
			</div>
		);
	};
	return (
		<div
			className="flex items-center relative"
			onFocus={handleFocus}
			onBlur={() => {
				// console.log("blur");
				setTimeout(() => {
					setFilteredArray([]);
				}, 500);
			}}
		>
			<input
				type="text"
				name="search"
				id="search"
				value={searchInp}
				onChange={(e) => handleChange(e)}
				autoComplete="search"
				className="px-3 py-2 focus:ring-lime-50 focus:border-lime-50 block w-full shadow-sm sm:text-sm border-lime-50 rounded-full"
			/>
			<div className="text-sm font-medium text-pink-600  icon-search ">
				<SearchIcon className="h-6 w-6" aria-hidden="true" />
			</div>
			{isActivated && <RecommendationBox />}
		</div>
	);
};

export default Search;
