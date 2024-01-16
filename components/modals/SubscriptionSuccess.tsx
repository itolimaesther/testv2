import React from "react";

type SubscriptionSuccessProps = {
	isOpen: boolean;
	onClose: () => void;
};

function SubscriptionSuccess({ isOpen, onClose }: SubscriptionSuccessProps) {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg w-[483px]">
				<div className="flex justify-end items-center mb-4">
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
				<div className="flex flex-col justify-center py-3 items-center">
					<h3 className="text-[#219653] text-2xl py-8">Successful</h3>
					<p className="text-sm text-gray-400 mb-4">
						Your have successfully subscribed to the standard plan
					</p>
					<button
						type="button"
						className="flex items-center justify-center flex-shrink-0 px-7 py-3 text-sm font-medium text-white bg-blue-700 border border-gray-200 rounded-lg focus:outline-none hover:bg-blue-700 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
}

export default SubscriptionSuccess;
