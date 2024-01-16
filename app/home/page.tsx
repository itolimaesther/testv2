"use client";

import React, { useState } from "react";
import Image from "next/image";
import CanHelpSection from "../../components/CanHelpSection";
import HomeFeaturesSection from "../../components/HomeFeaturesSection";
import HomeServiceSection from "../../components/HomeServiceSection";
import HomeExperienceSection from "../../components/HomeExperienceSection";
import HomePriceSection from "../../components/HomePriceSection";
import GrowSection from "../../components/GrowSection";
import Button from "../../components/CustomLinkButton";

const navigation = [
	{ name: "Product", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

const helpSectionsData = [
	{
		title: "Take your business online",
		description:
			"With vendu, you get a custom e-commerce website and domain name for your business.",
		imageUrl: "/Glyph4.svg",
		altText: "world-icon",
		bgColor: "#C4E8E8", // Specify different background colors here
	},
	{
		title: "Take your business online",
		description:
			"With vendu, you get a custom e-commerce website and domain name for your business.",
		imageUrl: "/Glyph5.svg",
		altText: "world-icon",
		bgColor: "#C3DAFC", // Specify different background colors here
	},
	{
		title: "Take your business online",
		description:
			"With vendu, you get a custom e-commerce website and domain name for your business.",
		imageUrl: "/Glyph2.svg",
		altText: "world-icon",
		bgColor: "#bac5e9", // Specify different background colors here
	},
	{
		title: "Take your business online",
		description:
			"With vendu, you get a custom e-commerce website and domain name for your business.",
		imageUrl: "/Glyph6.svg",
		altText: "world-icon",
		bgColor: "#FFD8DD", // Specify different background colors here
	},
];

const Home = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
				<div className="grid max-w-screen-xl justify-center sm:text-center text-center lg:text-left lg:px-4 pb-14 lg:mx-auto mx-0 lg:m-0 lg:mb-48 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
					<div className="mr-auto place-self-center lg:col-span-6 md:col-span-3">
						<h1 className="hero-big-text md:text-5xl xl:text-[48px] xl:leading-[58px] dark:text-white">
							Business management solution for business owners who want to grow
							fast
						</h1>
						<p className="max-w-2xl mb-6 font-[400] text-gray-500 lg:mb-8 md:text-lg md:leading-[21px] lg:text-[18px] dark:text-gray-400">
							Get a custom e-commerce shop, manage your sales/expense/customer
							records, send invoices and receipts and grow your sales.
						</p>
						<a href="#" className="btn_blue btn_start">
							Get Started
						</a>
					</div>
					<div className="hidden lg:mt-0 lg:w-full md:w-3/4 lg:col-span-6 md:col-span-3 lg:flex">
						<Image
							src="/hero1.svg"
							alt="camp"
							width={50}
							height={50}
							className="w-full"
						/>
					</div>
				</div>

				<div className="linear-bg p-2 lg:p-4 text-center mx-auto bg-white border-gray-200 rounded-[51px] shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
					<div className="block lg:flex items-center justify-center md:flex-row w-full">
						<div className="hidden lg:flex w-2/5 lg:relative">
							<Image
								src="/hero8.svg"
								alt="camp"
								width={50}
								height={50}
								className="hidden lg:block w-96 relative lg:absolute -bottom-0 xl:-bottom-[172px] lg:-bottom-[172px]"
							/>
						</div>
						<div className="w-full lg:w-3/5 p-8 lg:px-14 lg:py-12 text-center lg:text-justify">
							<h5 className="mb-2 text-xl lg:text-[24px] lg:leading-[34px] font-bold text-white dark:text-white">
								Grow your business, boost productivity, and achieve Success!
							</h5>
							<p className="max-w-full lg:max-w-2xl mb-6 font-[400] text-white lg:mb-8 md:text-lg md:leading-[21px] lg:text-[16px] dark:text-gray-400">
								Our simple to use business app is designed to help you grow,
								simplify and optimize every aspect of your business. Say goodbye
								to the chaos of spreadsheets and outdated tools, and say hello
								to efficiency, simplicity, and growth. Whether you're a small
								startup or a large enterprise, our solution is tailored to meet
								your unique needs.
							</p>
							<a href="#" className="btn_green btn_start">
								Get Started
							</a>
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
			<section className="lg:px-20 py-14 md:py-14 px-14 md:px-14 bg-gray-200">
				<h3 className="text-center text-[30px] lg:text-[36px] md:text-[30px] my-8 leading-10 font-bold ">
					How <span className="text-blue-500">Vendu</span> can help you
				</h3>
				<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-8">
					{helpSectionsData.map((section, index) => (
						<CanHelpSection
							key={index}
							title={section.title}
							description={section.description}
							imageUrl={section.imageUrl}
							altText={section.altText}
							bgColor={section.bgColor}
						/>
					))}
				</div>
			</section>
			<section className="relative isolate lg:px-20 py-14 md:py-14 px-14 md:px-14 bg-white">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[15rem]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-[#3C60D5] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath: "circle(50% at 50% 50%)",
						}}
					/>
				</div>
				<h3 className="text-center text-[30px] lg:text-[36px] md:text-[30px] my-8 leading-10 font-bold ">
					Features To Take Your Business To The Next Level
				</h3>
				<HomeFeaturesSection />
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-70rem)]"
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
			<section className="lg:px-20 py-14 md:py-14 px-14 md:px-14 bg-gray-200">
				<h3 className="text-center text-[30px] lg:text-[36px] md:text-[30px] my-8 leading-10 font-bold ">
					We’ve Got You Covered{" "}
				</h3>
				<HomeServiceSection />
			</section>
			<section className="lg:px-20 py-14 md:py-14 px-14 md:px-14 bg-[#000000]">
				<h3 className="text-center text-white text-[30px] lg:text-[36px] md:text-[30px] my-8 leading-10 font-bold ">
					Just Hear Them Share Their Experiences
				</h3>
				<HomeExperienceSection />
			</section>

			<section className="lg:px-20 py-14 md:py-14 px-14 md:px-14 bg-white">
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

export default Home;
