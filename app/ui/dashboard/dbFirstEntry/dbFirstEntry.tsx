import CustomPlusButton from "../../../../components/CustomPlusButton";
import Image from "next/image";
import { GoPlus } from "react-icons/go";

const dbFirstEntry = () => {
	return (
		<>
			<div className="py-6 px-8 ">
				<div className="bg-white flex items-center p-6 rounded-xl w-full">
					<div className="flex flex-col lg:flex-row gap-4 xl:gap-[60px] w-full">
						<div className="max-w-[280px] pe-3">
							<p className="text-[#36B3A5] font-semibold pb-4 lg:pb-[30px]">
								Complete Registration
							</p>
							<p className="text-sm text-[#4F4F4F]">
								Please complete your registration to access all available
								features to your current plan.
							</p>
						</div>
						<div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-[60px] mt-8 lg:mt-0">
							<div className="max-w-[280px]  ">
								<div className="flex gap-2 xl:gap-4">
									<div className="self-start">
										<Image
											src="/profileBriefcase.svg"
											height={20}
											width={20}
											alt="Profie icon with Briefcase"
										/>
									</div>
									<div className="border-b border-[#D2D1D7] self-start">
										<p className="pb-2 text-[#1C1939] font-semibold">
											Update your profile
										</p>
										<p className="pb-4 text-[#1C1939] text-[12px] max-w-[243px]">
											Please provide documents to verify your personal
											informmation.
										</p>
										<button className="text-[#0170E3] font-bold text-[13px] mb-2">
											Continue
										</button>
									</div>
								</div>
							</div>
							<div className="max-w-[280px] flex gap-2 xl:gap-4 mt-8 md:mt-0">
								<div>
									<Image
										src="/buildingIcon.svg"
										height={20}
										width={20}
										alt="Profie icon with Briefcase"
									/>
								</div>
								<div className=" border-b border-[#D2D1D7] ">
									<p className="pb-2 text-[#1C1939] font-semibold">
										Setup your Store
									</p>
									<p className="pb-4 text-[#1C1939] text-[12px] max-w-[243px]">
										Please provide the phone number linked to your BVN for
										verification
									</p>
									<button className="text-[#0170E3] font-bold text-[13px] mb-2">
										Continue
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center pt-20 lg:pt-[90px]">
					<Image
						src={"/Group-empty.svg"}
						width={102}
						height={100}
						alt="Empty state"
					/>
					<p className="text[#4F4F4F] text-sm font-semibold pt-6 pb-[10px]">
						No activities yet
					</p>
					<p className="text-[#828282] text-[12px]">
						You have not carried out any activities{" "}
					</p>
					<p className="text-[#828282] text-[12px]">on the platform.</p>
					<p className="text-[#828282] text-[12px] pb-6">
						click the button below to create your store
					</p>
					<CustomPlusButton
						href={"#"}
						icon={<GoPlus />}
						label={"Setup Online Store"}
						bgColor={"[#0170E3]"}
						textColor="white"
					/>
				</div>
			</div>
		</>
	);
};

export default dbFirstEntry;
