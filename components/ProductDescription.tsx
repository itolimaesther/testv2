"use client";

import React from "react";
import Image from "next/image";

function ProductDescription() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  gap-4 md:gap-8  lg:gap-4 ">
			<div>
				<Image
					src="/card-item.svg"
					height={300}
					width={300}
					alt="product"
					className="w-full"
				/>
			</div>
			<div>
				<h3 className="font-semibold">the quick fox jumps over </h3>
				<p>
					Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
					RELIT official consequent door ENIM RELIT Mollie. Excitation venial
					consequent sent nostrum met.
				</p>
				<p>
					Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
					RELIT official consequent door ENIM RELIT Mollie. Excitation venial
					consequent sent nostrum met.
				</p>
				<p>
					Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
					RELIT official consequent door ENIM RELIT Mollie. Excitation venial
					consequent sent nostrum met.
				</p>
			</div>
			<div>
				<h3 className="font-semibold">the quick fox jumps over </h3>
				<p>
					Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
					RELIT official consequent door ENIM RELIT Mollie. Excitation venial
					consequent sent nostrum met.
				</p>
				<p>
					Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
					RELIT official consequent door ENIM RELIT Mollie. Excitation venial
					consequent sent nostrum met.
				</p>
			</div>
		</div>
	);
}

export default ProductDescription;
