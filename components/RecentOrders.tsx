'use client'
import {useState} from 'react'
import { recentOrdersData } from "@/constants"
import CustomCard from "./CustomCard"
import Image from 'next/image'

type RecentOrdersProps = {
	dataAvailable: boolean;
};

function RecentOrders({ dataAvailable }: RecentOrdersProps) {
	// const [dataAvailable, setDataAvailable] = useState(false)
	return (
		<>
			{dataAvailable ? (
				<div className="w-full bg-white rounded-lg">
					<CustomCard width="full" shadow="lg">
						<div className="w-full">
							<p className="text-[#36B3A5] font-semibold pt-6 ps-4 pb-0">
								Recent Orders
							</p>
							<div className="overflow-auto w-full">
								<table className="w-full  border-spacing-y-5  border-separate">
									<thead>
										<tr className="bg-gray-200">
											<th className="p-2 text-start text-[#333333] text-sm min-w-[80px]">
												Order ID
											</th>
											<th className="p-2 text-start text-[#333333] text-sm">
												Customer
											</th>
											<th className="p-2 text-start text-[#333333] text-sm">
												Created
											</th>
											<th className="p-2 text-start text-[#333333] text-sm">
												Status
											</th>
											<th className="p-2 text-start text-[#333333] text-sm">
												Qty
											</th>
										</tr>
									</thead>
									<tbody>
										{recentOrdersData.map((order, index) => (
											<tr key={index} className="">
												<td className="text-sm  ps-2 p-1 whitespace-nowrap">
													{order.orderId}
												</td>
												<td className="text-sm p-1 whitespace-nowrap flex items-center gap-1">
													<div className="h-6 w-6 rounded-full bg-[#C4E8E8]"></div>
													<span>{order.customer}</span>
												</td>
												<td className="text-sm p-1 whitespace-nowrap">
													{order.created}
												</td>
												<td
													className={`text-[10px] p-1 text-center rounded w-[67px] ${
														order.status === "Pending"
															? "text-[#FE3653] bg-[#FFD8DD]"
															: order.status === "Processing"
															? "text-[#FFAE42] bg-[#FFF6D9]"
															: order.status === "Shiped"
															? "text-[#0170E3] bg-[#D9EBFF]"
															: ""
													}`}
												>
													{order.status}
												</td>
												<td className="text-sm p-1 ps-4">{order.qty}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</CustomCard>
				</div>
			) : (
				<div className="w-full bg-white rounded-lg h-full">
					<p className="text-[#36B3A5] font-semibold pt-6 ps-4 pb-0">
						Recent Orders
					</p>

					<div className="p-4">
						<div className="overflow-auto w-full ">
							<table className="w-full  border-spacing-y-5  border-separate">
								<thead>
									<tr className="bg-gray-200">
										<th className="p-2 text-start text-[#333333] text-sm min-w-[80px]">
											Order ID
										</th>
										<th className="p-2 text-start text-[#333333] text-sm">
											Customer
										</th>
										<th className="p-2 text-start text-[#333333] text-sm">
											Created
										</th>
										<th className="p-2 text-start text-[#333333] text-sm">
											Status
										</th>
										<th className="p-2 text-start text-[#333333] text-sm">
											Qty
										</th>
									</tr>
								</thead>
							</table>

							<div className="flex flex-col justify-center items-center w-full h-[full] pt-[88px] ">
								<Image
									src={"/emptynote.svg"}
									height={75}
									width={65}
									alt="Empty NOte with pen"
								/>
								<p className="text-[#4F4F4F] text-sm pt-5 font-semibold">
									No Orders yet
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default RecentOrders