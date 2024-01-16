"use client";

import React from "react";
import TermsSection from "../../../components/terms/TermsSection";

function Privacy() {
	return (
		<div>
			<section className=" bg-white lg:px-20 py-14 md:py-14 px-14 md:px-14 dark:bg-gray-900 ">
				<div className="text-center mb-8 lg:mb-12">
					<h3 className="text-center rounded-lg px-5 py-4 bg-[#0170E3] text-white text-[30px] lg:text-[36px] md:text-[30px] my-8 leading-10 font-bold ">
						Privacy Policy
					</h3>
				</div>
				<TermsSection />
			</section>
		</div>
	);
}

export default Privacy;
