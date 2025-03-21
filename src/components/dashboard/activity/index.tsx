"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import Button from "@/components/global/Button";

const Activity = () => {
	// Data for the pie chart
	const data = [
		{ name: "Daily payment", value: 55, color: "#6359E9" },
		{ name: "Hobby", value: 20, color: "#64CFF6" },
		{ name: "Remaining", value: 25, color: "#3A3A5A" },
	];

	return (
		<div className='bg-[#1D1D41] p-6 rounded-2xl shadow-lg'>
			{/* Header */}
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-2xl text-white font-semibold'>Activity</h2>
				{/* <select className='bg-transparent border border-gray-600 text-gray-400 text-sm rounded-md p-1'></select> */}
				<select className='bg-transparent border  gap-1 border-[#8C89B4] rounded-sm px-[8px] py-1 flex items-center'>
					<option className=''>Month</option>
					<option>Week</option>
					<option>Year</option>
					{/* <span className=' text-[#8C89B4] text-xs'>{selectedYear}</span> */}
					{/* <Icons.Dropdown /> */}
				</select>
			</div>

			{/* Chart */}
			<div className='flex justify-center items-center mb-6'>
				<PieChart width={300} height={100}>
					<Pie
						data={data}
						cx='50%'
						cy='100%'
						startAngle={180}
						endAngle={0}
						innerRadius={60}
						outerRadius={80}
						paddingAngle={0}
						dataKey='value'>
						{data.map((entry, index) => (
							<Cell className='' key={`cell-${index}`} fill={entry.color} />
						))}
					</Pie>
				</PieChart>
				<div className='absolute text-xl !space-y-4 font-bold text-white'>
					75%
				</div>
			</div>

			{/* Legend */}
			<div className='flex justify-around text-sm text-white'>
				<div className='text-center'>
					<div className='flex items-center justify-center gap-2'>
						<span className='block w-2 h-2 rounded-full bg-[#6359E9]' />
						<p className='text-[16px]  text-white'>Daily payment</p>
					</div>
					<p>55%</p>
				</div>
				<div className='text-center'>
					<div className='flex items-center  text-white justify-center gap-2'>
						<span className='block w-2 h-2 rounded-full bg-[#64CFF6]' />
						<p className='text-[16px] '>Hobby</p>
					</div>
					<p>20%</p>
				</div>
			</div>

			{/* Button */}
			<div className=' flex items-center justify-center pt-16 mb-0 xl:mb-[-45px]'>
				<Button
					type='submit'
					className='w-full xl:w-[280px] py-4 border border-[#CBC8FF] bg-[#1D1D41] cursor-pointer !outline-none text-[#CBC8FF] rounded-[8px] font-bold'>
					See All Activity
				</Button>
			</div>
		</div>
	);
};

export default Activity;

// import { useState } from "react";
// import { PieChart, Pie, Cell } from "recharts";
// import Button from "@/components/global/Button";
// import {
// 	Select,
// 	SelectTrigger,
// 	SelectValue,
// 	SelectContent,
// 	SelectItem,
// } from "@/components/ui/select";

// const data = [
// 	{ name: "Daily payment", value: 55, color: "#6258E9" },
// 	{ name: "Hobby", value: 20, color: "#6AC7F9" },
// 	{ name: "Remaining", value: 25, color: "#23263B" },
// ];

// export default function ActivityChart() {
// 	const [timeframe, setTimeframe] = useState("Month");

// 	return (
// 		<div className='bg-[#1D1D41] text-white p-6 rounded-xl  '>
// 			<div className='flex justify-between items-center mb-4'>
// 				<h2 className='text-xl  font-semibold'>Activity</h2>
// 				<Select onValueChange={setTimeframe} defaultValue={timeframe}>
// 					<SelectTrigger className='bg-[#1A1C3A] text-white px-3 py-1 rounded-md text-sm border border-[#30324E] w-[90px]'>
// 						<SelectValue placeholder='Month' />
// 					</SelectTrigger>
// 					<SelectContent className='bg-[#1A1C3A] text-white border border-[#30324E] rounded-md'>
// 						<SelectItem value='Month'>Month</SelectItem>
// 						<SelectItem value='Week'>Week</SelectItem>
// 						<SelectItem value='Day'>Day</SelectItem>
// 					</SelectContent>
// 				</Select>
// 			</div>

// 			<div className='relative flex flex-col items-center'>
// 				<PieChart width={220} height={130}>
// 					<Pie
// 						data={data}
// 						dataKey='value'
// 						cx='50%'
// 						cy='100%'
// 						innerRadius={55}
// 						outerRadius={75}
// 						startAngle={180}
// 						endAngle={0}>
// 						{data.map((entry, index) => (
// 							<Cell key={`cell-${index}`} fill={entry.color} />
// 						))}
// 					</Pie>
// 				</PieChart>
// 				<p className='text-xl font-bold '>75%</p>
// 			</div>

// 			<div className='mt-4 flex items-center justify-center gap-2'>
// 				{data.slice(0, 2).map((item) => (
// 					<div
// 						key={item.name}
// 						className='flex flex-col justify-center   items-center gap-2 mb-2'>
// 						<div className='flex items-center gap-2'>
// 							<span
// 								className='w-3 h-3 rounded-full'
// 								style={{ background: item.color }}></span>
// 							<span className='text-sm text-[#B3B6D1]'>{item.name}</span>
// 						</div>
// 						<span className='text-sm text-[#E2E4F3] ml-auto'>
// 							{item.value}%
// 						</span>
// 					</div>
// 				))}
// 			</div>

// 			<Button
// 				type='submit'
// 				className='w-full py-4 border border-[#CBC8FF] bg-[#1D1D41] cursor-pointer !outline-none text-[#CBC8FF] rounded-[8px] font-bold'>
// 				See All Activity
// 			</Button>
// 		</div>
// 	);
// }
