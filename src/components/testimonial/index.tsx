import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Testimonial data
const testimonials = [
	{
		id: 1,
		rating: 5,
		quote:
			"I've been using Uifry for over a year, and it's helped simplify all my payments.",
		name: "Ali Riaz",
		location: "Singapore",
	},
	{
		id: 2,
		rating: 5,
		quote: "This platform has transformed how I manage my business finances.",
		name: "Sarah Johnson",
		location: "London",
	},
	{
		id: 3,
		rating: 5,
		quote:
			"The best payment solution I've used in my 10 years of running an online store.",
		name: "Michael Chen",
		location: "Toronto",
	},
	{
		id: 4,
		rating: 5,
		quote: "Uifry made international payments seamless for my remote team.",
		name: "Priya Sharma",
		location: "Mumbai",
	},
];

// Star component
const Star = () => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
			fill='#FFC107'
		/>
	</svg>
);

export const TestimonialCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlay, setIsAutoPlay] = useState(true);

	// Auto-play functionality
	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isAutoPlay) {
			interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
			}, 5000); // Change testimonial every 5 seconds
		}
		return () => clearInterval(interval);
	}, [isAutoPlay]);

	// Pause auto-play on hover
	const handleMouseEnter = () => setIsAutoPlay(false);
	const handleMouseLeave = () => setIsAutoPlay(true);

	// Manual navigation
	// interface Testimonial {
	//     id: number;
	//     rating: number;
	//     quote: string;
	//     name: string;
	//     location: string;
	// }

	const handleDotClick = (index: number): void => {
		setCurrentIndex(index);
		setIsAutoPlay(false);
		setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10 seconds
	};

	return (
		<div
			className='w-full xl:w-[602px] h-full flex flex-col font-bold font-karla justify-center items-center px-8 z-10 relative'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<AnimatePresence mode='wait'>
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.5 }}
					className=''>
					<div className='flex my-4'>
						{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
							<Star key={i} />
						))}
					</div>

					<h2 className='text-white  text-4xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight'>
						"{testimonials[currentIndex].quote}"
					</h2>

					<div className='text-white'>
						<p className='text-xl  text-[#CBC8FF] font-semibold'>
							{testimonials[currentIndex].name}
						</p>
						<p className='text-[#CBC8FF]'>
							{testimonials[currentIndex].location}
						</p>
					</div>
				</motion.div>
			</AnimatePresence>

			<div className='flex gap-2 mt-6'>
				{testimonials.map((_, index) => (
					<button
						key={index}
						onClick={() => handleDotClick(index)}
						className={`w-3 h-3 rounded-full  cursor-pointer transition-all duration-300 ${
							index === currentIndex
								? "bg-[#CBC8FF] opacity-100 w-8"
								: "bg-[#1D1D41]"
						}`}
						aria-label={`Go to testimonial ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default TestimonialCarousel;
