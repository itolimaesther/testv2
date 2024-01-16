import React from "react";
import { IoPencilOutline } from "react-icons/io5";

function SelectedBankCard() {
	return (
		<div className="mt-8">
			<p>Selected bank account</p>
			<div className="mt-4 py-8 px-8 flex flex-col gap-y-4 w-full h-52 xl:w-96 bg-[#637381]">
				<div className="xl:flex text-gray-50 justify-between gap-x-2 xl:items-center">
					<p className="text-white">Tupac Shakur</p>
					<IoPencilOutline className="text-lg font-bold text-white" />
				</div>
				<div className="">
					<p className="text-xs text-white">Account Number</p>
					<p>******0880</p>
				</div>
				<div>
					<p className="text-xs text-white">Bank</p>
					<p>Zenith Bank</p>
				</div>
			</div>
		</div>
	);
}

export default SelectedBankCard;
