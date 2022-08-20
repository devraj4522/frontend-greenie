import React from "react";

const Gallery = () => {
	return (
		<>
			<section className="overflow-hidden text-gray-700 mx-0 px-6 sm:px-12">
				<div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
					<div
						className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
						style={{ paddingTop: "42.857143%" }}
					>
						<iframe
							className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
							src="https://www.youtube.com/embed/J1LW1Nz0pd4?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
							allowFullScreen=""
							data-gtm-yt-inspected-2340190_699="true"
							id="240632615"
						></iframe>
					</div>
				</div>
			</section>
			<section className="overflow-hidden text-gray-700 mx-0 px-6 sm:px-12">
				<div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="flex flex-wrap w-1/2">
							<div className="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TTECFDXOOYI6ZH4QPHPR7MUCSY.jpg"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="https://assets.vogue.com/photos/5c8ff73ac712fa2de624c06d/master/w_1600,c_limit/01-boys-with-plants-book.jpg"
								/>
							</div>
							<div className="w-full p-1 md:p-2">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="https://assets.vogue.com/photos/5c8ff7a65554f22d24a5e4aa/master/w_1600,c_limit/02-boys-with-plants-book.jpg"
								/>
							</div>
						</div>
						<div className="flex flex-wrap w-1/2">
							<div className="w-full p-1 md:p-2">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="https://jamaicacottageshop.com/wp-content/uploads/2020/09/indoor-plants-cabin-cottage-tiny-house-post-beam-interior-design.jpg"
								/>
							</div>
							<div className="w-1/2 p-1 md:p-2">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="https://www.gannett-cdn.com/presto/2021/09/30/USAT/3cfbf41b-1edf-409e-b46c-a21000db34a8-hero_Getty_ImagesDelamine_Donson.png?width=660&height=372&fit=crop&format=pjpg&auto=webp"
								/>
							</div>
							<div className="w-full p-1 md:p-2">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="https://www.gardeningknowhow.com/wp-content/uploads/2008/12/repotting-1.jpg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
