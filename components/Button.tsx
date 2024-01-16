"use client";

import React from "react";

type ButtonProps = {
	text: string;
	color?: string;
	onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => {
	const buttonClasses = `bg-[${color}] hover:bg-[${color}] text-white font-bold py-2 px-4 rounded`;

	return (
		<button className={buttonClasses} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
