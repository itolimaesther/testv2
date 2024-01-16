"use client";
import React from "react";
import Image from "next/image";
import GrowSection from "../../../components/GrowSection";
import HomePriceSection from "../../../components/HomePriceSection";

const Price = () => {
	return (
		<div>
			<section className=" bg-white lg:px-20 py-14 md:py-14 px-14 md:px-14 dark:bg-gray-900 ">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
					<h3 className="text-center text-gray-900 text-[30px] lg:text-[36px] md:text-[30px] my-8 leading-10 font-bold ">
						Pick The Perfect Plan
					</h3>
					<p className="mb-5 font-light text-gray-600 sm:text-xl dark:text-gray-400">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium,
					</p>
				</div>
				<HomePriceSection />
			</section>

			<section className="lg:px-20 py-14 md:py-14 px-14 md:px-14 bg-[#fff]">
				<GrowSection />
			</section>
		</div>
	);
};

export default Price;
