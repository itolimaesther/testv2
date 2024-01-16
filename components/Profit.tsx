"use client";

import React from "react";

function Profit() {
	return (
		<div className="rounded-lg w-full bg-white p-4">
			<h3 className=" text-2xl ">Profit Analysis</h3>
			<p className="text-gray-20">Analysis of revenue versus expenses</p>

			<div className="py-8">
				<div className="xl:flex justify-start items-center space-x-56 mb-3">
					<p>Opening Stock</p>
					<p className=" font-semibold ">230</p>
				</div>

				<div className="xl:flex justify-start items-center space-x-56 mb-3">
					<p>Opening Stock</p>
					<p className=" font-semibold ">230</p>
				</div>
				<div className="xl:flex justify-start items-center space-x-56 mb-3">
					<p>Opening Stock</p>
					<p className=" font-semibold ">230</p>
				</div>
				<div className="xl:flex justify-start items-center space-x-56 mb-3">
					<p>Opening Stock</p>
					<p className=" font-semibold ">230</p>
				</div>
			</div>
			<div className="rounded-lg w-full bg-white p-4 shadow-2xl ">
				<table className="w-full text-left mb-8">
					<thead>
						<tr>
							<th className="text-gray-700 font-bold uppercase py-2">
								Revenue
							</th>
							<th className="text-gray-700 font-bold uppercase py-2"></th>
							<th className="text-gray-700 font-bold uppercase py-2">
								Expenses
							</th>
							<th className="text-gray-700 font-bold uppercase py-2"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="py-4 text-gray-700">Sales Product</td>
							<td className="py-4 text-gray-700">1</td>
							<td className="py-4 text-gray-700">$100.00</td>
							<td className="py-4 text-gray-700">$100.00</td>
						</tr>
						<tr>
							<td className="py-4 text-gray-700"></td>
							<td className="py-4 text-gray-700">2</td>
							<td className="py-4 text-gray-700">$50.00</td>
							<td className="py-4 text-gray-700">$100.00</td>
						</tr>
						<tr>
							<td className="py-4 text-gray-700"></td>
							<td className="py-4 text-gray-700">3</td>
							<td className="py-4 text-gray-700">$75.00</td>
							<td className="py-4 text-gray-700">$225.00</td>
						</tr>
						<tr className="border-t-2 border-gray-300 pt-8">
							<td className="py-4 text-gray-700">Total Revenue</td>
							<td className="py-4 text-gray-700">₦ 7,240,500</td>
							<td className="py-4 text-gray-700">Total Expenses</td>
							<td className="py-4 text-gray-700">₦ 4,660,000</td>
						</tr>
					</tbody>
				</table>
				<div className="flex mb-8 w-full bg-[#C4E8E8] font-semibold text-gray-900 p-3 rounded-lg justify-between">
					<div className="mr-2">Subtotal:</div>
					<div className="text-end ">$425.00</div>
				</div>
			</div>
		</div>
	);
}

export default Profit;
