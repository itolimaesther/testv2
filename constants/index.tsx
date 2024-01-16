import { MdDashboard } from "react-icons/md";
import { BiSolidCart } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { FaFileInvoice } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { RiPieChartFill } from "react-icons/ri";
import { BsBarChart } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import {
	SidebarLink,
	ReportLink,
	Financial,
	RecentOrder,
	SalesRecords,
	TemplateFooterProps,
	Product,
	TransactionHistory,
	CollectionData,
	InvoiceData,
	TemplateFooterLinks,
} from "@/types";

type DropdownItem = string | { name: string; href?: string };

type SidebarLinkWithDropdown = SidebarLink & { dropdown?: DropdownItem[] };

type ProductWithId = Product & {
	id: number;
};
type CartItem = Product & {
	size: number;
};

// type TemplateFooterItem = {
// 	title: string;
// 	links?: TemplateFooterLinks[];
// };

export type FooterLink = {
	href: string;
	key: string;
	label: string;
};

type FooterItem = {
	title: string;
	links: FooterLink[];
	categories?: FooterLink[];
};

type TemplateFooterItem = FooterItem[];

// NAVIGATION
export const NAV_LINKS = [
	{ href: "/home/about-us", key: "about-us", label: "About Us" },
	{
		label: "Features",
		categories: [
			{
				href: "/home/feat/ecommerce",
				key: "ecommerce",
				icon: "/ecom.svg",
				label: "E-commerce Website",
			},
			{
				href: "/home/feat/marketing",
				key: "marketing",
				icon: "/marketing.svg",
				label: "Marketing",
			},
			{
				href: "/home/feat/invoice-and-receipt",
				key: "invoice-and-receipt",
				icon: "/invoice.svg",
				label: "Invoice and Receipt",
			},
			{
				href: "/inventory-management",
				key: "inventory-management",
				icon: "/inven.svg",
				label: "Inventory Management",
			},
			{
				href: "/home/feat/customer-management",
				key: "customer-management",
				icon: "/customer.svg",
				label: "Customer Management",
			},
			{
				href: "/home/feat/business-analytics",
				key: "business-analytics",
				icon: "/bus.svg",
				label: "Business Analytics",
			},
		],
	},
	{
		label: "Categories",
		categories: [
			{ href: "/home/cat/fashion", key: "fashion", label: "Fashion" },
			{
				href: "/home/cat/beauty",
				key: "beauty",
				label: "Beauty and Wellness",
			},
			{ href: "/home/cat/pharmacy", key: "pharmacy", label: "Pharmacy" },
		],
	},
	{ href: "/home/pricing", key: "pricing ", label: "Pricing " },
];

// CAMP SECTION
export const PEOPLE_URL = [
	"/person-1.png",
	"/person-2.png",
	"/person-3.png",
	"/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
	{
		title: "Real maps can be offline",
		icon: "/map.svg",
		variant: "green",
		description:
			"We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
	},
	{
		title: "Set an adventure schedule",
		icon: "/calendar.svg",
		variant: "green",
		description:
			"Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
	},
	{
		title: "Technology using augment reality",
		icon: "/tech.svg",
		variant: "green",
		description:
			"Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
	},
	{
		title: "Many new locations every month",
		icon: "/location.svg",
		variant: "orange",
		description:
			"Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
	},
];

// FOOTER SECTION
export const FOOTER_LINKS = [
	{
		title: "Company",
		links: [
			{ href: "/home/about-us", key: "about-us", label: "About Us" },
			{ href: "/home/pricing", key: "pricing", label: "Pricing" },
			{ href: "/home/cat/fashion", key: "categories", label: "Categories" },
		],
	},
	{
		title: "Helps",
		links: [
			{ href: "/home/faqs", key: "faqs", label: "Faqs" },
			{ href: "/home/contact", key: "contact", label: "Contact" },
		],
	},

	{
		title: "Legal",
		links: [
			{
				href: "/home/terms&conditions",
				key: "terms&conditions",
				label: "Terms & Condition",
			},
			{ href: "/home/privacy", key: "privacy", label: "Privacy" },
		],
	},
];

export const FOOTER_DETAILS = [
	{
		logo: "/vendulogo.svg",
		about:
			"Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.",
		phone: "(234) 80555-01146",
		email: "info@vendu.store",
	},
];

