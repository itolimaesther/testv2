import React from "react";
import Image from "next/image";

function AboutVisionSec() {
	return (
		<div className="pb-8 lg:pb-24">
			<div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:px-6 ">
				<Image
					src="/vision.svg"
					alt="camp"
					width={50}
					height={50}
					className="w-full"
				/>
				<div className="mt-4 md:mt-0">
					<h2 className="mb-4 lg:mb-12 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Our Vision
					</h2>
					<p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia
						voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
					</p>
				</div>
			</div>

			<div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:px-6">
				<div className="mt-4 md:mt-0">
					<h2 className="mb-4 text-4xl lg:mb-12 tracking-tight font-extrabold text-gray-900 dark:text-white">
						Our Mision
					</h2>
					<p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia
						voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
					</p>
				</div>
				<Image
					src="/vision.svg"
					alt="camp"
					width={50}
					height={50}
					className="w-full"
				/>
			</div>
		</div>
	);
}

export default AboutVisionSec;
