import React from "react";
import Image from "next/image";

function HomeFeaturesSection() {
	return (
		<div className="px-6 pt-14 lg:px-8">
			<div className="overflow-hidden lg:overflow-visible lg:px-0">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
					<div className="lg:col-span-2 md:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
						<div className="hover:bg-indigo-500 lg:pr-4 ">
							<div className="lg:max-w-lg ">
								<h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
									Business Website/ E-Commerce Store
								</h1>
								<p className=" mt-1 lg:text-[16px] leading-8 text-gray-300 ">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium,
								</p>
								<a href="#" className="font-semibold text-indigo-300">
									<span className="absolute inset-0" aria-hidden="true" />
									Learn more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
						<div className="lg:pr-4 my-5">
							<div className="lg:max-w-lg">
								<h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									Business Website/ E-Commerce Store
								</h1>
								<p className="mt-1 lg:text-[16px] leading-8 text-gray-700">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium,
								</p>
								<a href="#" className="font-semibold text-indigo-600">
									<span className="absolute inset-0" aria-hidden="true" />
									Learn more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
						<div className="lg:pr-4 my-5">
							<div className="lg:max-w-lg">
								<h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									Business Website/ E-Commerce Store
								</h1>
								<p className="mt-1 lg:text-[16px] leading-8 text-gray-700">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium,
								</p>
								<a href="#" className="font-semibold text-indigo-600">
									<span className="absolute inset-0" aria-hidden="true" />
									Learn more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
						<div className="lg:pr-4 my-5">
							<div className="lg:max-w-lg">
								<h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									Business Website/ E-Commerce Store
								</h1>
								<p className="mt-1 lg:text-[16px] leading-8 text-gray-700">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium,
								</p>
								<a href="#" className="font-semibold text-indigo-600">
									<span className="absolute inset-0" aria-hidden="true" />
									Learn more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
					</div>
					<div className="lg:sticky lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<Image
							src="/hero9.svg"
							alt="world-icon"
							width={50}
							height={50}
							className="w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeFeaturesSection;
