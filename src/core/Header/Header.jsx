import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import "./Header.css";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { isAuthenticated, signout } from "../../auth/helper";
import { Link, Redirect } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { loadCart } from "../helper/cartHelper";
import Search from "../../Components/Search/Search";

const navigation = [
	{ name: "Home", href: "/", current: false },
	{ name: "Shop", href: "/Shopping", current: false },
	{ name: "Video", href: "#", current: false },
	{ name: "Blog", href: "#", current: false },
];

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const Header = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const cart = loadCart();
		setProducts(cart);
		// ref.current = products.length
	}, []);

	return (
		<Disclosure
			as="nav"
			className="header-main inherit max-w-aut7xl mx-0 px-2 sm:px-12 xl:px-40"
		>
			{({ open }) => (
				<>
					<div className="relative flex items-center justify-between h-20">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							{/* Mobile menu button*/}
							<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-white hover:bg-[#aba05e] focus:outline-none focus:ring-2 focus:ring-inset bg-[#9b9154] focus:ring-[#d1c36c]">
								<span className="sr-only">Open main menu</span>
								{open ? (
									<XIcon
										className="block h-6 w-6"
										aria-hidden="true"
									/>
								) : (
									<MenuIcon
										className="block h-6 w-6"
										aria-hidden="true"
									/>
								)}
							</Disclosure.Button>
						</div>
						<div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
							<div className="flex-shrink-0 flex items-center">
								<h3 className="text-3xl font-logofont font-black text-lime-700">
									Greenie{" "}
									<span className="text-3xl font-extrabold text-orange-500">
										.
									</span>
								</h3>
							</div>
							<div className="hidden sm:block sm:m-auto">
								<div className="flex space-x-4">
									{navigation.map((item) => (
										<Link
											key={item.name}
											to={item.href}
											className={classNames(
												item.current
													? "bg-gray-900 text-white"
													: "text-grey-900 hover:bg-gray-700 hover:text-white",
												"px-3 py-2 rounded-md text-sm font-medium"
											)}
											aria-current={
												item.current
													? "page"
													: undefined
											}
										>
											{item.name}
										</Link>
									))}
									{isAuthenticated() && (
										<Link
											to={"/cart"}
											className="flex relative"
										>
											<ShoppingBagIcon className="w-7 hover:text-gray-800 text-orange-600" />
											<p
												style={{ fontSize: "10px" }}
												className=" absolute -bottom-1 -right-1"
											>
												{products && products.length}
											</p>
										</Link>
									)}
								</div>
							</div>
						</div>
						<div className="hidden absolute inset-y-0 right-0 lg:flex space-x-6 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							{/* search */}
							<Search />

							{!isAuthenticated() ? (
								<>
									<Link
										to={"/signin"}
										className=" text-gray-900 bg-pink-100 hover:bg-pink-800 hover:text-pink-50
                          px-3 py-2 rounded-md font-medium "
										aria-current="undefined"
									>
										Login
									</Link>
									<Link
										to={"/signup"}
										className=" text-gray-900 bg-pink-100 hover:bg-pink-800 hover:text-pink-50
                          px-3 py-2 rounded-md font-medium "
										aria-current="undefined"
									>
										SignUp
									</Link>
								</>
							) : (
								<button
									onClick={() => {
										signout(() => {
											return <Redirect to="/" />;
										});
									}}
									className=" text-gray-900 bg-pink-100 hover:bg-pink-800 hover:text-pink-50
                          px-3 py-2 rounded-md font-medium "
									aria-current="undefined"
								>
									Logout
								</button>
							)}
							<Link
								to="/contact"
								className="text-white bg-green-700 hover:bg-green-600 hover:text-white
                            px-3 py-2 rounded-md text-sm font-medium"
								aria-current="undefined"
							>
								Contact Us
							</Link>
						</div>
					</div>
					<div className="flex-grow border-t border-slate-400"></div>
					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									// as="a"
									to={item.href}
									className={classNames(
										item.current
											? "bg-[#aba05e] text-white"
											: "text-gray-800 hover:bg-[#aba05e] hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={
										item.current ? "page" : undefined
									}
								>
									{item.name}
								</Link>
							))}

							{!isAuthenticated() ? (
								<>
									<Link
										to={"/signin"}
										className=" text-gray-900 bg-pink-100 hover:bg-pink-800 hover:text-pink-50
                          px-3 py-2 rounded-md font-medium "
										aria-current="undefined"
									>
										Sign In
									</Link>
									<Link
										to={"/signup"}
										className=" text-gray-900 bg-pink-100 hover:bg-pink-800 hover:text-pink-50
                          px-3 py-2 rounded-md font-medium "
										aria-current="undefined"
									>
										SignUp
									</Link>
								</>
							) : (
								<button
									onClick={() => {
										signout(() => {
											return <Redirect to="/" />;
										});
									}}
									className=" text-gray-900 bg-pink-100 hover:bg-pink-800 hover:text-pink-50
                          px-3 py-2 rounded-md font-medium "
									aria-current="undefined"
								>
									Logout
								</button>
							)}

							{isAuthenticated() && (
								<Link to={"/cart"} className="flex relative">
									<ShoppingBagIcon className="w-7 hover:text-gray-800 text-orange-600" />
									<p
										style={{ fontSize: "10px" }}
										className=" absolute -bottom-1 -right-1"
									>
										{products && products.length}
									</p>
								</Link>
							)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Header;
