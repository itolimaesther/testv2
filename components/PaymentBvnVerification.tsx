import React from "react";

function PaymentBvnVerification() {
	return (
		<div className="grid grid-cols-1 py-5 xl:grid-cols-1 p-5 xl:gap-4 mt-3 dark:bg-gray-900 bg-white rounded-lg">
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
				<h3 className=" text-lg text-[#36B3A5]">BVN Verification</h3>
				<p>All transaction details are here</p>

				<form action="" className="mt-8">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label
								htmlFor="bvn"
								className="block text-sm leading-6 text-gray-900"
							>
								Enter BVN
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									id="bvn"
									placeholder="Enter Bvn"
									className="w-full border rounded-md p-2 mb-2"
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default PaymentBvnVerification;
