"use client";

import React, { useState, useEffect } from "react";
import FaqAccordion from "../../../components/faqs/FaqAccordion";

const faqs = [
	{
		title: "What is Vendu?",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		active: false,
	},
	{
		title: "What can I do with Vendu?",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		active: false,
	},
	{
		title: "Who can use Vendu?",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		active: false,
	},
	{
		title: "Why should I use Vendu?",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		active: true,
	},
];

function Faqs() {
	return (
		<div>
			<section className=" bg-white lg:px-20 py-14 md:py-14 px-14 md:px-14 dark:bg-gray-900 ">
				<div className="text-center mb-8 lg:mb-12">
					<h3 className="text-center rounded-lg px-5 py-4 bg-[#0170E3] text-white text-[30px] lg:text-[36px] md:text-[30px] my-8 leading-10 font-bold ">
						Frequently Asked Questions
					</h3>
				</div>
				<div className="mb-8 lg:mb-20">
					<p className="mb-5 font-light text-gray-600 sm:text-xl dark:text-gray-400">
						Facilisis volutpat est velit egestas dui id ornare arcu odio. Tortor
						vitae purus faucibus ornare suspendisse sed nisi. Condimentum vitae
						sapien pellentesque habitant morbi tristique senectus et netus. Enim
						tortor at auctor urna nunc id. Dolor morbi non arcu risus quis
						varius quam quisque. Vel pharetra vel turpis nunc eget lorem. Mattis
						aliquam faucibus purus
					</p>
				</div>
				<div className="">
					{faqs.map((faq, index) => (
						<FaqAccordion
							key={index}
							title={faq.title}
							id={`faqs-${index}`}
							active={faq.active}
						>
							{faq.text}
						</FaqAccordion>
					))}
				</div>
			</section>
		</div>
	);
}

export default Faqs;
