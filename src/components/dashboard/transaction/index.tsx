import Icons from "@/components/icons";
import { title } from "process";

const TransactionData = [
	{
		title: "Total Income",
		amount: "632.000",
		icon: <Icons.Arrowup />,
		percentage: "+1.29%",
	},
	{
		title: "Total Outcome",
		amount: "1.000",
		icon: <Icons.Arrowdown />,
		percentage: "-1.29%",
	},
];

const Transaction = () => {
	return (
		<div>
			<div className='flex justify-between mb-10 mt-1  items-center'>
				{TransactionData.map((item, index) => (
					<div
						key={index}
						className='flex  relative justify-between bg-[#1D1D41] rounded-[18px] w-[282px] h-[84px] p-4 items-center'>
						<div className='flex items-center'>
							<div
								className={`mr-3  size-10 flex  rounded-lg ${
									item.title === "Total Income"
										? "bg-[#64CFF6]"
										: "bg-[#6359E9] "
								}`}>
								{item.icon}
							</div>
							<div>
								<h4 className='text-sm text-[#8C89B4]'>{item.title}</h4>
								<p className='text-2xl text-white'>${item.amount}</p>
							</div>
						</div>
						<div
							className={`w-[48px] absolute bottom-0 right-0  m-4 text-xs rounded-xl h-5 p-[3px_6px]  ${
								item.title === "Total Income"
									? "bg-[#193345] text-[#02B15A]"
									: "bg-[#3C193B] text-[#E41414]"
							}`}>
							{item.percentage}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Transaction;
