// import React from "react";

// const RecentTransactions = () => {
// 	const transactions = [
// 		{
// 			id: 1,
// 			name: "Adobe After Effect",
// 			date: "Sat,20 Apr 2020",
// 			amount: "$80.09",
// 			status: "Deposited",
// 			logo: "AE",
// 		},
// 		{
// 			id: 2,
// 			name: "McDonald's",
// 			date: "Sat,20 Apr 2020",
// 			amount: "$80.09",
// 			status: "Deposited",
// 			logo: "M",
// 		},
// 		{
// 			id: 3,
// 			name: "Levi",
// 			date: "Sat,20 Apr 2020",
// 			amount: "$80.09",
// 			status: "Deposited",
// 			logo: "L",
// 		},
// 		{
// 			id: 4,
// 			name: "Adobe After Effect",
// 			date: "Sat,20 Apr 2020",
// 			amount: "$80.09",
// 			status: "Deposited",
// 			logo: "AE",
// 		},
// 		{
// 			id: 5,
// 			name: "Levi",
// 			date: "Sat,20 Apr 2020",
// 			amount: "$80.09",
// 			status: "Deposited",
// 			logo: "L",
// 		},
// 	];

// 	return (
// 		<div className='bg-[#1D1D41] p-6 rounded-[16px] my-10 w-full max-w-4xl'>
// 			<div className='flex justify-between items-center mb-6'>
// 				<h2 className='text-white text-2xl font-bold'>Recent transactions</h2>
// 				<button className='text-indigo-300 hover:text-indigo-200'>
// 					See All
// 				</button>
// 			</div>

// 			<div className='w-full'>
// 				<div className='flex text-gray-400 mb-4'>
// 					<div className='w-1/3 text-left'>Name</div>
// 					<div className='w-1/4 text-left'>Date</div>
// 					<div className='w-1/4 text-left'>Amount</div>
// 					<div className='w-1/6 text-left'>Status</div>
// 				</div>

// 				{transactions.map((transaction) => (
// 					<div
// 						key={transaction.id}
// 						className='flex items-center py-4 border-t border-gray-700'>
// 						<div className='w-1/3 flex items-center'>
// 							<div
// 								className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white
//                 ${
// 									transaction.name === "Adobe After Effect"
// 										? "bg-indigo-800"
// 										: transaction.name === "McDonald's"
// 										? "bg-yellow-500"
// 										: "bg-red-700"
// 								}`}>
// 								{transaction.name === "Adobe After Effect"
// 									? "Ae"
// 									: transaction.name === "McDonald's"
// 									? "M"
// 									: "L"}
// 							</div>
// 							<span className=' text-white'>{transaction.name}</span>
// 						</div>
// 						<div className='w-1/4 text-gray-400'>{transaction.date}</div>
// 						<div className='w-1/4 text-white'>{transaction.amount}</div>
// 						<div className='w-1/6'>
// 							<span className='px-3 py-1 bg-green-900 text-green-400 rounded-md text-sm'>
// 								{transaction.status}
// 							</span>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default RecentTransactions;

import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Icons from "@/components/icons";
import Link from "next/link";

const RecentTransactions = () => {
	const transactions = [
		{
			id: 1,
			name: "Adobe After Effect",
			date: "Sat,20 Apr 2020",
			amount: "$80.09",
			status: "Deposited",
			logo: <Icons.Adobeicon />,
		},
		{
			id: 2,
			name: "McDonald's",
			date: "Sat,20 Apr 2020",
			amount: "$80.09",
			status: "Deposited",
			logo: <Icons.Adobeicon />,
		},
		{
			id: 3,
			name: "Levi",
			date: "Sat,20 Apr 2020",
			amount: "$80.09",
			status: "Deposited",
			logo: <Icons.Adobeicon />,
		},
		{
			id: 4,
			name: "Adobe After Effect",
			date: "Sat,20 Apr 2020",
			amount: "$80.09",
			status: "Deposited",
			logo: <Icons.Adobeicon />,
		},
		{
			id: 5,
			name: "Levi",
			date: "Sat,20 Apr 2020",
			amount: "$80.09",
			status: "Deposited",
			logo: <Icons.Adobeicon />,
		},
	];

	return (
		<div className='bg-[#1D1D41] p-6  rounded-2xl w-full '>
			<div className='flex  justify-between items-center '>
				<h2 className='text-white text-3xl font-bold'>Recent transactions</h2>
				<Link
					href={"/wallet"}
					className='text-[#8C89B4] hover:text-indigo-200 text-sm'>
					See All
				</Link>
			</div>

			<Table>
				<TableHeader>
					<TableRow className=' noHover  p-0 text-[14px] border-none '>
						<TableHead className=' text-[#AEABD8] font-normal w-1/3'>
							Name
						</TableHead>
						<TableHead className=' !text-[#AEABD8] font-normal w-1/4'>
							Date
						</TableHead>
						<TableHead className=' !text-[#AEABD8] font-normal w-1/4'>
							Amount
						</TableHead>
						<TableHead className='!text-[#AEABD8] font-normal w-1/6'>
							Status
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{transactions.map((transaction) => (
						<TableRow
							key={transaction.id}
							className=' w-[540px] border-[#2D2B4D] hover:bg-transparent'>
							<TableCell className='py-4 px-0'>
								<div className='flex items-center'>
									<div
										className={`w-6 h-6 mr-1 rounded-full flex items-center justify-center `}>
										{transaction.logo}
									</div>
									<span className='text-white text-sm'>{transaction.name}</span>
								</div>
							</TableCell>
							<TableCell className='text-white text-sm'>
								{transaction.date}
							</TableCell>
							<TableCell className='text-white text-sm'>
								{transaction.amount}
							</TableCell>
							<TableCell>
								<span className='px-3 py-1 bg-[#1A3527] text-[#02B15A] rounded-[8px] text-sm'>
									{transaction.status}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default RecentTransactions;
