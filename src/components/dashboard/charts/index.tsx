"use client";

import React, { useState } from "react";

const AnalyticsChart = () => {
	const [selectedYear, setSelectedYear] = useState("2020");

	// Chart data
	const chartData = [
		{ month: "Jan", income: 36000, outcome: 26000 },
		{ month: "Feb", income: 26000, outcome: 33000 },
		{ month: "Mar", income: 29000, outcome: 22000 },
		{ month: "Apr", income: 36000, outcome: 26000 },
		{ month: "May", income: 40000, outcome: 33000 },
		{ month: "Jun", income: 22000, outcome: 28000 },
		{ month: "Jul", income: 22000, outcome: 28000 },
		{ month: "Aug", income: 22000, outcome: 28000 },
	];

	const [tooltip, setTooltip] = useState({
		show: false,
		month: "",
		value: 0,
		x: 0,
		y: 0,
	});

	const maxValue = 50000; // Y-axis max value
	const chartHeight = 280;
	const barWidth = 20;
	const barGap = 8;
	const groupGap = 36;

	const showTooltip = (month: string, value: number, x: number, y: number) => {
		setTooltip({ show: true, month, value, x, y });
	};

	const hideTooltip = () => {
		setTooltip({ ...tooltip, show: false });
	};

	return (
		<div className='w-full max-w-4xl p-8 bg-indigo-950 rounded-lg text-white'>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-2xl font-bold'>Analytics</h2>
				<div className='flex items-center'>
					<div className='flex items-center mr-4'>
						<div className='w-3 h-3 bg-[#1D1D41] rounded-full mr-2'></div>
						<span>Income</span>
					</div>
					<div className='flex items-center mr-4'>
						<div className='w-3 h-3 bg-[#64CFF6] rounded-full mr-2'></div>
						<span>Outcome</span>
					</div>
					<div className='relative'>
						<button className='bg-transparent border border-gray-600 rounded px-4 py-1 flex items-center'>
							{selectedYear}
							<svg
								className='w-4 h-4 ml-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 9l-7 7-7-7'></path>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className='relative h-64'>
				{/* Y-axis labels */}
				<div className='absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-400'>
					<div>50K</div>
					<div>40K</div>
					<div>30K</div>
					<div>20K</div>
					<div>10K</div>
				</div>

				{/* Grid lines */}
				<div className='absolute left-12 right-0 top-0 h-full'>
					{[0, 1, 2, 3, 4].map((i) => (
						<div
							key={i}
							className='border-t border-gray-700 border-dashed h-1/5 w-full'></div>
					))}
				</div>

				{/* Chart bars */}
				<div className='absolute left-12 right-0 bottom-0 h-full flex items-end justify-between'>
					{chartData.map((data, index) => (
						<div key={index} className='flex items-end justify-center'>
							<div className='flex flex-col items-center'>
								{/* Income bar */}
								<div
									className='bg-indigo-500 rounded-sm w-5 mx-1 cursor-pointer'
									style={{
										height: `${(data.income / maxValue) * chartHeight}px`,
									}}
									onMouseEnter={(e) =>
										showTooltip(
											`${data.month} 2020`,
											data.income,
											e.clientX,
											e.clientY
										)
									}
									onMouseLeave={hideTooltip}></div>

								{/* Month label */}
								<div className='text-gray-400 mt-2'>{data.month}</div>
							</div>

							{/* Outcome bar */}
							<div
								className='bg-cyan-400 rounded-sm w-5 mx-1 cursor-pointer'
								style={{
									height: `${(data.outcome / maxValue) * chartHeight}px`,
								}}
								onMouseEnter={(e) =>
									showTooltip(
										`${data.month} 2020`,
										data.outcome,
										e.clientX,
										e.clientY
									)
								}
								onMouseLeave={hideTooltip}></div>
						</div>
					))}
				</div>

				{/* Tooltip */}
				{tooltip.show && (
					<div
						className='absolute bg-indigo-800 p-2 rounded shadow-lg text-white text-sm z-10'
						style={{ left: `${tooltip.x}px`, top: `${tooltip.y - 60}px` }}>
						<div className='font-bold'>{tooltip.month}</div>
						<div>${tooltip.value.toFixed(2)}</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AnalyticsChart;
