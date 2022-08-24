import React, { useState } from "react";
import "./Login.css";
import LoginMain from "../../assets/images/login.png";
import { Link, Redirect } from "react-router-dom";
import Base from "../Base";
import { signin, authenticate, isAuthenticated } from "../../auth/helper";
import { toast } from "react-hot-toast";

const Login = () => {
	const [values, setValues] = useState({
		name: "",
		email: "test@test.com",
		password: "1234",
		error: "",
		success: false,
		loading: false,
		didRedirect: false,
	});
	const { name, email, password, error, success, loading, didRedirect } =
		values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false, loading: true });

		signin({ email, password })
			.then((data) => {
				// console.log("DATA", data);
				if (data.token) {
					//let sessionToken = data.token;
					authenticate(data, () => {
						console.log("TOKKEN ADDED");
						setValues({
							...values,
							didRedirect: true,
						});
					});
				} else {
					setValues({
						...values,
						loading: false,
						name: "",
						email: "",
						password: "",
					});
					toast.error("Error Occured! Enter All Required Fields");
				}
			})
			.catch((e) => console.log(e));
	};

	const performRedirect = () => {
		if (isAuthenticated()) {
			return <Redirect to="/" />;
		}
	};

	return (
		<Base>
			{success && toast.success("Login Succesful...")}
			{error &&
				toast.error(<Link to="/signin">Error occured Login now.</Link>)}
			{performRedirect()}
			<div className="login-main flex sm:items-center items-start min-h-screen px-3 py-6 sm:px-12 lg:justify-center">
				<div className="flex mx-auto flex-1 flex-col-reverse overflow-hidden rounded-md shadow-lg md:flex-row md:flex-1 lg:max-w-screen-md">
					<div className="p-5 bg-white md:flex-1">
						<h3 className="my-4 text-3xl font-bold text-lime-800">
							Welcome Back
						</h3>
						<form
							action="#"
							className="flex flex-col text-gray-600 space-y-5 py-12"
						>
							<div className="flex flex-col space-y-1">
								<label
									htmlFor="email"
									className="text-sm font-semibold text-gray-600"
								>
									Email address
								</label>
								<input
									type="email"
									id="email"
									autoFocus
									value={email}
									onChange={handleChange("email")}
									className="px-4 py-2 transition duration-300 border border-gray-300 rounded-full focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
								/>
							</div>
							<div className="flex flex-col space-y-1">
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="text-sm font-semibold text-gray-600"
									>
										Password
									</label>
									<a
										href="#"
										className="text-sm text-pink-400 hover:underline focus:text-lime-700"
									>
										Forgot Password?
									</a>
								</div>
								<input
									type="password"
									id="password"
									value={password}
									onChange={handleChange("password")}
									className="px-4 py-2 transition duration-300 border border-gray-300 rounded-full focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
								/>
							</div>
							<div>
								<button
									type="submit"
									onClick={onSubmit}
									className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-pink-500 rounded-full shadow hover:bg-pink-600 focus:outline-none focus:ring-pink-200 focus:ring-4"
								>
									Log in
								</button>
							</div>
							<div className="flex flex-col space-y-5">
								<span className="flex items-center justify-center space-x-2">
									<span className="h-px bg-gray-400 w-14"></span>
									<span className="font-normal text-gray-600">
										Or Login With
									</span>
									<span className="h-px bg-gray-400 w-14"></span>
								</span>
								<div className="flex flex-col space-y-4">
									<a
										href="#"
										className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-full group hover:bg-gray-700 focus:outline-none"
									>
										<span>
											<i
												className="fa fa-google text-orange-700 group-hover:text-white"
												aria-hidden="true"
											></i>
										</span>
										<span className="text-sm font-medium text-gray-600 group-hover:text-white">
											Login With Google
										</span>
									</a>
									<a
										href="#"
										className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-full group hover:bg-blue-500 focus:outline-none"
									>
										<span>
											<i
												className="fa fa-facebook text-blue-700 group-hover:text-white"
												aria-hidden="true"
											></i>
										</span>
										<span className="text-sm font-medium text-blue-500 group-hover:text-white">
											Facebook
										</span>
									</a>
								</div>
							</div>
						</form>
					</div>
					<div className="p-4 py-6 sm:flex-1 text-white bg-teal-50 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
						<div className="my-3 text-4xl font-bold tracking-wider">
							<img
								className="pb-2 w-32 h-60 lg:46 lg:h-60 mx-auto"
								src={LoginMain}
								alt=""
								srcSet=""
							/>
							<a
								href="#"
								className="hidden sm:block font-logofont text-center text-lime-700"
							>
								Greenie{" "}
								<span className="font-logofont text-orange-500">
									.
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Base>
	);
};

export default Login;