export const reportLinks: ReportLink[] = [
	{
		name: "Total Revenue",
		imgSrc: "/graph1.svg",
		color: "#FF8901",
		amount: 67825,
		total: +22,
	},
	{
		name: "Total Orders",
		imgSrc: "/orderGraph.svg",
		color: "#FF392B",
		orders: 920,
		total: -25,
	},
	{
		name: "Store Visitors",
		imgSrc: "/storeGraph.svg",
		color: "#279F51",
		visitors: 15.5,
		total: +49,
	},
	{
		name: "Store Conversion",
		imgSrc: "/store2Graph.svg",
		color: "#FFA000",
		percentage: 28,
		total: +1.9,
	},
];

export const financials: Financial[] = [
	{ name: "Sales this month", imgSrc: "/icon-file.svg", amount: 33874.89 },
	{ name: "New Customers", imgSrc: "/custo.svg", customers: 920 },
	{ name: "Expenses", imgSrc: "/exp.svg", amount: 13544.98 },
	{ name: "Profit", imgSrc: "/profit.svg", amount: 33874.98 },
];

export const recentOrdersData: RecentOrder[] = [
	{
		orderId: "2345",
		customer: "Guy Hawkins",
		created: "2mins ago",
		status: "Pending",
		qty: 4,
	},
	{
		orderId: "2345",
		customer: "Ralph Edwards",
		created: "5mins ago",
		status: "Pending",
		qty: 1,
	},
	{
		orderId: "2345",
		customer: "Dianne Russel",
		created: "7mins ago",
		status: "Pending",
		qty: 2,
	},
	{
		orderId: "2345",
		customer: "Leslie Alexander",
		created: "15mins ago",
		status: "Pending",
		qty: 1,
	},
	{
		orderId: "2345",
		customer: "Annette Black",
		created: "35mins ago",
		status: "Processing",
		qty: 1,
	},
	{
		orderId: "2345",
		customer: "Darlene Robertson",
		created: "2hrs ago",
		status: "Processing",
		qty: 1,
	},
	{
		orderId: "2345",
		customer: "Bessie Cooper",
		created: "2hrs ago",
		status: "Shiped",
		qty: 5,
	},
];

export const sidebarLinks: SidebarLinkWithDropdown[] = [
	{ name: "Dashboard", href: "/dashboard", icon: MdDashboard },
	{ name: "Order Management", href: "/dashboard/order-management", icon: BiSolidCart },
	{ name: "Expenses", href: "/dashboard/expenses", icon: GiWallet },
	{ name: "Wallet", href: "/dashboard/wallet", icon: BsCreditCard2FrontFill },
	{
		name: "Products",
		dropdown: [
			{ name: "Products", href: "/dashboard/products" },
			{ name: "Collections", href: "/dashboard/collections" },
		],
		icon: MdDashboard,
	},
	{ name: "Invoice", href: "/dashboard/invoice", icon: FaFileInvoice },
	{
		name: "Customer Management",
		dropdown: [
			{ name: "Customer Management", href: "/dashboard/customer-management" },
			{ name: "Subscribers", href: "/dashboard/subscribers" },
		],
		icon: FaUsers,
	},
	{ name: "Staff Management", href: "/dashboard/staff", icon: FaUsers },
	{ name: "Analytics", href: "/dashboard/analytics", icon: BsBarChart },
	{ name: "Marketing", href: "/dashboard/marketing", icon: RiPieChartFill },
	{
		name: "Settings",
		dropdown: [
			{ name: "Profile Setup", href: "/dashboard/profile-setup" },
			{ name: "Store Setup", href: "/dashboard/store-setup" },
			{ name: "Payment Setup", href: "/dashboard/payment-setup" },
			{ name: "Manage Subscription", href: "/dashboard/manage-subscription" },
			{ name: "Security", href: "/dashboard/security" },
		],
		icon: IoMdSettings,
	},
];

export const CompanyArr: TemplateFooterProps[] = [
	{
		title: "About Us",
		href: "/",
	},
	{
		title: "Categories",
		href: "/",
	},
	{
		title: "Terms & Condition",
		href: "/",
	},
	{
		title: "Privacy Policy",
		href: "/",
	},
];

