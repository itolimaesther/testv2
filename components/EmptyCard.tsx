"use client";

import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddBankAccount from "./modals/AddBankAccount";

function EmptyCard() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div className="mt-8">
			<p>Add beneficiary account</p>
			<div className="mt-4 py-16 px-8 w-full flex justify-center items-center flex-col xl:w-96 border-dashed border-2 border-gray-300">
				<button
					onClick={() => openModal()}
					className="xl:flex text-gray-50 gap-x-2 mb-4 xl:items-center"
				>
					<IoIosAddCircleOutline className="text-4xl" />
					<p>Add bank account</p>
				</button>
				<p className="text-xs text-gray-20">
					This is the account you can withdraw your funds to
				</p>
			</div>
			<AddBankAccount isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
}

export default EmptyCard;
