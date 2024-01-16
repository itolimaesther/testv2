import React from "react";
import Image from "next/image";

type CustomSectionProps = {
	title: string;
	description: string;
	buttonText: string;
	imageUrl: string;
	altText: string;
};

function CustomHeroSection({
	title,
	description,
	buttonText,
	imageUrl,
	altText,
}: CustomSectionProps) {
	return (
		<div className="container mx-auto">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
						{title}
					</h1>
					<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
						{description}
					</p>
					<a
						href="#"
						className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center btn_blue btn_start hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
					>
						{buttonText}
					</a>
				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<Image
						src={imageUrl}
						width={300}
						height={300}
						alt={altText}
						className="w-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default CustomHeroSection;
