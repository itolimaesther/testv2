"use client";

import React from "react";

type CreateCouponProps = {
	isOpen: boolean;
	onClose: () => void;
};

function CreateCoupon({ isOpen, onClose }: CreateCouponProps) {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg w-[583px]">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-semibold">Create Coupon</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<p className="text-sm text-gray-400 mb-4">
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatu
				</p>
				<form>
					{/* Inputs and Select elements */}
					<div className="mb-4">
						{/* Input 1 */}
						<label
							htmlFor="input1"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Campaign Name
						</label>
						<input
							type="text"
							id="input1"
							placeholder="Input 1"
							className="w-full border rounded-md p-2 mb-2"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="input1"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Campaign Chanels
						</label>

						<select className="w-full border rounded-md p-2 mb-2">
							<option selected>Select campaign chanel</option>
							<option value="Email Only">Email Only</option>
							<option value="SMS Only">SMS Only</option>
							<option value="Email and SMS">Email and SMS</option>
							{/* Add options here */}
						</select>
					</div>
					<div className="mb-4">
						<label
							htmlFor="input1"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Customers
						</label>
						<select className="w-full border rounded-md p-2 mb-2">
							<option>Select 2</option>
							{/* Add options here */}
						</select>
					</div>
					<div className="mb-4">
						<label
							htmlFor="input1"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Start Date
						</label>
						<input type="date" className="w-full border rounded-md p-2 mb-2" />
					</div>
					<div className="mb-4">
						<label
							htmlFor="input1"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Campaign Message
						</label>
						<input
							type="text"
							id="input1"
							placeholder="Expense description"
							className="w-full border rounded-md p-2 mb-2"
						/>
					</div>
					<div
						className="border-dashed border-2 mb-4 border-gray-300 p-4 rounded-md cursor-pointer"
						// onDrop={handleFileDrop}
						onDragOver={(e) => e.preventDefault()}
					>
						<p className="text-gray-500 text-center mb-2">
							Drag & Drop your file here
						</p>
						<p className="text-sm">file name</p>
					</div>

					{/* Buttons */}
					<div className="flex justify-end">
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
		// <div
		// 	// id="defaultModal"
		// 	// aria-hidden="true"
		// 	className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
		// >
		// 	<div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
		// 		{/* <!-- Modal content --> */}
		// 		<div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
		// 			{/* <!-- Modal header --> */}
		// 			<div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
		// 				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
		// 					Add Product
		// 				</h3>
		// 				<button
		// 					type="button"
		// 					className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
		// 					onClick={onClose}
		// 				>
		// 					<svg
		// 						aria-hidden="true"
		// 						className="w-5 h-5"
		// 						fill="currentColor"
		// 						viewBox="0 0 20 20"
		// 						xmlns="http://www.w3.org/2000/svg"
		// 					>
		// 						<path
		// 							fill-rule="evenodd"
		// 							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
		// 							clip-rule="evenodd"
		// 						></path>
		// 					</svg>
		// 					<span className="sr-only">Close modal</span>
		// 				</button>
		// 			</div>
		// 			{/* <!-- Modal body --> */}
		// 			<form action="#">
		// 				<div className="grid gap-4 mb-4 sm:grid-cols-2">
		// 					<div>
		// 						<label
		// 							htmlFor="name"
		// 							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
		// 						>
		// 							Name
		// 						</label>
		// 						<input
		// 							type="text"
		// 							name="name"
		// 							id="name"
		// 							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
		// 							placeholder="Type product name"
		// 							required
		// 						/>
		// 					</div>
		// 					<div>
		// 						<label
		// 							htmlFor="brand"
		// 							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
		// 						>
		// 							Brand
		// 						</label>
		// 						<input
		// 							type="text"
		// 							name="brand"
		// 							id="brand"
		// 							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
		// 							placeholder="Product brand"
		// 							required
		// 						/>
		// 					</div>
		// 					<div>
		// 						<label
		// 							htmlFor="price"
		// 							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
		// 						>
		// 							Price
		// 						</label>
		// 						<input
		// 							type="number"
		// 							name="price"
		// 							id="price"
		// 							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
		// 							placeholder="$2999"
		// 							required
		// 						/>
		// 					</div>
		// 					<div>
		// 						<label
		// 							htmlFor="category"
		// 							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
		// 						>
		// 							Category
		// 						</label>
		// 						<select
		// 							id="category"
		// 							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
		// 						>
		// 							<option selected>Select category</option>
		// 							<option value="TV">TV/Monitors</option>
		// 							<option value="PC">PC</option>
		// 							<option value="GA">Gaming/Console</option>
		// 							<option value="PH">Phones</option>
		// 						</select>
		// 					</div>
		// 					<div className="sm:col-span-2">
		// 						<label
		// 							htmlFor="description"
		// 							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
		// 						>
		// 							Description
		// 						</label>
		// 						<textarea
		// 							id="description"
		// 							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
		// 							placeholder="Write product description here"
		// 						></textarea>
		// 					</div>
		// 				</div>
		// 				<button
		// 					type="submit"
		// 					className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
		// 				>
		// 					<svg
		// 						className="mr-1 -ml-1 w-6 h-6"
		// 						fill="currentColor"
		// 						viewBox="0 0 20 20"
		// 						xmlns="http://www.w3.org/2000/svg"
		// 					>
		// 						<path
		// 							fill-rule="evenodd"
		// 							d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
		// 							clip-rule="evenodd"
		// 						></path>
		// 					</svg>
		// 					Add new product
		// 				</button>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default CreateCoupon;
