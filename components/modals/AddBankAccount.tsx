import React from "react";

type EmptyCardProps = {
	isOpen: boolean;
	onClose: () => void;
};

function AddBankAccount({ isOpen, onClose }: EmptyCardProps) {
	if (!isOpen) {
		return null;
	}
	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg w-[583px]">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-semibold">Add Bank Account</h2>
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
							htmlFor="card-number"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Select Bank
						</label>
						<select className="w-full border rounded-md p-2 mb-2">
							<option selected>Select Bank</option>
							<option value="Bank 1">Bank 1</option>
							<option value="Bank 2">Bank 2</option>
							<option value="Bank 3">Bank 3</option>
							{/* Add options here */}
						</select>
					</div>

					<div className="mb-4">
						{/* Input 1 */}
						<label
							htmlFor="account-number"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Account Number
						</label>
						<input
							type="text"
							id="account-number"
							placeholder="Account Number"
							className="w-full border rounded-md p-2 mb-2"
						/>
					</div>
					<div className="mb-4">
						{/* Input 1 */}
						<label
							htmlFor="account-name"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Account Name
						</label>
						<input
							type="text"
							id="account-name"
							placeholder="Account Name"
							className="w-full border rounded-md p-2 mb-2"
						/>
					</div>

					{/* Buttons */}
					<div className="flex justify-end">
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
						>
							Save Bank Account
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddBankAccount;
