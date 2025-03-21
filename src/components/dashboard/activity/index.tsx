"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import Button from "@/components/global/Button";

const Activity = () => {
	// Data for the pie chart
	const data = [
		{ name: "Daily payment", value: 50, color: "#6359E9" },
		{ name: "Hobby", value: 35, color: "#64CFF6" },
		{ name: "Remaining", value: 15, color: "#3A3A5A" },
	];

	return (
		<div className='bg-[#1D1D41] p-6 rounded-2xl shadow-lg'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-2xl text-white font-semibold'>Activity</h2>
				<select className='bg-transparent text-[#8C89B4] border  gap-1 border-[#8C89B4] rounded-sm px-[8px] py-1 flex items-center'>
					<option className='text-[#8C89B4]'>Month</option>
					<option>Week</option>
					<option>Year</option>
				</select>
			</div>

			<div className='flex justify-center items-center mt-10 mb-7'>
				<PieChart width={300} className='!border-none scale-150' height={100}>
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

			<div className='flex justify-around mb-[-10%] text-sm text-white'>
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

			<div className=' flex items-center justify-center pt-24 mb-0 xl:mb-[-70px]'>
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
