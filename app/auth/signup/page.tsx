"use client";

import React from "react";
import Button from "../../../components/CustomLinkButton";
import Image from "next/image";

function Signup() {
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
						<div className="w-full">
							<div className="flex flex-row justify-between sm:mb-28 mb-20">
								<Image
									src="/vendulogo.svg"
									alt="Vendu Logo"
									width={150}
									height={150}
								/>
								<div className="flex items-center">
									<p className="mr-2">Already have an account? </p>
									<Button
										type="button"
										href="/auth/login"
										title="Sign in"
										variant="btn_green"
									/>
								</div>
							</div>
							<h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
								Let's get you started
							</h1>
							<div>
								<label className="block text-sm">Business Name</label>
								<input
									type="text"
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder=""
								/>
							</div>
							<div>
								<label className="block mt-4 text-sm">Business Category</label>
								<select
									id="countries"
									className=" border w-full px-4 py-2 text-sm rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
								>
									<option selected>Select category</option>
									<option value="US">United States</option>
									<option value="CA">Canada</option>
									<option value="FR">France</option>
									<option value="DE">Germany</option>
								</select>
							</div>
							<div>
								<label className="block mt-4 text-sm">Email Address</label>
								<input
									type="email"
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder=""
								/>
							</div>
							<div>
								<label className="block mt-4 text-sm">Password</label>
								<input
									className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
									placeholder=""
									type="password"
								/>
							</div>

							<div className="mt-8 flex items-start">
								<div className="flex items-center h-5">
									<input
										id="remember"
										aria-describedby="remember"
										type="checkbox"
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
										required
									/>
								</div>
								<div className=" ml-3 text-sm">
									<label
										htmlFor="remember"
										className="text-gray-500 dark:text-gray-300"
									>
										I accept the Vendu{" "}
										<span className="text-green-600">Private Policy</span> and{" "}
										<span className="text-green-600">Terms of Use</span>
									</label>
								</div>
							</div>

							<button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
								Create Account
							</button>
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
		</div>
	);
}

export default Signup;
