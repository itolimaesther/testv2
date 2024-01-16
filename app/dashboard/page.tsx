'use client'
import { useState } from 'react';
import Report from "../../components/Report";
import { CiLink } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";
import CustomCard from "../../components/CustomCard";
import Image from "next/image";
import { financials } from "../../constants";
import RecentOrders from "../../components/RecentOrders";
import ReportChart from "../../components/ReportChart";
import { HiMiniChevronDown } from "react-icons/hi2";


const data = [
	{ value: '24k', label: 'Customers' },
	{ value: '3.5k', label: 'Total Products' },
	{ value: '2.5k', label: 'Stock Products' },
	{ value: '0.5k', label: 'Out of Stock' },
	{ value: '250k', label: 'Revenue' },
  ];


const handleCopyClick = async () => {
	
    try {
      // Select the text to copy
      const textToCopy: string = 'bit.ly/5555'; // Replace this with your dynamic text

      // Copy text to clipboard
      await navigator.clipboard.writeText(textToCopy);

      // Optionally, you can provide some feedback to the user
      alert('Text copied to clipboard!');
    } catch (error) {
      console.error('Error copying text to clipboard:', error);
    }
  };



function Dashboard() {
	const [dataAvailable, setDataAvailable] = useState<boolean>(false);
	const [selectedIdx, setSelectedIdx] = useState(0);
	const [copied, setCopied] = useState(false);



	const copyText = (entryText: string) => {
		navigator.clipboard.writeText(entryText);
		setCopied(true);
	
		// Reset the "Copied" state after 5 seconds
		setTimeout(() => {
		  setCopied(false);
		}, 5000);
	  };


	return (
		
		<div className="w-full flex flex-col items-center px-8 xl:px-6 py-6">
			<div className="h-10 bg-white w-full rounded-xl ">
				<div className="flex gap-[6px] items-center py-2 w-full justify-end h-full pe-[34px]">
					<p className="text-[12px] text-[#BDBDBD]">Copy Store Link:</p>
					<CiLink className="text-[#4F4F4F] text-2xl" />
					<button onClick={() => copyText("bit.ly/5555")} className="flex gap-2">
						<span className="text-[#4F4F4F] text-[12px] underline">bit.ly/5555</span>
						<FaRegCopy className="text-[#4F4F4F]" />
					</button>

					{copied && <div className="text-[12px] text-green-500">Copied!</div>}
				</div>
			</div>
		
			
			<Report dataAvailable={dataAvailable} />

			<div className="grid grid-cols-1 lg:grid-cols-2 w-full mt-[27px] gap-6">
				<div className=" bg-[#022E86] rounded-lg">
					<CustomCard
						width="full"
						backgroundColor="[#022E86]"
						height="[230px]"
						justifyContent="start"
						alignItems="start"
					>
						<div className="flex  gap-6 xl:gap-[83px] h-full">
							<div className="hidden md:flex justify-center items-center h-[90px] w-[90px] rounded-full bg-[#254b97]">
								<svg
									width="29"
									height="31"
									viewBox="0 0 29 31"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.5335 2.89301C17.6667 2.72392 17.9147 2.70143 18.0762 2.84381L19.4577 4.06209L15.1074 9.5H17.9888L21.1472 5.55195L23.6255 7.73733C23.7779 7.87175 23.7956 8.10309 23.6652 8.25905L22.6284 9.5H25.5447C26.2857 8.41839 26.1167 6.93422 25.1136 6.04976L19.5644 1.15624C18.4341 0.159575 16.6986 0.316937 15.7662 1.50064L9.4643 9.5H12.3287L17.5335 2.89301ZM3.875 8.75C3.25368 8.75 2.75 9.25368 2.75 9.875C2.75 10.4963 3.25368 11 3.875 11H23.375C26.0673 11 28.25 13.1826 28.25 15.875V25.625C28.25 28.3173 26.0673 30.5 23.375 30.5H5.375C2.6826 30.5 0.5 28.3173 0.5 25.625V9.875C0.5 8.01104 2.01104 6.5 3.875 6.5H10.355L8.56766 8.75H3.875ZM19.25 21.125C19.25 21.7463 19.7537 22.25 20.375 22.25H23.375C23.9963 22.25 24.5 21.7463 24.5 21.125C24.5 20.5037 23.9963 20 23.375 20H20.375C19.7537 20 19.25 20.5037 19.25 21.125Z"
										fill="#E9F5FE"
									/>
								</svg>
							</div>
							<div>
								<div>
									<p className="text-[#FFFFFF] font-bold text-[32px]">
										{dataAvailable ? (
											<span>₦ 333,874.98</span>
										) : (
											<span>₦ 0</span>
										)}
									</p>
									<p className="text-[#F2F2F2] font-medium">Wallet Balance</p>
									<div className="flex items-center gap-1">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15.3337 4L9.00033 10.3333L5.66699 7L0.666992 12"
												stroke="#4BDE97"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M11.333 4H15.333V8"
												stroke="#4BDE97"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p className="text-[#4BDE97]">
											{dataAvailable ? <span>4.07%</span> : <span>0%</span>}
										</p>
										<p className="text-[#B9B9B9]">This Month</p>
									</div>
									<div className="flex gap-4 mt-6">
										<div className="flex flex-col gap-2">
											<div className="flex items-center gap-2">
												<svg
													width="16"
													height="9"
													viewBox="0 0 16 9"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M8 8.33325L16 0.333253H0L8 8.33325Z"
														fill="#31AA51"
													/>
												</svg>
												<p className="text-[#B9B9B9]">Inflow</p>
											</div>
											<p className="text-[#FFFFFF]">
												{dataAvailable ? (
													<span>₦ 136,874.98</span>
												) : (
													<span>₦ 0</span>
												)}
											</p>
										</div>
										<div className="flex flex-col gap-2">
											<div className="flex items-center gap-2">
												<svg
													width="16"
													height="9"
													viewBox="0 0 16 9"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M8 0.666748L16 8.66675H0L8 0.666748Z"
														fill="#F22621"
														fill-opacity="0.87"
													/>
												</svg>

												<p className="text-[#B9B9B9]">Outflow</p>
											</div>
											<p className="text-[#FFFFFF]">
												{dataAvailable ? (
													<span>₦ 136,874.98</span>
												) : (
													<span>₦ 0</span>
												)}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</CustomCard>
				</div>

				<CustomCard width="full" height="[230px]">
					<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
						{financials.map((item, index) => (
							<div>
								<CustomCard
									height="[80px]"
									justifyContent="start"
									alignItems="start"
									shadow="lg"
								>
									<div key={index} className="flex gap-4 lg:gap-1 xl:gap-4">
										<div className="">
											<Image
												src={item.imgSrc}
												alt={item.name}
												height={20}
												width={20}
											/>
										</div>
										<div>
											<p className="text-[#828282] text-[10px]">{item.name}</p>
											<p>
												{item.amount !== undefined ? (
													<span className="text-[#333333] font-semibold">
														{dataAvailable ? (
															<span>₦{item.amount.toFixed(2)}</span>
														) : (
															<span>₦ 0</span>
														)}
													</span>
												) : (
													<>
														{" "}
														{dataAvailable ? (
															<>{item.customers}</>
														) : (
															<span>0</span>
														)}{" "}
													</>
												)}
											</p>
											<div className="flex items-center gap-1">
												<svg
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M15.3337 4L9.00033 10.3333L5.66699 7L0.666992 12"
														stroke="#4BDE97"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M11.333 4H15.333V8"
														stroke="#4BDE97"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<p className="text-[#4BDE97] text-[10px]">
													{dataAvailable ? <span>4.07%</span> : <span>0%</span>}
												</p>
												<p className="text-[#828282] text-[10px]">This Month</p>
											</div>
										</div>
									</div>
								</CustomCard>
							</div>
						))}
					</div>
				</CustomCard>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 mt-6 w-full gap-6 h-[487px]">
				<div className="w-full ">
					<RecentOrders dataAvailable={dataAvailable} />
				</div>
				<div className="w-full bg-white rounded-lg px-4 h-full">
					<p className="text-[#36B3A5] font-semibold pt-6  pb-1">Reports</p>
					<div className="flex items-center gap-4 pb-6">
						<p className="text-[#8B909A] text-sm">Last one month</p>
						<HiMiniChevronDown className="text-[#8B909A]" />
					</div>

					<div className="flex w-full justify-between py-4 gap-2">
						{data.map((item, index) => (
							<div
								key={index}
								onClick={() => setSelectedIdx(index)}
								className={`cursor-pointer ${
									index === selectedIdx
										? "border-b-2 border-blue-500"
										: " border-b-2 border-gray-100"
								}`}
							>
								<p className="text-[#23272E] font-bold text-lg md:text-2xl">
									{dataAvailable ? item.value : <span>0</span>}
								</p>
								<p className="text-[#8B909A] text-[10px] md:text-[13px] font-medium">
									{item.label}
								</p>
							</div>
						))}
					</div>
					<ReportChart dataAvailable={dataAvailable} />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
