import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface SubProps {
	label: string;
	href: string;
	key: string;
	icon?: string;
}

interface BaseData {
	name: string;
	imgSrc: string;
}

export interface SidebarLink {
	name: string;
	href?: string;
	icon: IconType;
}

export interface ReportLink extends BaseData {
	color?: string;
	amount?: number;
	orders?: number;
	visitors?: number;
	percentage?: number;
	total?: number;
}

export interface Financial extends BaseData {
	amount?: number;
	customers?: number;
}

export interface RecentOrder {
	orderId: string;
	customer: string;
	created: string;
	status: string;
	qty: number;
}

export interface SalesRecords extends RecentOrder {
	totalAmount: number;
	amountRecieved: number;
	payment: string;
	action: string;
}

export type LineUserDataProps = {
	labels: string[];
	datasets: {
		data: number[];
		borderColor: string;
		borderWidth: number;
		fill: boolean;
		// backgroundColor: string;
	}[];
};

export type ChartOptionsProps = {
	scales: {
		x: {
			grid: {
				display: boolean;
			};
		};
		y: {
			grid: {
				display: boolean;
			};
			ticks: {
				stepSize: number;
				max: number;
				callback?: (value: number, index: number, values: number[]) => string;
			};
		};
	};
	elements: {
		point: {
			radius: number;
		};
	};
};

export type PieUserDataProps = {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		backgroundColor: string[];
		hoverOffset: number;
	}[];
};

export type PieOptionsProps = {
	scales: {
		x: {
			grid: {
				display: boolean;
			};
		};
		y: {
			grid: {
				display: boolean;
			};
			ticks: {
				stepSize: number;
				max: number;
				callback?: (value: number, index: number, values: number[]) => string;
			};
		};
	};
	elements: {
		point: {
			radius: number;
		};
	};
};

export type InvoiceStatus = "Post paid" | "Paid" | "Overdue";

export type InvoiceData = {
	id: string;
	customer: string;
	date: string;
	dueDate: string;
	amount: number;
	method: string;
	status: InvoiceStatus;
};

export type CollectionStatus = "Active" | "Out of Stock";

export type CollectionData = {
	id: string;
	name: string;
	number: number;
	date: string;
	status: CollectionStatus;
};

export type TransactionStatus = "Success" | "Failed";

export type TransactionHistory = {
	id: string;
	description: string;
	date: string;
	amount: number;
	method: string; // You might want to create a more specific type for payment methods
	status: TransactionStatus;
};

export type TemplateFooterProps = {
	title: string;
	href: string;
};

export type Product = {
	title: string;
	href: string;
	price: number;
	desc: string;
};

export type TemplateFooterLinks = {
	href: string;
	key: string;
	label: string;
	text?: string;
};

export type TemplateFooterItem = {
	title: string;
	links?: TemplateFooterLinks[];
};

export type LinkItem = {
	href: string;
	label: string;
	color?: string;
};