export const ProductArr: Product[] = [
	{
		title: "Court Heels",
		href: "/shoe-1.svg",
		price: 9499,
		desc: "Red Silettos",
	},
	{
		title: "Court Heels",
		href: "/shoe-2.svg",
		price: 9499,
		desc: "Red Silettos",
	},
	{
		title: "Court Heels",
		href: "/shoe-3.svg",
		price: 9499,
		desc: "Red Silettos",
	},
	{
		title: "Court Heels",
		href: "/shoe-4.svg",
		price: 9499,
		desc: "Red Silettos",
	},
];

export const ProductArr2: ProductWithId[] = [
	{
		title: "Court Heels",
		href: "/shoe-1.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 1,
	},
	{
		title: "Court Heels",
		href: "/shoe-2.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 2,
	},
	{
		title: "Court Heels",
		href: "/shoe-3.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 3,
	},
	{
		title: "Court Heels",
		href: "/shoe-1.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 4,
	},
	{
		title: "Court Heels",
		href: "/shoe-2.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 5,
	},
	{
		title: "Court Heels",
		href: "/shoe-3.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 6,
	},
	{
		title: "Court Heels",
		href: "/shoe-1.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 7,
	},
	{
		title: "Court Heels",
		href: "/shoe-2.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 8,
	},
	{
		title: "Court Heels",
		href: "/shoe-3.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 9,
	},
	{
		title: "Court Heels",
		href: "/shoe-1.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 10,
	},
	{
		title: "Court Heels",
		href: "/shoe-2.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 11,
	},
	{
		title: "Court Heels",
		href: "/shoe-3.svg",
		price: 9499,
		desc: "Red Silettos",
		id: 12,
	},
];

export const CartArr: CartItem[] = [
	{
		title: "Luka 2 Basketball Shoes",
		href: "/shoe-1.svg",
		price: 9499,
		desc: " Black",
		size: 41,
	},
	{
		title: "Nike Air Max 97 SE",
		href: "/shoe-2.svg",
		price: 9499,
		desc: " White  $ Pink",
		size: 39,
	},
	{
		title: "Nike Basketball Shoes",
		href: "/shoe-3.svg",
		price: 9499,
		desc: "Orange",
		size: 41,
	},
];

export const TemplateFooter2: TemplateFooterItem = [
	{
		title: "Company Info",
		links: [
			{
				href: "/template/template-2/about-us",
				key: "about-us",
				label: "About Us",
			},
			{
				href: "/template/template-2/categories",
				key: "categories",
				label: "Categories",
			},
			{
				href: "/template/template-2/terms&condition",
				key: "terms&condition",
				label: "Terms Condition",
			},
			{
				href: "/template/template-2/Privacy Policy",
				key: "privacy&policy",
				label: "Privacy Policy",
			},
		],
	},
	// Add other items with the 'title' property as needed
];

export const Template4Footer: TemplateFooterItem = [
	{
		title: "Support",
		links: [
			{
				href: "/template/template-4/categories/sofa",
				key: "sofa",
				label: "Sofa",
			},
			{
				href: "/template/template-4/categories/arm-chair",
				key: "arm chair",
				label: "Arm Chair",
			},
			{
				href: "/template/template-4/categories/wing-chair",
				key: "Wing chair",
				label: "Wing Chair",
			},
			{
				href: "/template/template-4/categories/desk-chair",
				key: "desk chair",
				label: "Desk Chair",
			},
			{
				href: "/template/template-4/categories/wooden-chair",
				key: "help",
				label: "Wooden Chair",
			},
			{
				href: "/template/template-4/categories/park-bench",
				key: "park bench",
				label: "Park Bench",
			},
		],
	},

	{
		title: "Categories",
		links: [
			{
				href: "/template/template-4/help&support",
				key: "help and support",
				label: "Help and Support",
			},
			{
				href: "/template/template-4/terms&conditions",
				key: "terms and condition",
				label: "Terms and Conditions",
			},
			{
				href: "/template/template-4/privacy-policy",
				key: "privacy policy",
				label: "Privacy Policy",
			},
			{
				href: "/template/template-4/Help",
				key: "help",
				label: "Help",
			},
		],
	},
	// Add other items with the 'title' property as needed
];
export const salesData: SalesRecords[] = [
	{
		orderId: "2345",
		customer: "Guy Hawkins",
		created: "2mins ago",
		status: "Pending",
		qty: 4,
		totalAmount: 3000,
		amountRecieved: 100,
		payment: "Mastercard",
		action: "action",
	},
	{
		orderId: "2345",
		customer: "Ralph Edwards",
		created: "5mins ago",
		status: "Pending",
		qty: 1,
		totalAmount: 3000,
		amountRecieved: 100,
		payment: "Mastercard",
		action: "action",
	},
	{
		orderId: "2345",
		customer: "Dianne Russel",
		created: "7mins ago",
		status: "Pending",
		qty: 2,
		totalAmount: 3000,
		amountRecieved: 100,
		payment: "Mastercard",
		action: "action",
	},
	{
		orderId: "2345",
		customer: "Leslie Alexander",
		created: "15mins ago",
		status: "Pending",
		qty: 1,
		totalAmount: 3000,
		amountRecieved: 100,
		payment: "Mastercard",
		action: "action",
	},
	{
		orderId: "2345",
		customer: "Annette Black",
		created: "35mins ago",
		status: "Processing",
		qty: 1,
		totalAmount: 3000,
		amountRecieved: 100,
		payment: "Mastercard",
		action: "action",
	},
	{
		orderId: "2345",
		customer: "Darlene Robertson",
		created: "2hrs ago",
		status: "Processing",
		qty: 1,
		totalAmount: 3000,
		amountRecieved: 100,
		payment: "Mastercard",
		action: "action",
	},
	{
		orderId: "2345",
		customer: "Bessie Cooper",
		created: "2hrs ago",
		status: "Shiped",
		qty: 5,
		totalAmount: 3000,
		amountRecieved: 100,
		payment: "Mastercard",
		action: "action",
	},
];

