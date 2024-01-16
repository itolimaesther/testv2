"use client";

import React from "react";
import EmptyCard from "./EmptyCard";
import SelectedBankCard from "./SelectedBankCard";

function PaymentChannel() {
	return (
		<div className="grid grid-cols-1 py-5 xl:grid-cols-1 p-5 xl:gap-4 mt-3 dark:bg-gray-900 bg-white rounded-lg">
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
				<h3 className=" text-lg text-[#36B3A5]">Payment Channels</h3>
				<p>All transaction details are here</p>
				<EmptyCard />
				{/* <SelectedBankCard /> */}
			</div>
		</div>
	);
}

export default PaymentChannel;
