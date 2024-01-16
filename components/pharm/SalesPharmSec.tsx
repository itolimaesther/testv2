import React from "react";
import Image from "next/image";

function SalesPharmSec() {
	return (
		<div className="gap-8 items-center py-24 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:px-6 ">
			<Image
				src="/sales.svg"
				alt="camp"
				width={50}
				height={50}
				className="w-full"
			/>
			<div className="mt-4 md:mt-0">
				<h2 className="mb-4 lg:mb-12 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
					Increase your sales
				</h2>

				<p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
					fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia
					voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
				</p>

				<a
					href="#"
					className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center btn_green btn_start hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
				>
					Get started
				</a>
			</div>
		</div>
	);
}

export default SalesPharmSec;