export const transactonHistory: TransactionHistory[] = [
	{
		id: "#TRNS0029BXA",
		description: "Credit transaction-dhhjhdfjb kfjj455",
		date: "01-11-2021 4:30 PM",
		amount: 53000,
		method: "Visa Card",
		status: "Success",
	},
	{
		id: "#TRNS0029BXA",
		description: "Credit transaction-dhhjhdfjb kfjj455",
		date: "01-11-2021 4:30 PM",
		amount: 53000,
		method: "Visa Card",
		status: "Success",
	},
	{
		id: "#TRNS0029BXA",
		description: "Debit transaction-dhhjhdfjb kfjj455",
		date: "01-11-2021 4:30 PM",
		amount: 53000,
		method: "Visa Card",
		status: "Success",
	},
	{
		id: "#TRNS0029BXA",
		description: "Debit transaction-dhhjhdfjb kfjj455",
		date: "01-11-2021 4:30 PM",
		amount: 53000,
		method: "Bank Transfer",
		status: "Failed",
	},
	{
		id: "#TRNS0029BXA",
		description: "Credit transaction-dhhjhdfjb kfjj455",
		date: "01-11-2021 4:30 PM",
		amount: 53000,
		method: "Bank Transfer",
		status: "Success",
	},
	{
		id: "#TRNS0029BXA",
		description: "Credit transaction-dhhjhdfjb kfjj455",
		date: "01-11-2021 4:30 PM",
		amount: 53000,
		method: "Paypal",
		status: "Success",
	},
	{
		id: "#TRNS0029BXA",
		description: "Credit transaction-dhhjhdfjb kfjj455",
		date: "01-11-2021 4:30 PM",
		amount: 53000,
		method: "Master Card",
		status: "Success",
	},
	{
		id: "#TRNS0029BXA",
		description: "Debit transaction-dhhjhdfjb kfjj455",
		date: "01-11-2021 4:30 PM",
		amount: 53000,
		method: "Visa Card",
		status: "Success",
	},
];

