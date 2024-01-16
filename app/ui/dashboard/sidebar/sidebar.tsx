"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { initFlowbite } from "flowbite";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { sidebarLinks } from "@/constants";





  function Sidebar() {
		const [activeLink, setActiveLink] = useState("/dashboard");
		// const [activeLink, setActiveLink] = useState("Dashboard");

		const [openDropdown, setOpenDropdown] = useState("");

		const toggleDropdown = (name: string) => {
			setOpenDropdown((prevDropdown) => (prevDropdown === name ? "" : name));
		};

		const pathname = usePathname();
		useEffect(() => {
			setActiveLink(pathname);
			initFlowbite();
		}, [pathname]);

		return (
			<>
			
			<aside
				id="logo-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform -translate-x-full bg-white   sm:translate-x-0 "
				aria-label="Sidebar"
			>
				<Image
					src={"/logo.svg"}
					height={130}
					width={130}
					alt="Logo"
					className="absolute top-8 left-8 hidden md:block"
				/>
				<AiOutlineClose
					className="text-3xl text-red-500 absolute top-4 right-2 block md:hidden"
					data-drawer-target="logo-sidebar"
					data-drawer-toggle="logo-sidebar"
					aria-controls="logo-sidebar"
				/>

				<div className="h-full px-5 pb-4 overflow-y-auto bg-white ">
					<ul className="space-y-2">
						{sidebarLinks.map((link, index) => (
							<li key={index}>
								{Array.isArray(link.dropdown) ? (
									<button
										type="button"
										className="flex items-center p-2 w-full text-base font-normal text-gray-900 hover:text-white rounded-lg transition duration-75 group hover:bg-blue-500 "
										aria-controls={`dropdown-${link.name}`}
										onClick={() => toggleDropdown(`dropdown-${link.name}`)}
										// data-collapse-toggle={`dropdown-${link.name}`}
									>
										{link.icon && (
											<link.icon className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-white " />
										)}
										<span className="flex-1 ml-3 text-sm text-left whitespace-nowrap">
											{link.name}
										</span>
										<svg
											aria-hidden="true"
											className="w-6 h-6"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											{/* Replace with your SVG path for the dropdown icon */}
											<path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
										</svg>
									</button>
								) : (
									<a
										href={link.href}
										className={`flex items-center p-2 text-sm font-normal rounded-lg  hover:bg-blue-500 hover:text-white ${
											link.href === activeLink ? "bg-blue-500 text-white" : ""
										}`}
										// onClick={() => handleClick(link.name)}
									>
										{link.icon && (
											<link.icon className="w-6 h-6 text-gray-400 hover:text-white transition duration-75  group-hover:text-white " />
										)}
										<span className="ml-3">{link.name}</span>
									</a>
								)}
								{Array.isArray(link.dropdown) && (
									<ul
										id={`dropdown-${index}`}
										className={
											openDropdown === `dropdown-${link.name}`
												? "py-2 space-y-2"
												: "hidden"
										}
									>
										{link.dropdown.map((item, subIndex) => (
											<li key={`dropdownlist-${subIndex}`}>
												{typeof item === "string" ? (
													<span className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-blue-500 hover:text-white ">
														{item}
													</span>
												) : (
													<a
														href={item.href}
														className={`flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-blue-500 hover:text-white  ${
															item.href === activeLink
																? "bg-blue-500 text-white"
																: ""
														}`}
													>
														{item.name}
													</a>
												)}
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			</aside>
			</>
		);
	}

export default Sidebar;
