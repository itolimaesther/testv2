"use client";

import React from "react";

type CreateCouponProps = {
	isOpen: boolean;
	onClose: () => void;
};

function CreateCouponAmount({ isOpen, onClose }: CreateCouponProps) {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed top-0 left-0 w-full h-full flex  items-center justify-center bg-gray-800 bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg w-[583px]  overflow-y-auto max-h-[80%]">
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
							Coupon Type
						</label>

						<select className="w-full border rounded-md p-2 mb-2">
							<option selected>Select expense category</option>
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
							Coupon Code
						</label>

						<input
							type="text"
							id="input1"
							placeholder="Expense description"
							className="w-full border rounded-md p-2 mb-2"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="input1"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Discount
						</label>

						<input
							type="text"
							id="input1"
							placeholder="%"
							className="w-full border rounded-md p-2 mb-2"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="input1"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Apply To
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
							Campaign Message
						</label>
						<input
							type="text"
							id="input1"
							placeholder="Expense description"
							className="w-full border rounded-md p-2 mb-2"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="input1"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Duration
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

					{/* Buttons */}
					<div className="flex justify-end">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
						>
							Save Draft
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
						>
							Create Campaign
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateCouponAmount;
