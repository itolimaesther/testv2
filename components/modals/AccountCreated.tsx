import React from "react";
import Button from "../CustomLinkButton";

function AccountCreated() {
	return (
		<div className="bg-white w-56 lg:w-80 m-auto ">
			<h2 className=" text-[#0170E3] font-bold text-lg ">Congratulations</h2>
			<p className="text-[#828282] text-md">
				Your Vendu account has been created successfully
			</p>
			<p className="mt-8 font-bold text-md ">You are ready </p>
			<Button
				type="button"
				href="/dashboard"
				title="Continue to Dashboard"
				variant="btn_blue"
			/>
		</div>
	);
}

export default AccountCreated;
