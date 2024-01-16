import React, { useState, useEffect } from "react";
import Image from "next/image";

type AccordionpProps = {
	children: React.ReactNode;
	title: string;
	id: string;
	active?: boolean;
};

function FaqAccordion({
	children,
	title,
	id,
	active = false,
}: AccordionpProps) {
	const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

	return (
		<div
			className={`py-5 mb-6 lg:mb-10 shadow px-5 border rounded-lg ${accordionOpen} ? "border-sky-600" ? "border-white"`}
		>
			<h2>
				<button
					className="flex  items-center justify-between w-full text-left font-semibold py-2"
					onClick={(e) => {
						e.preventDefault();
						setAccordionOpen(!accordionOpen);
					}}
					aria-expanded={accordionOpen}
					aria-controls={`accordion-text-${id}`}
				>
					<span>{title}</span>
					{accordionOpen ? (
						<Image
							src="/activearrow.svg"
							alt="arrowactive"
							width={50}
							height={50}
							className=""
						/>
					) : (
						<Image
							src="/arrow.svg"
							alt="arrow"
							width={50}
							height={50}
							className=""
						/>
					)}
				</button>
				<div
					id={`accordion-text-${id}`}
					role="region"
					aria-labelledby={`accordion-title-${id}`}
					className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
						accordionOpen
							? "grid-rows-[1fr] opacity-100"
							: "grid-rows-[0fr] opacity-0"
					}`}
				>
					<div className="overflow-hidden">
						<p className="pb-3">{children}</p>
					</div>
				</div>
			</h2>
		</div>
	);
}

export default FaqAccordion;