export const productData = [
	{
		id: "1",
		imgref: "/product1.svg",
		name: "Popcorn seasoning",
		category: "Food & Beverage",
		totalOrders: 77,
		stock: 120,
		price: 3000,
		date: "01-11-2021",
		status: "Stocked",
		action: "action",
	},
	{
		id: "2",
		imgref: "/product2.svg",
		name: "Dell Computer Monitor",
		category: "Accessories",
		totalOrders: 674,
		stock: 120,
		price: 3000,
		date: "01-11-2021",
		status: "Stocked",
		action: "action",
	},
	{
		id: "3",
		imgref: "/product3.svg",
		name: "Nutella",
		category: "Entertainment",
		totalOrders: 77,
		stock: 274,
		price: 3000,
		date: "01-11-2021",
		status: "Stocked",
		action: "action",
	},
	{
		id: "4",
		imgref: "/product1.svg",
		name: "Popcorn seasoning",
		category: "Food & Beverage",
		totalOrders: 77,
		stock: 120,
		price: 3000,
		date: "01-11-2021",
		status: "Stocked",
		action: "action",
	},
	{
		id: "5",
		imgref: "/product2.svg",
		name: "Dell Computer Monitor",
		category: "Accessories",
		totalOrders: 674,
		stock: 120,
		price: 3000,
		date: "01-11-2021",
		status: "Stocked",
		action: "action",
	},
	{
		id: "6",
		imgref: "/product3.svg",
		name: "Nutella",
		category: "Entertainment",
		totalOrders: 77,
		stock: 274,
		price: 3000,
		date: "01-11-2021",
		status: "Stocked",
		action: "action",
	},
	{
		id: "7",
		imgref: "/product1.svg",
		name: "Popcorn seasoning",
		category: "Food & Beverage",
		totalOrders: 77,
		stock: 120,
		price: 3000,
		date: "01-11-2021",
		status: "Stocked",
		action: "action",
	},
	{
		id: "8",
		imgref: "/product2.svg",
		name: "Dell Computer Monitor",
		category: "Accessories",
		totalOrders: 674,
		stock: 120,
		price: 3000,
		date: "01-11-2021",
		status: "Stocked",
		action: "action",
	},
	{
		id: "9",
		imgref: "/product3.svg",
		name: "Nutella",
		category: "Entertainment",
		totalOrders: 77,
		stock: 274,
		price: 3000,
		date: "01-11-2021",
		status: "Stocked",
		action: "action",
	},
];
export const collectiontData: CollectionData[] = [
	{
		id: "1",
		name: "Men's Wear",
		number: 12,
		date: "01-11-2021",
		status: "Active",
	},
	{
		id: "2",
		name: "Women's Wear",
		number: 10,
		date: "01-11-2021",
		status: "Active",
	},
	{
		id: "3",
		name: "Children's Wear",
		number: 10,
		date: "01-11-2021",
		status: "Out of Stock",
	},
];

export const invoiceData: InvoiceData[] = [
	{
		id: "#INV302011",
		customer: "Albert Flores",
		date: "01-11-2023 ",
		dueDate: "01-11-2023 ",
		amount: 3000,
		method: "Mastercard",
		status: "Post paid",
	},
	{
		id: "#INV302011",
		customer: "Albert Flores",
		date: "01-11-2023 ",
		dueDate: "01-11-2023 ",
		amount: 3000,
		method: "Mastercard",
		status: "Paid",
	},
	{
		id: "#INV302011",
		customer: "Albert Flores",
		date: "01-11-2023 ",
		dueDate: "01-11-2023 ",
		amount: 3000,
		method: "Mastercard",
		status: "Overdue",
	},
];

export const temp3SliderData = [
	{
		year: "Summer 2020",
		img: "/temp3-slid-1.svg",
		heading: "New Collection 1",
		des: "We know how large objects will act but things on a small scale.",
	},
	{
		year: "Summer 2020",
		img: "/temp3Hero-2.svg",
		heading: "New Collection 2",
		des: "We know how large objects will act but things on a small scale.",
	},
];

export const temp3ProductData = [
	{
		img: "/tep3Prod1.svg",
		itle: "Graphic Design",
		dept: "English Department",
		oldPrice: 16.48,
		currPrice: 6.48,
	},
	{
		img: "/temp3Prod2.svg",
		itle: "Graphic Design",
		dept: "English Department",
		oldPrice: 16.48,
		currPrice: 6.48,
	},
	{
		img: "/temp3Prod3.svg",
		itle: "Graphic Design",
		dept: "English Department",
		oldPrice: 16.48,
		currPrice: 6.48,
	},
	{
		img: "/temp3Prod4.svg",
		itle: "Graphic Design",
		dept: "English Department",
		oldPrice: 16.48,
		currPrice: 6.48,
	},
];

export const temp3SliderData2 = [
	{
		year: "Summer 2020",
		img: "/temp3Slid2Img1.svg",
		heading: "Vital Classic Product 1",
		des: "We know how large objects will act but things on a small scale.",
	},
	{
		year: "Summer 2020",
		img: "/temp3Slid2Img2.svg",
		heading: "Vital Classic Product 2",
		des: "We know how large objects will act but things on a small scale.",
	},
];

