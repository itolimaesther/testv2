"use client";
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { LuCalendar } from "react-icons/lu";
import CustomPlusButton from "../CustomPlusButton";

type CreateInvoiceProps = {
	onClose: () => void;
};

type FormData = {
	subject: string;
	date: string;
};

const CreateInvoice: React.FC<CreateInvoiceProps> = ({ onClose }) => {
	const [formData, setFormData] = useState<FormData>({
		subject: "",
		date: "",
	});

	const handleInputChange = (field: keyof FormData, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	return (
		<>
			<div className="w-full flex flex-col justify-center items-center">
				<div className="max-w-[583px] max-h-[520px] flex flex-col pb-8 bg-white pt-[50px] overflow-y-auto ">
					<div className="px-4 md:px-24 flex-grow-1 overflow-y-auto pb-4">
						<div className="flex justify-between items-center">
							<p className="text-[#4F4F4F]  text-2xl md:text-3xl font-bold ">
								Generate Invoice
							</p>
							<TfiClose
								className="text-xl text-[#4F4F4F] me-0 md:me-[-20px]"
								onClick={onClose}
							/>
						</div>
						<p className="text[#828282] max-w-[80%]">
							Fill in basic information of the customer you want to add
						</p>

						<form className="mt-10 flex flex-col gap-2">
							<div>
								<label
									className="block text-[#131E40] text-sm mb-2  "
									htmlFor="amount"
								>
									Invoice Subject
								</label>
								<input
									id={`amount`}
									type="text"
									placeholder="Invoice Subject"
									className="border border-[#BDBDBD] rounded h-[51px] w-full py-2 px-3 bg-inherit"
									value={formData.subject}
									onChange={(e) => handleInputChange("subject", e.target.value)}
								/>
							</div>

							<div>
								<label
									className="block text-[#131E40]  text-sm  my-4"
									htmlFor="amount"
								>
									Due Date
								</label>
								<div className="border border-[#BDBDBD] flex items-center w-full pe-2 rounded-md">
									<input
										id={`amount`}
										type="text"
										className=" rounded w-full py-2 px-3 bg-inherit h-[51px] outline-none flex-1"
										value={formData.date}
										onChange={(e) => handleInputChange("date", e.target.value)}
									/>
									<LuCalendar className="text-[#979797]" />
								</div>
							</div>
							<div className="self-end mt-10 h-[56px]">
								<CustomPlusButton
									label={"Generate Invoice"}
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
};

export default CreateInvoice;
