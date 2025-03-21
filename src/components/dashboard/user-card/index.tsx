import VirtualCard from "@/components/global/cards";
import Button from "@/components/global/Button";
import { div } from "framer-motion/client";

const MyCard = () => {
	return (
		<div className=' p-6 mt-10 xl:mt-0 bg-[#1D1D41] rounded-2xl   w-full '>
			<div className=''>
				<h1 className='text-white text-xl font-bold mb-2'>My Card</h1>
				<div className=''>
					<p className='text-gray-400 text-[16px]'>Card Balance</p>
					<h2 className='text-white text-xl font-bold'>$15,595.015</h2>
				</div>
				<VirtualCard />
			</div>

			<div className='flex gap-4 pt-6 mb-0 xl:mb-[-80px]'>
				<Button
					type='submit'
					className='w-full py-4 bg-[#CBC8FF] cursor-pointer !outline-none text-[#1D1D41] rounded-[8px] font-bold'>
					Manage Cards
				</Button>
				<Button
					type='submit'
					className='w-full py-4 border border-[#CBC8FF] bg-[#1D1D41] cursor-pointer !outline-none text-[#CBC8FF] rounded-[8px] font-bold'>
					Transfer
				</Button>
			</div>
		</div>
	);
};

export default MyCard;