export const temp4ProductData = [
	{
		img: "/chair1.svg",
		id: 1,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
		status: "New",
		heart: true,
		added: true,
	},
	{
		img: "/chair-2.svg",
		id: 2,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
		status: "Sales",
	},
	{
		img: "/chair3.svg",
		id: 3,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
	},
	{
		img: "/chair4.svg",
		id: 4,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
	},
	{
		img: "/chair1.svg",
		id: 1,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
		status: "New",
		heart: true,
		added: true,
	},
	{
		img: "/chair-2.svg",
		id: 2,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
		status: "Sales",
	},
	{
		img: "/chair3.svg",
		id: 3,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
	},
	{
		img: "/chair4.svg",
		id: 4,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
	},
	{
		img: "/chair1.svg",
		id: 1,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
		status: "New",
		heart: true,
		added: true,
	},
	{
		img: "/chair-2.svg",
		id: 2,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
		status: "Sales",
	},
	{
		img: "/chair3.svg",
		id: 3,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
	},
	{
		img: "/chair4.svg",
		id: 4,
		itle: "Library Stool Chair",
		dept: "English Department",
		price: 20,
	},
];
export const temp4CategoriestData = [
	{ img: "/temp4Cat1.svg", title: "Wing Chair", products: 3584 },
	{ img: "/temp4Cat2.svg", title: "Wing Chair", products: 3584 },
	{ img: "/temp4Cat3.svg", title: "Wing Chair", products: 3584 },
	{ img: "/temp4Cat1.svg", title: "Wing Chair", products: 3584 },
	{ img: "/temp4Cat2.svg", title: "Wing Chair", products: 3584 },
	{ img: "/temp4Cat3.svg", title: "Wing Chair", products: 3584 },
	{ img: "/temp4Cat1.svg", title: "Wing Chair", products: 3584 },
	{ img: "/temp4Cat2.svg", title: "Wing Chair", products: 3584 },
	{ img: "/temp4Cat3.svg", title: "Wing Chair", products: 3584 },
];

// export const CompanyArr: TemplateFooterProps[] = [
// 	{
// 		title: "About Us",
// 		href: "/",
// 	},
// 	{
// 		title: "Categories",
// 		href: "/",
// 	},
// 	{
// 		title: "Terms & Condition",
// 		href: "/",
// 	},
// 	{
// 		title: "Privacy Policy",
// 		href: "/",
// 	},
// ];

// export const ProductArr: Product[] = [
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-1.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-2.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-3.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-4.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 	},
// ];

// export const ProductArr2: ProductWithId[] = [
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-1.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 1,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-2.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 2,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-3.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 3,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-1.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 4,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-2.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 5,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-3.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 6,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-1.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 7,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-2.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 8,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-3.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 9,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-1.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 10,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-2.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 11,
// 	},
// 	{
// 		title: "Court Heels",
// 		href: "/shoe-3.svg",
// 		price: 9499,
// 		desc: "Red Silettos",
// 		id: 12,
// 	},
// ];

// export const CartArr: CartItem[] = [
// 	{
// 		title: "Luka 2 Basketball Shoes",
// 		href: "/shoe-1.svg",
// 		price: 9499,
// 		desc: " Black",
// 		size: 41,
// 	},
// 	{
// 		title: "Nike Air Max 97 SE",
// 		href: "/shoe-2.svg",
// 		price: 9499,
// 		desc: " White  $ Pink",
// 		size: 39,
// 	},
// 	{
// 		title: "Nike Basketball Shoes",
// 		href: "/shoe-3.svg",
// 		price: 9499,
// 		desc: "Orange",
// 		size: 41,
// 	},
// ];

// export const TemplateFooter2: TemplateFooterItem = [
// 	{
// 		title: "Company Info",
// 		links: [
// 			{
// 				href: "/template/template-2/about-us",
// 				key: "about-us",
// 				label: "About Us",
// 			},
// 			{
// 				href: "/template/template-2/categories",
// 				key: "categories",
// 				label: "Categories",
// 			},
// 			{
// 				href: "/template/template-2/terms&condition",
// 				key: "terms&condition",
// 				label: "Terms Condition",
// 			},
// 			{
// 				href: "/template/template-2/Privacy Policy",
// 				key: "privacy&policy",
// 				label: "Privacy Policy",
// 			},
// 		],
// 	},
// 	// Add other items with the 'title' property as needed
// ];
