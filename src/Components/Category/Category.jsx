import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { getCategory } from "../../core/helper/coreapicalls";

const Category = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategory().then((r) => {
				setCategories(r)
		});
	}, []);

	const Card = ({ item }) => {
		return (
			<Link
				to={"category/" + item.id}
				className="xl:w-1/3 md:w-1/2 p-4"
			>
				<div className=" bg-[#f5f5f2] p-6 rounded-lg hover:shadow-2xl shadow hover:cursor-pointer ">
					<img
						className="h-40 rounded w-full object-cover object-center mb-6"
						src={
							(item.images && item.images && item.images.images)
								? item.images.images[0]
								: "https://images.unsplash.com/photo-1621076806681-a82129e952d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						}
						alt="content"
					/>
					<h3 className="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font">
						{item.subtitle}
					</h3>
					<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
						{item.name}
					</h2>
					<p className="leading-relaxed text-base">
						{item.description}
					</p>
				</div>
			</Link>
		);
	};
	
	return (
		<section className="mx-0 px-4 text-center sm:text-left sm:px-12 md: lg:pt-12 pt-6 pb-6 xl:px-40 lg:pb-12 text-gray-600 body-font">
			<div className="container mx-auto">
				<h2 className=" title-font font-bold text-4xl mb-10">
					{" "}
					Search With Category
				</h2>
				{categories.length === 0 && (
					<div className="mx-0 sm:px-12 md: pb-6 xl:px-40 lg:pb-12">
						<div class="flex justify-center items-center">
							<div role="status">
								<svg
									aria-hidden="true"
									class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
								<span class="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				)}
				<div className="flex flex-wrap -m-4">
					{categories.map((item, index) => (
						<Card item={item} key={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Category;
