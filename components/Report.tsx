'use client'
import {useState} from 'react'
import CustomCard from "./CustomCard"
import Image from "next/image"
import { reportLinks } from "@/constants"


type DataAvaliableProps = {
	dataAvailable: boolean;
};

function Report({ dataAvailable }: DataAvaliableProps) {
	// const [dataAvailable, setDataAvailable] = useState(false)
	return (
		<>
			{dataAvailable ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-6 w-full mt-4">
					{reportLinks.map((link, index) => (
						<div key={index} className="">
							<CustomCard height="[108px]">
								<div className="  p-4 lg:p-0 xl:p-4">
									<div className="flex  justify-between gap-10">
										<h3 className="text-[#8E95A9] font-medium text-sm">
											{link.name}
										</h3>
										<div
											style={{ color: link.color }}
											className="font-bold pr-4"
										>
											{link.total !== undefined && (
												<>
													{link.total > 0 && "+"}
													{link.total}%
												</>
											)}
										</div>
									</div>
									<div className="flex justify-between items-center gap-4 mt-1">
										<div className="text-[#1C2A53] font-bold text-2xl lg:text-xl xl:text-2xl leading-10">
											{link.amount && <p>₦{link.amount}</p>}
											{link.orders && <p>{link.orders}</p>}
											{link.visitors && <>{link.visitors}k</>}
											{link.percentage && <>{link.percentage}%</>}
										</div>

										<Image
											src={link.imgSrc}
											alt={link.name}
											height={30}
											width={80}
											className="h-[30px] w:h-[79px] "
										/>
									</div>
								</div>
							</CustomCard>
						</div>
					))}
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-6 w-full mt-4">
					{reportLinks.map((link, index) => (
						<div key={index} className="">
							<CustomCard height="[108px]">
								<div className="  p-4 lg:p-0 xl:p-4">
									<div className="flex  justify-between gap-10">
										<h3 className="text-[#8E95A9] font-medium text-sm">
											{link.name}
										</h3>
										<div className="font-bold pr-4">0%</div>
									</div>
									<div className="flex justify-between items-center gap-4 mt-1">
										<div className="text-[#1C2A53] font-bold text-2xl lg:text-xl xl:text-2xl leading-10">
											{link.amount && <p>₦0</p>}
											{link.orders && <p>0</p>}
											{link.visitors && <>0k</>}
											{link.percentage && <>0%</>}
										</div>

										<p>----------</p>
									</div>
								</div>
							</CustomCard>
						</div>
					))}
				</div>
			)}
		</>
	);
}

export default Report