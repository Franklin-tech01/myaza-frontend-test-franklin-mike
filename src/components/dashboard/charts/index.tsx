"use client";
import React, { useState } from "react";
import Icons from "@/components/icons";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const AnalyticsChart = () => {
	const [selectedYear, setSelectedYear] = useState("2020");
	const [activeTooltip, setActiveTooltip] = useState(null);

	// Chart data with precise values matching the image
	const data = [
		{ month: "Jan", income: 35000, outcome: 25000 },
		{ month: "Feb", income: 26000, outcome: 33000 },
		{ month: "Mar", income: 29000, outcome: 22000 },
		{ month: "Apr", income: 35000, outcome: 26000 },
		{ month: "May", income: 40000, outcome: 33000 },
		{ month: "Jun", income: 22000, outcome: 27000 },
		{ month: "Jul", income: 22000, outcome: 27000 },
		{ month: "Aug", income: 22000, outcome: 27000 },
	];

	// Custom tooltip component
	const CustomTooltip = ({
		active,
		payload,
		label,
	}: {
		active?: boolean;
		payload?: { value: number }[];
		label?: string;
	}) => {
		if (active && payload && payload.length) {
			return (
				<div className='bg-[#464687] h-[55px] flex flex-col items-center justify-center p-4 rounded-lg shadow-lg text-white'>
					<p className='text-xs font-medium mb-1'>{`${label} ${selectedYear}`}</p>
					<p className='text-xs font-bold'>${payload[0].value.toFixed(1)}</p>
				</div>
			);
		}
		return null;
	};

	// Format y-axis ticks
	const formatYAxis = (value: number) => {
		return `${value / 1000}K`;
	};

	return (
		<div
			className='w-full'
			style={{
				width: "588px",
				height: "341px",
				borderRadius: "16px",
				overflow: "hidden",
				backgroundColor: "#1D1D41",
			}}>
			<div className='flex justify-between items-center px-8 pt-6'>
				<div className='flex w-[540px] justify-between items-center space-x-6'>
					<h2 className='text-2xl font-bold text-white'>Analytics</h2>
					<div className=' flex items-center space-x-4'>
						<div className='flex items-center'>
							<div className='w-4 h-4 bg-[#6359E9] rounded-full mr-2'></div>
							<span className='text-[16px] font-semibold text-white'>
								Income
							</span>
						</div>
						<div className='flex items-center'>
							<div className='w-4 h-4 bg-[#64CFF6] rounded-full mr-2'></div>
							<span className='text-[16px] font-semibold text-white'>
								Outcome
							</span>
						</div>
						<div className='relative '>
							<button className='bg-transparent border  gap-1 border-[#8C89B4] rounded-sm px-[8px] py-1 flex items-center'>
								<span className=' text-[#8C89B4] text-xs'>{selectedYear}</span>
								<Icons.Dropdown />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='h-64 w-full mt-4 '>
				<ResponsiveContainer width='100%' height='100%'>
					<BarChart
						data={data}
						margin={{ top: 10, right: 30, left: 5, bottom: 20 }}
						barGap={7}
						barSize={6}
						onMouseMove={(data) => {
							if (data.activePayload) {
								setActiveTooltip({
									payload: data.activePayload,
									label: data.activeLabel,
								});
							}
						}}
						onMouseLeave={() => setActiveTooltip(null)}>
						<CartesianGrid
							strokeDasharray='3 3'
							vertical={false}
							stroke='#444'
							strokeOpacity={0.5}
						/>
						<XAxis
							dataKey='month'
							axisLine={false}
							tickLine={false}
							tick={{ fill: "#9CA3AF", fontSize: 14 }}
							dy={10}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{ fill: "#9CA3AF", fontSize: 14 }}
							tickFormatter={formatYAxis}
							domain={[10000, 50000]}
							ticks={[10000, 20000, 30000, 40000, 50000]}
						/>
						<Tooltip
							content={<CustomTooltip />}
							cursor={false}
							wrapperStyle={{ outline: "none", zIndex: 100 }}
						/>
						<Bar dataKey='outcome' fill='#64CFF6' radius={[2, 2, 0, 0]} />
						<Bar dataKey='income' fill='#5A51D4' radius={[2, 2, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default AnalyticsChart;
