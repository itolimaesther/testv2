import { FOOTER_LINKS } from "../../../../constants/index";
import { FOOTER_DETAILS } from "../../../../constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="relative flexCenter bg-transparent py-36">
			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-[#3C60D5] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath: "circle(50% at 50% 50%)",
					}}
				/>
			</div>
			<div className="padding-container max-container flex w-full flex-col gap-14">
				<div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
					<div className=" lg:w-60 ">
						{FOOTER_DETAILS.map((item) => (
							<>
								<Link href="/" className="mb-10">
									<Image src={item.logo} alt="logo" width={180} height={100} />
								</Link>

								<div className="text-gray-30">
									<p className="lg:my-8 ">{item.about}</p>
									<span>{item.phone}</span> or
									<span>
										{" "}
										<a href={`mailto: ${item.email}`}>{item.email}</a>{" "}
									</span>
								</div>
							</>
						))}
					</div>

					<div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
						{FOOTER_LINKS.map((columns) => (
							<FooterColumn title={columns.title}>
								<ul className="regular-14 flex flex-col gap-4 text-gray-30">
									{columns.links.map((link) => (
										<Link href={link.href} key={link.key}>
											{link.label}
										</Link>
									))}
								</ul>
							</FooterColumn>
						))}
					</div>
				</div>
			</div>
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
		</footer>
	);
};

type FooterColumnProps = {
	title: string;
	children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
	return (
		<div className="flex flex-col gap-5">
			<h4 className="bold-18 whitespace-nowrap">{title}</h4>
			{children}
		</div>
	);
};

export default Footer;
