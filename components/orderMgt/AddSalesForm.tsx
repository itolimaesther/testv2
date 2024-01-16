'use client'
import React, { useState } from 'react';
import { TfiClose } from "react-icons/tfi";
import { LuCalendar } from "react-icons/lu";
import CustomPlusButton from '../CustomPlusButton';

type AddSalesFormProps = {
	onClose: () => void;
};

type Item = {
	id: number;
	description: string;
	cost: string;
	quantity: string;
};

type FormData = {
	customer: string;
	paymentMethod: string;
	salesChannel: string;
	items: Item[];
	amount: string;
	vat: string;
	shipping: string;
	discount: string;
	orderDate: string;
};

const AddSalesForm: React.FC<AddSalesFormProps> = ({ onClose }) => {
	const [formData, setFormData] = useState<FormData>({
		customer: "",
		paymentMethod: "",
		salesChannel: "",
		items: [
			{ id: 1, description: "", cost: "", quantity: "" },
			{ id: 2, description: "", cost: "", quantity: "" },
		],
		amount: "",
		vat: "",
		shipping: "",
		discount: "",
		orderDate: "",
	});

	const handleInputChange = (field: keyof FormData, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	const handleItemInputChange = (
		id: number,
		field: keyof Item,
		value: string
	) => {
		setFormData((prevData) => {
			const updatedItems = prevData.items.map((item) =>
				item.id === id ? { ...item, [field]: value } : item
			);
			return { ...prevData, items: updatedItems };
		});
	};

	const handleAddItem = (e: React.MouseEvent): void => {
		e.preventDefault();
		setFormData((prevData) => {
			const newItemId = prevData.items.length + 1;
			const updatedItems = [
				...prevData.items,
				{ id: newItemId, description: "", cost: "", quantity: "" },
			];
			return { ...prevData, items: updatedItems };
		});
	};

	const handleRemoveItem = (e: React.MouseEvent): void => {
		e.preventDefault();
		setFormData((prevData) => {
			const updatedItems = [...prevData.items];
			updatedItems.pop(); // Remove the last item
			return { ...prevData, items: updatedItems };
		});
	};

	return (
		<>
			<div className="w-full flex justify-center items-center flex-col">
				<div className="max-w-[715px] flex flex-col pb-8 bg-white pt-[50px] overflow-y-auto ">
					<div className="px-4 md:px-24 flex-grow-1 overflow-y-auto pb-8">
						<div className="flex justify-between items-center">
							<p className="text-[#4F4F4F]  text-2xl md:text-3xl font-bold ">
								Add Sales/Order Record
							</p>
							<TfiClose
								className="text-xl text-[#4F4F4F] me-[-20px]"
								onClick={onClose}
							/>
						</div>
						<p className="text[#828282]">Enter details of order</p>

						<form className="mt-8 flex flex-col">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="">
									<label
										className="block text-[#131E40] text-sm "
										htmlFor="customer"
									>
										Select Customer:
									</label>
									<select
										id="customer"
										className="border border-[#BDBDBD] rounded w-full py-2 px-3  bg-inherit"
										value={formData.customer}
										onChange={(e) =>
											handleInputChange("customer", e.target.value)
										}
									>
										{/* Options for customers */}
										<option value="customer1"></option>
										<option value="customer1">Customer 1</option>
										<option value="customer2">Customer 2</option>
									</select>
								</div>

								<div className="">
									<label
										className="block text-[#131E40] text-sm "
										htmlFor="paymentMethod"
									>
										Select Payment Method:
									</label>
									<select
										id="paymentMethod"
										className="border border-[#BDBDBD] rounded w-full py-2 px-3 bg-inherit"
										value={formData.paymentMethod}
										onChange={(e) =>
											handleInputChange("paymentMethod", e.target.value)
										}
									>
										{/* Options for payment methods */}
										<option value="method1"></option>
										<option value="method1">Payment Method 1</option>
										<option value="method2">Payment Method 2</option>
									</select>
								</div>

								<div className="mb-4">
									<label
										className="block text-[#131E40] text-sm "
										htmlFor="salesChannel"
									>
										Select Sales Channel:
									</label>
									<select
										id="salesChannel"
										className="border border-[#BDBDBD]  rounded w-full py-2 px-3 bg-inherit"
										value={formData.salesChannel}
										onChange={(e) =>
											handleInputChange("salesChannel", e.target.value)
										}
									>
										{/* Options for sales channels */}
										<option value="channel1"></option>
										<option value="channel1">Sales Channel 1</option>
										<option value="channel2">Sales Channel 2</option>
									</select>
								</div>
							</div>

							<div className="mb-4">
								{formData.items.map((item) => (
									<div key={item.id} className="mb-4">
										<div className="flex gap-4 w-full">
											<p className="font-bo text-black text-xs">{item.id}</p>

											<div className="flex-1">
												<label
													className="block text-[#131E40] text-sm  "
													htmlFor={`description${item.id}`}
												>
													Item Description:
												</label>
												<input
													id={`description${item.id}`}
													type="text"
													className="border border-[#BDBDBD] rounded w-full py-2 px-3 bg-inherit   mb-3"
													value={item.description}
													onChange={(e) =>
														handleItemInputChange(
															item.id,
															"description",
															e.target.value
														)
													}
												/>
												<div className="grid grid-cols-2 gap-4  w-full">
													<div>
														<label
															className="block text-[#131E40]  text-sm  "
															htmlFor={`cost${item.id}`}
														>
															Cost
														</label>
														<input
															id={`cost${item.id}`}
															type="text"
															className="border border-[#BDBDBD] rounded w-full py-2 px-3 bg-inherit"
															value={item.cost}
															onChange={(e) =>
																handleItemInputChange(
																	item.id,
																	"cost",
																	e.target.value
																)
															}
														/>
													</div>
													<div>
														<label
															className="block text-[#131E40] text-sm  "
															htmlFor={`quantity${item.id}`}
														>
															Quantity
														</label>
														<input
															id={`quantity${item.id}`}
															type="text"
															className="border border-[#BDBDBD] rounded w-full py-2 px-3 bg-inherit"
															value={item.quantity}
															onChange={(e) =>
																handleItemInputChange(
																	item.id,
																	"quantity",
																	e.target.value
																)
															}
														/>
													</div>
												</div>
												<div className="flex items-center  mt-4">
													<span className="border flex-1 h-[1px]"></span>
													<button
														type="button"
														onClick={handleRemoveItem}
														className="text-[12px] text-[#F21616] py-2 px-4 rounded ml-2"
													>
														Remove
													</button>
												</div>
											</div>
										</div>
									</div>
								))}
								<button
									onClick={handleAddItem}
									className="flex gap-2 text-[#36B3A5] ms-4 text-sm "
								>
									<span>+</span>
									<span className="italic cursor-pointer">Add Item</span>
								</button>
							</div>

							<div className="grid grid-cols-2 gap-4  w-full">
								<div>
									<label
										className="block text-[#131E40]  text-sm  "
										htmlFor="amount"
									>
										Amount Recieved
									</label>
									<input
										id={`amount`}
										type="text"
										className="border border-[#BDBDBD] rounded w-full py-2 px-3 bg-inherit"
										value={formData.amount}
										onChange={(e) =>
											handleInputChange("amount", e.target.value)
										}
									/>
								</div>

								<div>
									<label
										className="block text-[#131E40]  text-sm  "
										htmlFor="amount"
									>
										VAT(%)
									</label>
									<input
										id={`amount`}
										type="text"
										className="border border-[#BDBDBD] rounded w-full py-2 px-3 bg-inherit"
										value={formData.vat}
										onChange={(e) =>
											handleInputChange("amount", e.target.value)
										}
									/>
								</div>
								<div>
									<label
										className="block text-[#131E40]  text-sm  "
										htmlFor="amount"
									>
										Shipping Fee
									</label>
									<input
										id={`amount`}
										type="text"
										className="border border-[#BDBDBD] rounded w-full py-2 px-3 bg-inherit"
										value={formData.shipping}
										onChange={(e) =>
											handleInputChange("amount", e.target.value)
										}
									/>
								</div>
								<div>
									<label
										className="block text-[#131E40]  text-sm  "
										htmlFor="amount"
									>
										Discount
									</label>
									<input
										id={`amount`}
										type="text"
										className="border border-[#BDBDBD] rounded w-full py-2 px-3 bg-inherit"
										value={formData.discount}
										onChange={(e) =>
											handleInputChange("amount", e.target.value)
										}
									/>
								</div>
								<div>
									<label
										className="block text-[#131E40]  text-sm  "
										htmlFor="amount"
									>
										Order Date
									</label>
									<div className="border border-[#BDBDBD] flex items-center w-full pe-2 rounded-md">
										<input
											id={`amount`}
											type="text"
											className=" rounded w-full py-2 px-3 bg-inherit outline-none flex-1"
											value={formData.orderDate}
											onChange={(e) =>
												handleInputChange("amount", e.target.value)
											}
										/>
										<LuCalendar className="text-[#979797]" />
									</div>
								</div>
							</div>
							<div className="self-end mt-10 h-[56px]">
								<CustomPlusButton
									label={"Create Order"}
									href={"#"}
									bgColor={"[#0170E3]"}
									height={"h-[56px]"}
									width={"w-[150px]"}
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

export default AddSalesForm;
