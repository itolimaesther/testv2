import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoSearch } from "react-icons/go";


function Navbar() {
	return (
		<nav className="fixed top-0 z-40  h-20 w-full bg-white border-gray-200 ">
			<div className="px-3 py-3 lg:px-5 md:pl-64 lg:pl-72 h-full">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-start">
						<button
							data-drawer-target="logo-sidebar"
							data-drawer-toggle="logo-sidebar"
							aria-controls="logo-sidebar"
							type="button" 
							className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none f"
						>
							<span className="sr-only">Open sidebar</span>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clipRule="evenodd"
									fillRule="evenodd"
									d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
								></path>
							</svg>
						</button>
						
							
							<span className="hidden lg:block self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">
								Dashboard
							</span>
					</div>
					<div className="flex items-center gap-4">

						<div className=" hidden md:flex justify-between py-2 h-10 bg-[#F2F2F2] rounded-full w-[316px] ps-6 pe-3">
							<input type="text" placeholder="Search..." className="w-full bg-transparent outline-none" />
							<GoSearch className="text-[#BDBDBD] text-2xl"/>

						</div>
						<Link href={"#"} className="hidden xl:flex  justify-center items-center p-2 px-4 gap-2 bg-[#C4E8E8] rounded-full">
							<Image src={'/store.svg'} height={20} width={20} alt="Store"/>
							<p className="text-[#36B3A5] font-semibold">Go to Store</p>
							

						 </Link>
							
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.5 9C18.8376 9 19.1641 8.95219 19.473 8.86298C19.4909 9.07425 19.5 9.28801 19.5 9.50391V13.5024L20.9183 16.6625C20.9732 16.7848 21.0016 16.9174 21.0016 17.0515C21.0016 17.5762 20.5763 18.0015 20.0516 18.0015H3.95219C3.8184 18.0015 3.68613 17.9733 3.56402 17.9186C3.08515 17.7042 2.87073 17.1422 3.08511 16.6633L4.50001 13.5028L4.50011 9.49099L4.50453 9.24107C4.6436 5.21035 7.95588 2.00391 12 2.00391C13.4433 2.00391 14.7915 2.41162 15.9355 3.11815C15.355 3.74286 15 4.57997 15 5.5C15 7.433 16.567 9 18.5 9ZM14.9583 19.003C14.7196 20.4211 13.486 21.5015 12 21.5015C10.514 21.5015 9.28037 20.4211 9.04173 19.003H14.9583ZM18.5 8C19.8807 8 21 6.88071 21 5.5C21 4.11929 19.8807 3 18.5 3C17.1193 3 16 4.11929 16 5.5C16 6.88071 17.1193 8 18.5 8Z" fill="#828282"/>
								<circle cx="18.5" cy="5.5" r="2.5" fill="#EE0C2D"/>
							</svg>
						<div className="flex items-center ">
							
							<div>
								<button
									type="button"
									className="flex text-sm bg-[#F2F2F2] rounded-full  "
									aria-expanded="false"
									data-dropdown-toggle="dropdown-user"
								>
									<span className="sr-only">Open user menu</span>
									
									<div className="flex items-center justify-center gap-2 p-2">
									<Image
										// className="w-8 h-8 rounded-full"
										src="/user.svg"
										alt="user photo"
										height={32} width={32}
									/>
									<p className="text-black text-[16px] hidden lg:block">Jennifer Hudson</p>

									<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block">
										<path d="M1.08471 0.666748C0.189757 0.666748 -0.288559 1.72083 0.300774 2.39433L4.90226 7.65325C5.48334 8.31725 6.51626 8.31725 7.09734 7.65325L11.6988 2.39433C12.2882 1.72083 11.8098 0.666748 10.9149 0.666748H1.08471Z" fill="#212121"/>
									</svg>

									</div>
									
								</button>
							</div>
							<div
								className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
								id="dropdown-user"
							>
								<div className="px-4 py-3" role="none">
									<p
										className=" block md:hidden text-sm text-gray-900 dark:text-white"
										role="none"
									>
										Jennifer Hudson
									</p>
									
								</div>
								<ul className="py-1" role="none">
									<li>
										<Link
											href="/login"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
											role="menuitem"
										>
											Sign out
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
