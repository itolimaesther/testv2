"use client";

import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import CreateCoupon from "./modals/CreateCoupon";

type AdvertCardsProps = {
	openModal: () => void; // Should be a function
};

function AdvertCards({ openModal }: AdvertCardsProps) {
	// console.log(openModal);
	return (
		<div className="grid grid-cols-1 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-[#DCE4FF] rounded-lg">
				<h3 className=" text-lg  mb-4">Advertise on Facebook</h3>
				<p className="text-sm w-72 mb-4">
					Easily promote your products on Facebook & Instagram
				</p>
				<div className="xl:flex xl:items-center justify-between gap-6">
					<Button text="Start now" color="#0170E3" />
					<Image
						src="/email-marketing.svg"
						alt="email marketing"
						width={50}
						height={50}
					/>
				</div>
			</div>
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-[#FCDBFF] rounded-lg">
				<h3 className=" text-lg  mb-4">Create an email/sms campaign</h3>
				<p className="text-sm w-72 mb-4">
					Easily promote your products on Facebook & Instagram
				</p>
				<div className="xl:flex xl:items-center justify-between gap-6">
					<Button text="Create a Campaign" color="#9B51E0" />
					<Image
						src="/email-marketing.svg"
						alt="email marketing"
						width={50}
						height={50}
					/>
				</div>
			</div>
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-[#BFFFE6] rounded-lg">
				<h3 className=" text-lg  mb-4">Create Coupons</h3>
				<p className="text-sm w-72 mb-4">
					Treat customers to promotions, free shipping, buy X get Y offers and
					more
				</p>
				<div className="xl:flex xl:items-center justify-between gap-6">
					<Button
						text="Create a Coupon"
						color="#27AE60"
						onClick={() => openModal()}
					/>
					<Image
						src="/offer-coupons.svg"
						alt="offer coupons"
						width={50}
						height={50}
					/>
				</div>
			</div>
		</div>
	);
}

export default AdvertCards;
