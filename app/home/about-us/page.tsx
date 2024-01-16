"use client";

import React from "react";
import Image from "next/image";
import GrowSection from "../../../components/GrowSection";
import AboutVisionSec from "../../../components/about/AboutVisionSec";

function About() {
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
					<div>
						<h3 className="text-center text-[30px] lg:text-[36px] md:text-[30px] my-8 leading-10 font-bold ">
							Who we are
						</h3>
						<p className="text-center lg:px-56 mb-6 font-[400] text-gray-500 lg:mb-8 md:text-lg md:leading-[32px] lg:text-[18px] dark:text-gray-400">
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem
							quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim
							ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
							sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas
							sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo
							enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
							fugit, sed quia consequuntur ma
						</p>
					</div>
					<div className="my-24">
						<Image
							src="/whoweare.svg"
							alt="who-we-are"
							width={50}
							height={50}
							className="w-full"
						/>
					</div>
					<div className="my-24">
						<h3 className="text-center text-[30px] lg:text-[36px] md:text-[30px] my-8 leading-10 font-bold ">
							Why you should choose us
						</h3>
						<p className="text-center lg:px-56 mb-6 font-[400] text-gray-500 lg:mb-8 md:text-lg md:leading-[32px] lg:text-[18px] dark:text-gray-400">
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem
							quia voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim
							ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
							sed quia consequuntur ma
						</p>
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
				<AboutVisionSec />
			</section>
			<section className="lg:px-20 py-14 md:py-14 px-14 md:px-14 bg-[#fff]">
				<GrowSection />
			</section>
		</div>
	);
}

export default About;
