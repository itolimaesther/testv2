import React, { ReactNode } from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

type DashboardLayoutProps = {
	children: ReactNode;
};

function Layout({ children }: DashboardLayoutProps) {
	return (
		<div>
			<Navbar />
			<section className="">
				<div className=" sm:ml-64 mt-20 bg-[#F2F2F2]">{children}</div>
			</section>
			<Sidebar />
		</div>
	);
}

export default Layout;
