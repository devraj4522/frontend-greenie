import React from "react";
import "./Section2.css";
import Plant1 from "../../assets/images/plant-1.png";
import Plant2 from "../../assets/images/plant-2.png";
import Plant3 from "../../assets/images/plant-3.png";
import Plant5 from "../../assets/images/plant-5.png";
import Plant4 from "../../assets/images/plant-4.png";
import Plant6 from "../../assets/images/plant-6.png";

const Section2 = () => {
	return (
		<>
			<div className="section2-main inherit max-w-aut7xl mx-0 px-6 sm:px-12">
				<div className="sm:flex block min-h-[200px] sm:justify-between items-center text-gray-50">
					<div className="sm:hidden lg:block py-12 text-center sm:text-left">
						<h4 className="font-bold text-2xl">Shop Plants</h4>
						<div className="sm:border-r-2 mt-7 sm:pr-2 border-gray-400">
							<p className="   font-semibold text-gray-300 text-md">
								Lorem, ipsum dolor sit amet consectetur odio
								necessitatibus{" "}
							</p>
						</div>
					</div>
					<div className="flex flex-row-reverse sm:flex-row sm:justify-between justify-around  sm:relative sm:items-center">
						<img
							src={Plant1}
							alt=""
							srcSet=""
							className=" sm:mt-[-40%]  w-20 h-32 sm:w-32 sm:h-60 inline-block"
						/>

						<div>
							<h4 className=" font-bold text-2xl">Herbal</h4>
							<p className="font-semibold mt-7 text-orange-500 text-md">
								Shop Now +
							</p>
						</div>
					</div>
					<div className="flex flex-row-reverse sm:flex-row sm:justify-between justify-around sm:relative items-center">
						<img
							src={Plant5}
							alt=""
							srcSet=""
							className=" sm:mt-[-40%]  w-20 h-32 sm:w-32 sm:h-64 inline-block"
						/>

						<div>
							<h4 className=" font-bold text-2xl">Purify</h4>
							<p className="font-semibold mt-7 text-orange-500 text-md">
								Shop Now +
							</p>
						</div>
					</div>
					<div className="flex flex-row-reverse sm:flex-row sm:justify-between justify-around sm:relative items-center">
						<img
							src={Plant6}
							alt=""
							srcSet=""
							className=" sm:mt-[-40%]  w-32 h-40 sm:w-32 sm:h-52 inline-block"
						/>

						<div>
							<h4 className=" font-bold text-2xl">Fruits</h4>
							<p className="font-semibold mt-7 text-orange-500 text-md">
								Shop Now +
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section2;
