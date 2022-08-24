import { SunIcon } from "@heroicons/react/outline";
import { CloudIcon, BeakerIcon } from "@heroicons/react/solid";
import React from "react";
import ButtonLeftIcon from "../../template/Button/ButtonLeftIcon";
import ButtonRightIcon from "../../template/Button/ButtonRightIcon";
import "./Hero.css";
import HeroImage from "../../assets/images/hero-center.png";
import PotText from "../../assets/images/pot-text.png";
import RightSide from "../../assets/images/right-side.png";
import { useHistory  } from "react-router-dom";

const Hero = () => {
	const history = useHistory();

	return (
		<div className="hero-main max-w-aut7xl mx-0 px-3 sm:pl-12 px-auto py-12 xl:px-40 lg:py-32 lg:min-h-[700px] lg:overflow-hidden">
			<div className="md:flex items-center justify-between">
				<div className="">
					<h1 className="text-4xl md:text-6xl font-bold">
						Let the Environemnt be Green{" "}
						<img
							className="pb-2 inline-block w-8 h-12"
							src={PotText}
							alt=""
							srcSet=""
						/>
					</h1>

					{/* $20 row*/}
					<div className="flex justify-start space-x-4 items-center">
						<p className="pr-3 my-3 text-green-600 font-bold text-2xl border-r-2 border-gray-300">
							$20
						</p>
						<p className="text-gray-600 font-medium text-sm md:py-12 py-6">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repellat nulla eos optio nulla eos optio
						</p>
					</div>
					{/* Buy button */}
					<div className="flex max-w-200  justify-start space-x-4">
						<ButtonRightIcon
							onClick={history.push("/Shopping")}
							text="Buy Now"
							className=""
						>{""}
								</ButtonRightIcon>
						<ButtonLeftIcon
							text="Upload Photo"
							onClick={history.push("/care")}
						>
							{""}</ButtonLeftIcon>
					</div>
				</div>

				<div className=" ">
					<img
						className="mx-auto max-w-[340px] relative md:-mt-12 lg:mx-40 mt-12 "
						src={HeroImage}
						alt=""
					/>
				</div>
				<div className="md:hidden  lg:flex lg:space-x-0 lg:space-y-10 flex items-center md:flex-col space-x-3 flex-shrink lg:-left-20 lg:relative">
					<img
						src={RightSide}
						className="hidden lg:inline-block absolute max-w-[300px] h-48 -right-60 -top-40 transition"
						alt=""
						srcSet=""
					/>

					<div className="flex lg:flex-row lg:px-5 lg:space-y-0 flex-col space-y-3 justify-between w-44 items-center lg:relative  bg-gray-50 text-gray-900 py-4 px-0 rounded-lg">
						<BeakerIcon className="w-8 h-8 text-orange-600 bg-orange-200 rounded-full p-1" />
						<div className="text-center lg:text-left">
							<div className="text-sm font-bold text-gray-900">
								Watering
							</div>
							<div className="lg:pt-1 text-sm font-semibold text-gray-500">
								1 in 7 days
							</div>
						</div>
					</div>
					<div className="flex lg:flex-row lg:px-5 lg-space-y-0 flex-col lg:text-left text-center space-y-3 justify-between w-44 items-center bg-gray-50 text-gray-900 py-4 px-0 rounded-lg">
						<SunIcon className="w-8 h-8 text-orange-600 bg-orange-200 rounded-full p-1" />
						<div className="inline-block text-sm">
							<div className=" font-bold text-gray-900">
								Sunlight
							</div>
							<div className="lg:pt-1 font-semibold text-gray-500">
								4 to 5 hours
							</div>
						</div>
					</div>
					<div className="flex  lg:flex-row lg:px-5 lg-space-y-0  flex-col justify-between space-y-3 lg:text-left text-center w-44 items-center bg-gray-50 text-gray-900 py-4 px-0 rounded-lg">
						<CloudIcon className="w-8 h-8 text-orange-600 bg-orange-200 rounded-full p-1" />
						<div className=" text-sm inline-block">
							<div className=" font-bold text-gray-900">
								Humidity
							</div>
							<div className="pt-1 font-semibold text-gray-500">
								86% regular
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
