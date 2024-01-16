"use client";

import React, { useState } from "react";
import AddCard from "./modals/AddCard";

function TopHeader() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="flex flex-col flex-shrink-0 space-y-3 bg-white p-4 rounded-lg md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
			<button
				type="button"
				onClick={() => openModal()}
				className="flex items-center justify-center flex-shrink-0 px-7 py-3 text-sm font-medium text-white bg-blue-700 border border-gray-200 rounded-lg focus:outline-none hover:bg-blue-700 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
			>
				+ Add new
			</button>
			<AddCard isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
}

export default TopHeader;
