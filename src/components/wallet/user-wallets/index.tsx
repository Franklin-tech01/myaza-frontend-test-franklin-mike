import React from "react";
import Icons from "@/components/icons";
import Button from "@/components/global/Button";

const wallets = [
	{
		id: 1,
		name: "NGN Wallet",
		balance: "245,800.89",
		icon: <Icons.Naira />,
	},
	{
		id: 2,
		name: "GBP Wallet",
		balance: "245,800.89",
		icon: <Icons.Euro />,
	},
	{
		id: 3,
		name: "USD Wallet",
		balance: "245,800.89",
		icon: <Icons.Usd />,
	},
];

const Wallets = () => {
	return (
		<div className='bg-[#1D1D41] p-4 sm:p-6 rounded-xl w-full'>
			<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4'>
				<div>
					<p className='text-[#C1C1C1] text-[14px] sm:text-[16px]'>
						Your consolidated balance
					</p>
					<h2 className='text-white text-2xl sm:text-3xl font-bold'>
						$34,780,267.08
					</h2>
				</div>

				<div className='flex items-center space-x-4'>
					<Button className='text-[#1D1D41] font-bold text-xs w-full md:w-[180px] flex justify-center items-center space-x-2 cursor-pointer bg-[#CBC8FF]  rounded-[8px]'>
						<Icons.Plus />
						<span className='text-center'> Add New Wallet</span>
					</Button>
					<span className='w-8 h-8 flex items-center justify-center rounded-full border border-[#CBC8FF] text-white cursor-pointer'>
						<Icons.More />
					</span>
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4'>
				{wallets.map((wallet) => (
					<div
						key={wallet.id}
						className='bg-[#1D1D41] w-full sm:w-[260px] p-4 rounded-[8px] flex space-x-3 border border-[#8477FF]'>
						<div className='w-10 h-[30px] bg-white flex items-center justify-center rounded-full'>
							{wallet.icon}
						</div>
						<div>
							<p className='text-white font-medium'>{wallet.name}</p>
							<p className='text-[#C1C1C1] text-sm'>
								Balance: {wallet.balance}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Wallets;
