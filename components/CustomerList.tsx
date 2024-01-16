import React from "react";

type CustomerListProps = {
	toggleDropdown: () => void;
	showDropdown: boolean;
	openDetailsModal?: () => void;
};

function CustomerList({
	toggleDropdown,
	showDropdown,
	openDetailsModal,
}: CustomerListProps) {
	return (
		<div className="xl:col-span-1 w-full md:w-full mt-8 py-7 px-5 lg:col-auto bg-gray-100 rounded-lg">
			<div className="overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="p-4">
								<div className="flex items-center">
									<input
										id="checkbox-all"
										type="checkbox"
										className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label htmlFor="checkbox-all" className="sr-only">
										checkbox
									</label>
								</div>
							</th>
							<th scope="col" className="px-4 py-3">
								Customer Name
							</th>
							<th scope="col" className="px-4 py-3">
								Phone Number
							</th>
							<th scope="col" className="px-4 py-3">
								Email
							</th>
							<th scope="col" className="px-4 py-3">
								Added
							</th>
							<th scope="col" className="px-4 py-3">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className=" hover:bg-gray-200 dark:hover:bg-gray-700">
							<td className="w-4 px-4 py-4">
								<div className="flex items-center">
									<input
										id="checkbox-table-search-1"
										type="checkbox"
										// onclick="event.stopPropagation()"
										className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label htmlFor="checkbox-table-search-1" className="sr-only">
										checkbox
									</label>
								</div>
							</td>
							<th
								scope="row"
								className="flex items-center px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								{/* <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" className="w-auto h-8 mr-3"> */}
								Albert Flores
							</th>
							<td className="px-4 py-4">
								<span className="bg-primary-100 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
									08097867564
								</span>
							</td>
							<td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<div className="flex items-center">
									{/* <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div> */}
									kenzi.lawson@example.com
								</div>
							</td>
							<td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								01-11-2021
							</td>
							<td className="px-4 py-4 flex items-center justify-end">
								<button
									// id="apple-imac-27-dropdown-button"
									data-dropdown-toggle="apple-imac-27-dropdown"
									className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
									type="button"
									onClick={toggleDropdown}
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clip-path="url(#clip0_127_14176)">
											<path
												d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
												fill="#09121F"
											/>
										</g>
										<defs>
											<clipPath id="clip0_127_14176">
												<rect width="24" height="24" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</button>
								{showDropdown && (
									<div
										// id="apple-imac-27-dropdown"
										className="origin-top-right -bottom-6 absolute right-16 mt-2 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="options-menu"
									>
										<ul
											className="py-1 text-sm text-gray-700 dark:text-gray-200"
											aria-labelledby="apple-imac-27-dropdown-button"
										>
											<li>
												<button
													className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													onClick={openDetailsModal}
												>
													View Details
												</button>
											</li>
											<li>
												<a
													href="#"
													className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Edit Details
												</a>
											</li>
											<li>
												<a
													href="#"
													className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Send Email
												</a>
											</li>
											<li>
												<a
													href="#"
													className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Delete Customer
												</a>
											</li>
										</ul>
									</div>
								)}
							</td>
						</tr>
						<tr className=" hover:bg-gray-200 dark:hover:bg-gray-700">
							<td className="w-4 px-4 py-4">
								<div className="flex items-center">
									<input
										id="checkbox-table-search-1"
										type="checkbox"
										// onclick="event.stopPropagation()"
										className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label htmlFor="checkbox-table-search-1" className="sr-only">
										checkbox
									</label>
								</div>
							</td>
							<th
								scope="row"
								className="flex items-center px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								{/* <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" className="w-auto h-8 mr-3"> */}
								Albert Flores
							</th>
							<td className="px-4 py-4">
								<span className="bg-primary-100 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
									08097867564
								</span>
							</td>
							<td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<div className="flex items-center">
									{/* <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div> */}
									kenzi.lawson@example.com
								</div>
							</td>
							<td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								01-11-2021
							</td>
							<td className="px-4 py-4 flex items-center justify-end">
								<button
									// id="apple-imac-27-dropdown-button"
									data-dropdown-toggle="apple-imac-27-dropdown"
									className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
									type="button"
									onClick={toggleDropdown}
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clip-path="url(#clip0_127_14176)">
											<path
												d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
												fill="#09121F"
											/>
										</g>
										<defs>
											<clipPath id="clip0_127_14176">
												<rect width="24" height="24" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</button>
								{showDropdown && (
									<div
										// id="apple-imac-27-dropdown"
										className="origin-top-right -bottom-6 absolute right-16 mt-2 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="options-menu"
									>
										<ul
											className="py-1 text-sm text-gray-700 dark:text-gray-200"
											aria-labelledby="apple-imac-27-dropdown-button"
										>
											<li>
												<button
													className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													onClick={openDetailsModal}
												>
													View Details
												</button>
											</li>
											<li>
												<a
													href="#"
													className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Edit Details
												</a>
											</li>
											<li>
												<a
													href="#"
													className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Send Email
												</a>
											</li>
											<li>
												<a
													href="#"
													className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													Delete Customer
												</a>
											</li>
										</ul>
									</div>
								)}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CustomerList;
