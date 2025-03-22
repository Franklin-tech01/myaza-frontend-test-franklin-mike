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
		<div className='bg-[#1D1D41] p-6 mt-6 h-[70vh] rounded-2xl w-full flex flex-col'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-white text-3xl font-bold'>Recent transactions</h2>
				<Link
					href={"/wallet"}
					className='text-[#8C89B4] hover:text-indigo-200 text-sm'>
					See All
				</Link>
			</div>

			<div className='flex-1 overflow-auto'>
				<Table>
					<TableHeader>
						<TableRow className='noHover p-0 text-[14px] border-none'>
							<TableHead className='text-[#AEABD8] font-normal w-1/3'>
								Name
							</TableHead>
							<TableHead className='!text-[#AEABD8] font-normal w-1/4'>
								Date
							</TableHead>
							<TableHead className='!text-[#AEABD8] font-normal w-1/4'>
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
								className='w-[540px] border-[#2D2B4D] hover:bg-transparent'>
								<TableCell className='py-4 px-0'>
									<div className='flex items-center'>
										<div
											className={`w-6 h-6 mr-1 rounded-full flex items-center justify-center`}>
											{transaction.logo}
										</div>
										<span className='text-white text-sm'>
											{transaction.name}
										</span>
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
		</div>
	);
};

export default RecentTransactions;
