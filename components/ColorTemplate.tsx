"use client";

import React from "react";
import { SketchPicker } from "react-color";

function ColorTemplate() {
	return (
		<div className="grid grid-cols-1 py-5 xl:grid-cols-1 p-5 xl:gap-4 mt-3 dark:bg-gray-900 bg-white rounded-lg">
			<div className="xl:col-span-1 w-full md:w-full mt-6 py-7 px-5 xl:mt-0 lg:col-auto bg-white rounded-lg">
				<h3 className=" text-lg text-[#36B3A5]">Color</h3>
				<p>Set color preferences for your online store.</p>

				<div className="xl:flex mt-8 gap-y-3 gap-x-2 mb-8 w-full">
					<div className="xl:w-1/4 ">
						<h3 className=" text-sm text-gray-400">Set Primary Color</h3>
						<SketchPicker className="color-picker border-0" />
					</div>
					<div className="xl:w-1/4 ">
						<h3 className=" text-sm text-gray-400">Set Secondary Color</h3>
						<SketchPicker className="color-picker border-0" />
					</div>
					<div className="xl:w-1/4 ">
						<h3 className=" text-sm text-gray-400">Set Footer Color</h3>
						<SketchPicker className="color-picker border-0" />
					</div>
					<div className="xl:w-1/4 ">
						<h3 className=" text-sm text-gray-400">Set Footer Text Color</h3>
						<SketchPicker className="color-picker border-0" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ColorTemplate;
