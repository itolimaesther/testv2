import React from "react";
import Image from "next/image";

type HelpSectionProps = {
	title: string;
	description: string;
	imageUrl?: string;
	altText: string;
	bgColor: string;
	iconSvg?: string;
};

function CanHelpSection({
	title,
	description,
	imageUrl,
	altText,
	bgColor,
	iconSvg,
}: HelpSectionProps) {
	const sectionStyle = {
		backgroundColor: bgColor,
	};

	return (
		<div className="can-help-grid " style={sectionStyle}>
			{iconSvg && (
				<Image
					src={iconSvg}
					alt={altText}
					width={50}
					height={50}
					className="lg:w-18 w-12 md:w-18 lg:flex mr-8 "
				/>
			)}

			<div className="lg:w-10/12 text-center lg:text-justify md:text-justify">
				<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
					{description}
				</p>
			</div>
			{imageUrl && (
				<Image
					src={imageUrl}
					alt={altText}
					width={50}
					height={50}
					className="lg:w-28 w-20 md:w-24"
				/>
			)}
		</div>
	);
}

export default CanHelpSection;
