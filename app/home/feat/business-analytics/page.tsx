"use client";

import React from "react";
import Image from "next/image";
import CTA from "../../../../components/CTA";
import CanHelpSection from "../../../../components/CanHelpSection";
import CustomHeroSection from "../../../../components/CustomHeroSection";

const helpSectionsData = [
	{
		title: "Display your products",
		description:
			"Keep all your data, documents, and tasks in one place for easy access.",

		altText: "world-icon",
		bgColor: "#C4E8E8",
		iconSvg: "/arrowright.svg",
	},
	{
		title: "Run marketing ads",
		description:
			"Make data-driven decisions with our robust analytics and reporting features.",

		altText: "world-icon",
		bgColor: "#C3DAFC",
		iconSvg: "/arrowright.svg",
	},
	{
		title: "Customize your website",
		description:
			"Reduce expenses and maximize profits with efficient processes.",

		altText: "world-icon",
		bgColor: "#bac5e9",
		iconSvg: "/arrowright.svg",
	},
	{
		title: "Grow your business effortlessly",
		description:
			"Grow your business without worrying about outgrowing your management software.",

		altText: "world-icon",
		bgColor: "#FFD8DD",
		iconSvg: "/arrowright.svg",
	},
];

function page() {
	const sectionData = {
		title: "Business Analytics",
		description:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur",
		buttonText: "Get started",
		imageUrl: "/hero3.svg",
		altText: "businesshero",
	};

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
				<CustomHeroSection {...sectionData} />
				<section className="lg:px-20 py-14 md:py-14 px-14 md:px-14">
					<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-8">
						{helpSectionsData.map((section, index) => (
							<CanHelpSection
								key={index}
								title={section.title}
								description={section.description}
								altText={section.altText}
								bgColor={section.bgColor}
								iconSvg={section.iconSvg}
							/>
						))}
					</div>
				</section>
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
			<section className="lg:px-20 py-14 md:py-14 px-14 md:px-14 bg-[#fff]">
				<CTA />
			</section>
		</div>
	);
}

export default page;
