'use client'
import React, { useState } from 'react';
import { TfiClose } from "react-icons/tfi";
import CustomPlusButton from '../CustomPlusButton';

type AddExpenseFormProps = {
	onClose: () => void;
};

type FormData = {
	description: string;
	category: string;
	amount: string;
	status: string;
};

function AddExpenseForm({ onClose }: AddExpenseFormProps): JSX.Element {
	const [formData, setFormData] = useState<FormData>({
		description: "",
		category: "",
		amount: "",
		status: "",
	});

	const handleInputChange = (field: keyof FormData, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	return (
		<>
			<div className="flex flex-col w-full justify-center items-center">
				<div className="max-w-[583px]  flex flex-col pb-8 bg-white pt-[50px] overflow-y-auto ">
					<div className="px-4 md:px-[78px] flex-grow-1 overflow-y-auto pb-4">
						<div className="flex justify-between items-center">
							<p className="text-[#4F4F4F]  text-2xl md:text-3xl font-bold ">
								Add Expense
							</p>
							<TfiClose
								className="text-xl text-[#4F4F4F] me-0 md:me-[-20px]"
								onClick={onClose}
							/>
						</div>
						<p className="text[#828282] max-w-[80%] md:max-w-full ">
							Fill in basic information of the expense you want to add
						</p>

						<form className="mt-10 flex flex-col gap-2 ">
							<div>
								<label
									className="block text-[#131E40] text-sm mb-2  "
									htmlFor="amount"
								>
									Description
								</label>
								<input
									id={`description`}
									type="text"
									placeholder="Expense description"
									className="border border-[#BDBDBD] rounded h-[51px] w-full py-2 px-3 bg-inherit"
									value={formData.description}
									onChange={(e) =>
										handleInputChange("description", e.target.value)
									}
								/>
							</div>

							<div>
								<label
									className="block text-[#131E40] text-sm mb-2"
									htmlFor="category"
								>
									Expense Category
								</label>
								<select
									id={`category`}
									className="border border-[#BDBDBD] rounded h-[51px] w-full py-2 px-3 bg-inherit text-[#B5B5BD]"
									value={formData.category}
									onChange={(e) =>
										handleInputChange("category", e.target.value)
									}
								>
									<option value="" disabled hidden className="">
										Select expense category
									</option>
									<option value="">Select Category</option>
									<option value="1">Category 1</option>
									<option value="2">Category 2</option>
									<option value="3">Category 3</option>
								</select>
							</div>

							<div>
								<label
									className="block text-[#131E40]  text-sm  "
									htmlFor="amount"
								>
									Amount
								</label>
								<div className="border border-[#BDBDBD] flex items-center w-full pe-2 rounded-md">
									<input
										id={`amount`}
										type="text"
										placeholder="Amount"
										className=" rounded w-full py-2 px-3 bg-inherit h-[51px] outline-none flex-1"
										value={formData.amount}
										onChange={(e) =>
											handleInputChange("amount", e.target.value)
										}
									/>
								</div>
							</div>
							<div>
								<label
									className="block text-[#131E40] text-sm mb-2"
									htmlFor="category"
								>
									Payment status
								</label>
								<select
									id={`status`}
									className="border border-[#BDBDBD] rounded h-[51px] w-full py-2 px-3 bg-inherit text-[#B5B5BD] pr-8"
									value={formData.status}
									onChange={(e) => handleInputChange("status", e.target.value)}
								>
									<option value="">Select Status</option>
									<option value="1">Category 1</option>
									<option value="2">Category 2</option>
									<option value="3">Category 3</option>
								</select>
							</div>

							<div className="self-end mt-10 h-[56px]">
								<CustomPlusButton
									label={"Add Expense"}
									href={"#"}
									bgColor={"[#0170E3]"}
									height={"h-[56px]"}
									textColor="white"
									textSize={"text-[14px]"}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddExpenseForm