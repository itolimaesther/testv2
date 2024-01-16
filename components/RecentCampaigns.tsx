"use client";

import React, { useState } from "react";
import FacebookCampaign from "./FacebookCampaign";
import EmailCampaigns from "./EmailCampaigns";
import Coupons from "./Coupons";

// type CampaignProps = {
// 	toggleDropdown: () => void;
// };

function RecentCampaigns() {
	const [showDropdown, setShowDropdown] = useState(false);

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<div className="grid grid-cols-1 pt-6 xl:grid-cols-1 xl:gap-4 dark:bg-gray-900">
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
				<h3 className=" text-lg ">Track your recent campaigns</h3>
				<p className=" text-sm text-gray-20 ">
					All transaction details are here
				</p>
				<FacebookCampaign
					toggleDropdown={toggleDropdown}
					showDropdown={showDropdown}
				/>
				<EmailCampaigns
					toggleDropdown={toggleDropdown}
					showDropdown={showDropdown}
				/>

				<Coupons toggleDropdown={toggleDropdown} showDropdown={showDropdown} />
			</div>
		</div>
	);
}

export default RecentCampaigns;
