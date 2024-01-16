import Link from "next/link";
import CustomCard from "../CustomCard";

const orderList = [
	{
		title: "Logic+ Wireless Mouse",
		color: "Black",
		sku: 302011,
		qty: 1,
		price: 13000,
		total: 13000,
		q: "x",
	},
	{
		title: "Logic+ Wireless Mouse",
		color: "Black",
		sku: 302011,
		qty: 1,
		price: 13000,
		total: 13000,
		q: "x",
	},
];

export default function OrderLIst() {
	return (
		<>
			<CustomCard width="full" justifyContent="start" padding="0">
				<div className="w-full">
					<div className="flex font-semibold gap-3  items-center my-[18px] ps-6">
						<p className="text-[#1D1F2C] text-lg ">Order List</p>
						<p className="bg-[#E9FAF7] h-8 xl:h-12 text-sm text-[#1A9882] rounded-lg   px-[10px] flex justify-center  items-center">
							+2 Items
						</p>
					</div>
					<div className="relative overflow-x-auto ">
						<table className="w-full text-sm text-start  text-gray-500 border-spacing-y-2  ">
							<thead className="text-xs text-gray-700 uppercase bg-[#F9F9FC]   h-14">
								<tr className="">
									<th
										scope="col"
										className="py-3  ps-6 text-start  min-w-[200px]"
									>
										Product
									</th>
									<th scope="col" className=" py-3 text-start min-w-[80px]">
										SKU
									</th>
									<th scope="col" className=" py-3 text-start  min-w-[80px]">
										Quantity
									</th>
									<th scope="col" className=" py-3 text-start  min-w-[100px]">
										Price
									</th>
									<th scope="col" className=" py-3 text-start  min-w-[80px]">
										Total
									</th>
									<th
										scope="col"
										className=" py-3 text-start  min-w-[20px] lowercase"
									>
										q
									</th>
								</tr>
							</thead>
							<tbody>
								{orderList.map((order, index) => (
									<tr key={index} className=" h-20  ">
										<td className="w-4 py-[19px] flex gap-2 min-w-[220px] ps-6">
											<div className="bg-[#E0E2E7] h-[44px] w-[44px] rounded-lg"></div>
											<div className="flex flex-col ">
												<span className="text-[#1D1F2C] text-sm font-medium">
													{order.title}
												</span>
												<span className="text-12px text-[#667085]">
													{order.color}
												</span>
											</div>
										</td>
										<td className="text-sm font-semibold   whitespace-nowrap text-[#0170E3]">
											{order.sku}
										</td>
										<td className="text-sm ">{order.qty}</td>
										<td className="text-sm text-[#828282] font-medium p-1 whitespace-nowrap">
											₦{order.price}
										</td>
										<td className="text-sm text-[#4F4F4F] font-medium p-1 whitespace-nowrap">
											₦{order.total}
										</td>
										<td className="text-sm p-1 font-medium text-[#F21616] whitespace-nowrap">
											<button className="cursor-pointer">{order.q}</button>
										</td>
									</tr>
								))}

								<tr className="h-20">
									<td className="text-sm py-[19px] text-[#828282] font-medium ps-6 p-1 whitespace-nowrap">
										<div className="flex gap-2 text-[#36B3A5] text-sm">
											<span>+</span>
											<Link href="#" className="italic cursor-pointer">
												Add Item
											</Link>
										</div>
									</td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#1D1F2C] font-medium  p-1 whitespace-nowrap">
										Subtotal
									</td>
									<td className="text-sm text-[#4F4F4F] font-medium p-1 whitespace-nowrap">
										₦ 63,000
									</td>
								</tr>
								<tr className="border-y border-[#F0F1F3] h-20">
									<td className="text-sm text-[#828282] font-medium ps-6 p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#1D1F2C] font-medium   py-[19px] p-1 whitespace-nowrap">
										VAT(0)%
									</td>
									<td className="text-sm text-[#4F4F4F] font-medium p-1 whitespace-nowrap">
										₦ 0
									</td>
								</tr>
								<tr className="border-y border-[#F0F1F3] h-20">
									<td className="text-sm text-[#828282] font-medium ps-6 p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#1D1F2C] font-medium   py-[19px] p-1 whitespace-nowrap">
										Shipping Rate
									</td>
									<td className="text-sm text-[#4F4F4F] font-medium p-1 whitespace-nowrap">
										₦ 3,000
									</td>
								</tr>
								<tr className="border-y border-[#F0F1F3] h-20">
									<td className="text-sm text-[#828282] font-medium ps-6 p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#1D1F2C] font-medium   py-[19px] p-1 whitespace-nowrap">
										Deposit
									</td>
									<td className="text-sm text-[#4F4F4F] font-medium p-1 whitespace-nowrap">
										₦ 66,000
									</td>
								</tr>
								<tr className="h-20">
									<td className="text-sm text-[#828282] font-medium ps-6 p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#828282] font-medium  p-1 whitespace-nowrap"></td>
									<td className="text-sm text-[#1D1F2C] font-medium   py-[19px] p-1 whitespace-nowrap">
										Total
									</td>
									<td className="text-sm text-[#333333] font-bold p-1 whitespace-nowrap">
										₦ 66,000
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</CustomCard>
		</>
	);
}
