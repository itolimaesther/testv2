import React from "react";
import { VscSettings } from "react-icons/vsc";

type CustomerDetailsProps = {
	isOpen: boolean;
	onClose: () => void;
};

function CustomerDetail({ isOpen, onClose }: CustomerDetailsProps) {
	if (!isOpen) {
		return null;
	}
	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg w-[700px]">
				<div className="flex justify-between items-center ">
					<h2 className="text-lg font-semibold">Customer Details</h2>
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
					Customer Information is here
				</p>
				<div className="grid grid-cols-1 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
					<div className="xl:col-span-2 w-full md:w-full mt-6 px-5 xl:mt-0 lg:col-auto">
						<div className="xl:flex justify-center  gap-x-3">
							<div className="w-1/3 bg-gray-10 rounded-lg h-auto p-3 ">
								<h4>CF</h4>
							</div>
							<div className="xl:w-full">
								<h6 className="font-semibold">Cody Fisher</h6>
								<p className="text-gray-400">nevaeh.simmons@example.com</p>
								<p className="text-gray-400">08097867564</p>
							</div>
						</div>
					</div>
					<div className="xl:col-span-1 w-full md:w-full mt-6 py-4 px-4 xl:mt-0 lg:col-auto bg-white shadow-lg rounded-lg">
						<div>
							<div className="xl:flex justify-start items-baseline gap-x-3 mb-3">
								<VscSettings />
								<div>
									<h6 className="font-semibold">Total Orders</h6>
									<p className="text-gray-400">152</p>
								</div>
							</div>
							<div className="xl:flex justify-start items-baseline gap-x-3 mb-3">
								<VscSettings />
								<div>
									<h6 className="font-semibold">Total Orders</h6>
									<p className="text-gray-400">152</p>
								</div>
							</div>
							<div className="xl:flex justify-start items-baseline gap-x-3 mb-3">
								<VscSettings />
								<div>
									<h6 className="font-semibold">Total Orders</h6>
									<p className="text-gray-400">152</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full md:w-full mt-4 py-7 px-5 xl:mt-12 lg:col-auto shadow bg-white rounded-lg">
					<div className="xl:flex w-full justify-center items-center space-x-4 ">
						<h3 className=" text-lg w-full font-semibold ">Order History</h3>
					</div>

					<div className="relative overflow-x-auto mt-3">
						<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-10 dark:bg-gray-100 dark:text-gray-400">
								<tr>
									<th scope="col" className="px-6 py-3">
										ID
									</th>
									<th scope="col" className="px-6 py-3">
										Customer
									</th>
									<th scope="col" className="px-6 py-3">
										Status
									</th>
									<th scope="col" className="px-6 py-3">
										total
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-700 hover:bg-gray-10 dark:hover:bg-gray-600">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										#6548
									</th>
									<td className="px-6 py-4">Joseph Wheeler</td>
									<td className="px-6 py-4 text-[#FFC600]">Pending</td>

									<td className="px-6 py-4">₦999.29</td>
								</tr>
								<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-10 dark:hover:bg-gray-600">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										#6548
									</th>
									<td className="px-6 py-4">Joseph Wheeler</td>
									<td className="px-6 py-4 text-[#1EB564]">Completed</td>

									<td className="px-6 py-4">₦999.29</td>
								</tr>
								<tr className="bg-white dark:bg-gray-800 hover:bg-gray-10 dark:hover:bg-gray-100">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										#6548
									</th>
									<td className="px-6 py-4">Joseph Wheeler</td>
									<td className="px-6 py-4 text-[#FFC600]">Pending</td>

									<td className="px-6 py-4">₦999.29</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CustomerDetail;
