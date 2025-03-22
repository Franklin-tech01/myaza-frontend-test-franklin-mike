"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Icons from "@/components/icons";
import Button from "@/components/global/Button";

const Activity = () => {
	const [selectTime, setSelectTime] = useState("Month");
	const [isOpen, setIsOpen] = useState(false);

	const time = ["month", "week", "year"];

	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleSelectTime = (time: string) => {
		setSelectTime(time);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!(dropdownRef.current as HTMLElement).contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const data = [
		{ name: "Daily payment", value: 50, color: "#6359E9" },
		{ name: "Hobby", value: 35, color: "#64CFF6" },
		{ name: "Remaining", value: 15, color: "#3A3A5A" },
	];

	return (
		<div className='bg-[#1D1D41] p-6 rounded-2xl shadow-lg'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-2xl text-white font-semibold'>Activity</h2>
				<div className='relative' ref={dropdownRef}>
					<button
						className='bg-transparent cursor-pointer border gap-1 border-[#8C89B4] rounded-sm px-[8px] py-1 flex items-center'
						onClick={toggleDropdown}>
						<span className='text-[#8C89B4] text-xs'>{selectTime}</span>
						<Icons.Dropdown />
					</button>
					{isOpen && (
						<div className='absolute top-full mt-1 w-20 bg-[#1D1D41] rounded-lg shadow-lg z-10'>
							<ul className='py-1'>
								{time.map((times) => (
									<li key={times}>
										<button
											className={`w-full text-left bg-[#1D1D41]  cursor-pointer px-3 py-1 text-xs ${
												selectTime === times
													? "bg-[#CBC8FF] text-[#141332]"
													: "text-white hover:bg-[#2A2A5A]"
											}`}
											onClick={() => handleSelectTime(times)}>
											{times}
										</button>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>

			<div className='flex justify-center items-center mt-10 mb-7'>
				<PieChart width={300} className='!border-none scale-150' height={100}>
					<Tooltip
						cursor={false}
						contentStyle={{
							backgroundColor: "#fff",
							color: "#000",
							borderRadius: "8px",
							padding: "6px",
						}}
					/>
					<Pie
						data={data}
						cx='50%'
						cy='100%'
						startAngle={180}
						endAngle={0}
						innerRadius={60}
						outerRadius={80}
						cornerRadius={5}
						stroke='none'
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
