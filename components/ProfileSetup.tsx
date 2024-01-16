"use client";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdCameraAlt } from "react-icons/md";
import { Switch } from "@headlessui/react";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

function ProfileSetup() {
	const [agreed, setAgreed] = useState(false);

	return (
		<div className="grid grid-cols-1 py-5 xl:grid-cols-1 p-5 xl:gap-4 mt-3 dark:bg-gray-900 bg-white rounded-lg">
			<div className="xl:flex items-start  gap-x-4 mb-4">
				<div className="xl:w-2/12 flex flex-col justify-center items-center md:w-full mt-6 xl:mt-0 lg:col-auto ">
					<div className="relative flex items-center justify-center w-40 h-40 rounded-full  bg-gray-200 border border-gray-300 ">
						<MdCameraAlt className="absolute text-gray-400 text-lg top-2 right-5 " />
						<IoPersonSharp className="text-gray-400 text-6xl" />
					</div>
					<p className="text-gray-300 mt-3">Upload Photo</p>
				</div>
				<div className="xl:w-10/12 md:w-full mt-6 xl:mt-0 lg:col-auto ">
					<h4 className="text-[#36B3A5]">Personal Information</h4>
					<form action="#" method="POST" className="mx-auto mt-16 sm:mt-5">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									First name
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Last name
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="phone-number"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Phone number
								</label>
								<div className="relative mt-2.5">
									<div className="absolute inset-y-0 left-0 flex items-center">
										<label htmlFor="country" className="sr-only">
											Country
										</label>
										<select
											id="country"
											name="country"
											className="
												h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-5 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
										>
											<option>US</option>
											<option>CA</option>
											<option>EU</option>
										</select>
									</div>
									<input
										type="tel"
										name="phone-number"
										id="phone-number"
										autoComplete="tel"
										className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Email
								</label>
								<div className="mt-2.5">
									<input
										type="email"
										name="email"
										id="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="xl:flex gap-x-4 items-start">
				<div className="xl:w-2/12 flex flex-col justify-center items-center md:w-full mt-6 xl:mt-0 lg:col-auto ">
					<div className="relative flex items-center justify-center w-40 h-40 rounded-full  bg-gray-200 border border-gray-300 ">
						<MdCameraAlt className="absolute text-gray-400 text-lg top-2 right-5 " />
						<FaCamera className="text-gray-400 text-6xl" />
					</div>
					<p className="text-gray-300 mt-3">Upload Logo</p>
				</div>
				<div className="xl:w-10/12 md:w-full mt-6 xl:mt-0 lg:col-auto ">
					<h4 className="text-[#36B3A5]">Business Information</h4>
					<form action="#" method="POST" className="mx-auto mt-16 sm:mt-5">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<label
									htmlFor="business-name"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Business name
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="business-name"
										id="business-name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="business-description"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Business Description
								</label>
								<div className="mt-2.5">
									<textarea
										name="business-description"
										id="business-description"
										rows={4}
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										defaultValue={""}
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="phone-number"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									How long have you been in business?
								</label>
								<select
									id="how-long"
									name="how-long"
									className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								>
									<option>Select</option>
									<option>Select</option>
									<option>Select</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="phone-number"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									What’s your staff strength?
								</label>
								<select
									id="staff-strength"
									name="staff-strength"
									className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								>
									<option>Select</option>
									<option>Select</option>
									<option>Select</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="phone-number"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Do you have a physical store?
								</label>
								<select
									id="physical-store"
									name="physical-store"
									className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								>
									<option>Select</option>
									<option>Select</option>
									<option>Select</option>
								</select>
							</div>
						</div>

						<div className="mt-8">
							<div className="xl:flex xl:justify-between">
								<h4 className="text-[#36B3A5]">Physical Address</h4>
								<Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
									<Switch.Label className="text-sm leading-6 text-gray-600">
										show on website
									</Switch.Label>
									<div className="flex h-6 items-center">
										<Switch
											checked={agreed}
											onChange={setAgreed}
											className={classNames(
												agreed ? "bg-indigo-600" : "bg-gray-200",
												"flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											)}
										>
											<span className="sr-only">Agree to policies</span>
											<span
												aria-hidden="true"
												className={classNames(
													agreed ? "translate-x-3.5" : "translate-x-0",
													"h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
												)}
											/>
										</Switch>
									</div>
								</Switch.Group>
							</div>
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="first-name"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Address
									</label>
									<div className="mt-2.5">
										<input
											type="address"
											name="address"
											id="address"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="country"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Country
									</label>
									<select
										id="country"
										name="country"
										className="block mt-2.5 w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									>
										<option>Select</option>
										<option>Select</option>
										<option>Select</option>
									</select>

									{/* <div className="absolute inset-y-0 left-0 flex items-center">
											
										</div> */}
								</div>
								<div>
									<label
										htmlFor="city"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										City
									</label>
									<div className="mt-2.5">
										<input
											type="city"
											name="city"
											id="city"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="state"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										State
									</label>
									<select
										id="state"
										name="state"
										className="block mt-2.5 w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									>
										<option>Select</option>
										<option>Select</option>
										<option>Select</option>
									</select>
								</div>
							</div>
						</div>

						<div className="mt-8">
							<div className="xl:flex xl:justify-between">
								<h4 className="text-[#36B3A5]">Physical Address</h4>
								<Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
									<Switch.Label className="text-sm leading-6 text-gray-600">
										show on website
									</Switch.Label>
									<div className="flex h-6 items-center">
										<Switch
											checked={agreed}
											onChange={setAgreed}
											className={classNames(
												agreed ? "bg-indigo-600" : "bg-gray-200",
												"flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											)}
										>
											<span className="sr-only">Agree to policies</span>
											<span
												aria-hidden="true"
												className={classNames(
													agreed ? "translate-x-3.5" : "translate-x-0",
													"h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
												)}
											/>
										</Switch>
									</div>
								</Switch.Group>
							</div>
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Email Address
									</label>
									<div className="mt-2.5">
										<input
											type="email"
											name="email"
											id="email"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="phone-number"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Phone number
									</label>
									<div className="relative mt-2.5">
										<div className="absolute inset-y-0 left-0 flex items-center">
											<label htmlFor="country" className="sr-only">
												Country
											</label>
											<select
												id="country"
												name="country"
												className="
												h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-5 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
											>
												<option>US</option>
												<option>CA</option>
												<option>EU</option>
											</select>
										</div>
										<input
											type="tel"
											name="phone-number"
											id="phone-number"
											autoComplete="tel"
											className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="facebook"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Facebook
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="facebook"
											id="facebook"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="whatsapp"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Whatsapp
									</label>
									<div className="relative mt-2.5">
										<div className="absolute inset-y-0 left-0 flex items-center">
											<label htmlFor="country" className="sr-only">
												Country
											</label>
											<select
												id="country"
												name="country"
												className="
												h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-5 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
											>
												<option>US</option>
												<option>CA</option>
												<option>EU</option>
											</select>
										</div>
										<input
											type="tel"
											name="whatsapp"
											id="whatsapp"
											autoComplete="tel"
											className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="instagram"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Instagram
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="instagram"
											id="instagram"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="twitter"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Twitter
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="twitter"
											id="twitter"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="domain-name"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Domain Name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="domain-name"
											id="domain-name"
											placeholder="example.vendu.store"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="has-domain"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Already have a domain name?
									</label>
									<div className="mt-2.5 relative">
										<input
											type="text"
											name="has-domain"
											id="has-domain"
											placeholder="Enter domain name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
										<button
											type="submit"
											className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-gray-400 rounded-lg border border-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
										>
											Link Domain
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-8">
							<div className="xl:flex xl:justify-between">
								<h4 className="text-[#36B3A5]">Business Policy and Terms</h4>
								<Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
									<Switch.Label className="text-sm leading-6 text-gray-600">
										show on website
									</Switch.Label>
									<div className="flex h-6 items-center">
										<Switch
											checked={agreed}
											onChange={setAgreed}
											className={classNames(
												agreed ? "bg-indigo-600" : "bg-gray-200",
												"flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											)}
										>
											<span className="sr-only">Agree to policies</span>
											<span
												aria-hidden="true"
												className={classNames(
													agreed ? "translate-x-3.5" : "translate-x-0",
													"h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
												)}
											/>
										</Switch>
									</div>
								</Switch.Group>
							</div>
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div className="sm:col-span-2">
									<label
										htmlFor="return-policy"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Return Policy
									</label>
									<div className="mt-2.5">
										<textarea
											name="return-policy"
											id="return-policy"
											placeholder="Let your customers know your return policy"
											rows={4}
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="terms-conditions"
										className="block text-sm font-semibold leading-6 text-gray-900"
									>
										Terms and Condition
									</label>
									<div className="mt-2.5">
										<textarea
											name="terms-conditions"
											id="terms-conditions"
											placeholder="Let your customers know your terms and conditions"
											rows={4}
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ProfileSetup;
