import React from "react";
import Image from "next/image";
import CatBeautySec from "../../../../components/beauty/CatBeautySec";
import PlanBeautySec from "../../../../components/beauty/PlanBeautySec";
import SalesBeautySec from "../../../../components/beauty/SalesBeautySec";
import GrowSection from "../../../../components/GrowSection";

function Beauty() {
	return (
		<div>
			<section className="relative isolate bg-white lg:px-20 py-14 md:py-14 px-14 md:px-14 dark:bg-gray-900 ">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[38rem]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-[#3C60D5] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath: "circle(50% at 50% 50%)",
						}}
					/>
				</div>
				<div className="container mx-auto">
					<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
						<div className="mr-auto place-self-center lg:col-span-7">
							<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
								Grow your fashion business with vendu.
							</h1>
							<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
								Sell your fashion products online, market your business, send
								invoices and manage your business records like a pro.
							</p>
							<a
								href="#"
								className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center btn_blue btn_start hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
							>
								Get started
							</a>
						</div>
						<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
							<Image
								src="/beauty.svg"
								alt="who-we-are"
								width={50}
								height={50}
								className="w-full"
							/>{" "}
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-80rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-[#36B3A5] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath: "circle(50% at 50% 50%)",
						}}
					/>
				</div>
			</section>
			<section className="bg-white dark:bg-gray-900">
				<CatBeautySec />
			</section>

			<section className="bg-[#FCDDEC]">
				<SalesBeautySec />
			</section>

			<section className="bg-white dark:bg-gray-900">
				<h3 className="text-center text-[30px] lg:text-[36px] md:text-[30px] py-20 leading-10 font-bold ">
					Choose a Plan That Fits Your Business Goals
				</h3>
				<PlanBeautySec />
			</section>

			<section className="lg:px-20 py-14 md:py-14 px-14 md:px-14 bg-[#fff]">
				<GrowSection />
			</section>
		</div>
	);
}

export default Beauty;
