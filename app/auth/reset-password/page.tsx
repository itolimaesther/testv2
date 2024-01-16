"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/CustomLinkButton";

function page() {
	const [password, setPassword] = useState("");
	return (
		<div className="flex items-center min-h-screen ">
			<div className="flex-1 mx-auto bg-white rounded-lg shadow-xl">
				<div className="flex min-h-screen flex-col md:flex-row">
					<div className="relative h-full md:h-auto md:w-1/2">
						<Image
							className="absolute object-cover w-full h-full"
							src="/loginbg.svg"
							alt="Login Image"
							width={300}
							height={300}
						/>
						<div className="absolute text-center top-[30rem] left-1/2 -translate-x-1/2 -translate-y-1/2">
							<h1 className="text-[40px] font-bold text-white ">
								Welcome To Vendu
							</h1>
							<p className="text-white text-[17px] ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore{" "}
							</p>
						</div>
					</div>

					<div className="right_section">
						<div className="w-full my-8">
							<div className="flex flex-row justify-between sm:mb-28 mb-20">
								<Image
									src="/vendulogo.svg"
									alt="Vendu Logo"
									width={150}
									height={150}
								/>
							</div>
							<div className="w-[428px] text-center m-auto ">
								<h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
									Set new password
								</h1>
								<p className="text-[#828282] text-md ">
									Fill in the registration data. It will take a couple of
									minutes. All you need is an e-mail.
								</p>
								<div className="flex items-center justify-between rounded-sm bg-[#ECF0F4] p-4 my-8 ">
									<p>olubusayodavid@gmail.com</p>
								</div>

								<div>
									<label className="text-left block mt-4 text-sm">
										Password:
									</label>
									<input
										className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder=""
										type="password"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<div>
									<label className="text-left block mt-4 text-sm">
										Confirm Password:
									</label>
									<input
										className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder=""
										type="password"
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
									Save Password
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
