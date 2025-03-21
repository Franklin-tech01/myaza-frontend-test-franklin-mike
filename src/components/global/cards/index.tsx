"use client";

import React, { JSX, ReactNode, useState } from "react";
import Icons from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

const VirtualCardCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const cards = [
		{
			id: 1,
			balance: "$5,750.20",
			cardNumber: "5282 3456 7890 1289",
			expiry: "09/25",
			gradient: "linear-gradient(180deg, #a35bff 0%, #4f7df9 100%)",
			icon: <Icons.MasterCard />,
		},
		{
			id: 2,
			balance: "$3,240.75",
			cardNumber: "4532 8721 6543 8765",
			expiry: "11/26",
			gradient: "linear-gradient(180deg, #FF6B6B 0%, #556270 100%)",
			icon: <Icons.MasterCard />,
		},
		{
			id: 3,
			balance: "$8,120.32",
			cardNumber: "3782 822463 10005",
			expiry: "04/27",
			gradient: "linear-gradient(180deg, #36D1DC 0%, #5B86E5 100%)",
			icon: <Icons.MasterCard />,
		},
	];

	const handleDotClick = (index: number): void => {
		setCurrentIndex(index);
	};

	const handleDragEnd = (
		event: MouseEvent | TouchEvent | PointerEvent,
		info: { offset: { x: number } }
	): void => {
		if (info.offset.x > 100) {
			setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
		} else if (info.offset.x < -100) {
			setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
		}
	};

	// Card component
	type CardProps = {
		card: {
			id: number;
			balance: string;
			cardNumber: string;
			expiry: string;
			gradient: string;
			icon: ReactNode;
		};
		isActive: boolean;
	};

	const Card: React.FC<CardProps> = ({ card, isActive }) => {
		return (
			<motion.div
				className={`absolute w-full ${isActive ? "z-0" : "z-0"}`}
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{
					scale: isActive ? 1 : 0.9,
					opacity: isActive ? 1 : 0,
					x: isActive ? 0 : card.id < cards[currentIndex].id ? "-100%" : "100%",
				}}
				transition={{ duration: 0.5 }}
				drag='x'
				dragConstraints={{ left: 0, right: 0 }}
				dragElastic={0.2}
				onDragEnd={handleDragEnd}>
				<div
					className='rounded-3xl overflow-hidden p-8   flex flex-col justify-between'
					style={{ background: card.gradient }}>
					<div className="h-full w-full flex justify-center items-center absolute top-1/2 transform -translate-y-1/2  lg:left-0 bg-[url('/assets/images/mask.png')] bg-cover bg-no-repeat bg-center"></div>
					<div className='flex justify-between items-start'>
						<div>
							<p className='text-white/80 text-sm font-light'>
								Current Balance
							</p>
							<h1 className='text-white text-[28px] font-bold mt-2'>
								{card.balance}
							</h1>
						</div>
						<div className='flex z-50 opacity-100'>{card.icon}</div>
					</div>

					<div className='flex justify-between items-center mt-8'>
						<p className='text-white text-sm '>{card.cardNumber}</p>
						<p className='text-white text-sm'>{card.expiry}</p>
					</div>
				</div>
			</motion.div>
		);
	};

	return (
		<div className='relative w-full  rounded-xl flex flex-col '>
			<div className='relative w-full h-[250px] flex justify-center items-center'>
				<AnimatePresence>
					{cards.map((card, index) => (
						<Card key={card.id} card={card} isActive={index === currentIndex} />
					))}
				</AnimatePresence>
			</div>

			<div className='flex justify-center gap-1 '>
				{cards.map((_, index) => (
					<motion.button
						key={index}
						className={`h-2 rounded-full cursor-pointer transition-all ${
							index === currentIndex ? "w-6 bg-[#CBC8FF]" : "w-2 bg-[#27264E]"
						}`}
						whileTap={{ scale: 0.9 }}
						onClick={() => handleDotClick(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default VirtualCardCarousel;
