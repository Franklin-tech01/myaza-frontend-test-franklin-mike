"use client";

import Input from "@/components/global/Input";
import Icons from "@/components/icons";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

const Header = () => {
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			search: "",
		},
	});

	const {
		formState: { errors, isValid },
		watch,
	} = methods;

	const pathname = usePathname();

	const routeConfig = {
		"/dashboard": {
			title: "Welcome Back, Ishigami Senku 👋",
			subText: "Here's what's happening with your store today.",
		},
		"/wallet": {
			title: "Wallet",
			subText: "Manage all your wallets from here.",
		},
	} as const;

	type RouteConfigKeys = keyof typeof routeConfig;

	const currentRoute = routeConfig[pathname as RouteConfigKeys] || {
		title: "Page Not Found",
		subText: "",
	};
	return (
		<>
			{/* <header className='flex flex-col xl:flex-row w-full p-4 sm:p-6 lg:p-10 bg-[#141332] justify-between items-center sticky top-0 z-[1000]'> */}

			<header className='flex flex-col xl:flex-row p-4  lg:p-10 sticky top-0 w-full bg-[#141332]  z-30 md:px-[60px]  items-center justify-between'>
				<div className='w-full mb-4 lg:mb-0'>
					<header>
						<h1 className='text-2xl text-white font-bold'>
							{currentRoute.title}
						</h1>
						<p className='text-[#C1C1C1]'>{currentRoute.subText}</p>
					</header>
				</div>
				<div className='w-full lg:w-auto'>
					<FormProvider {...methods}>
						<form className='w-full lg:w-[300px]'>
							<div className='w-full'>
								<Input
									name='search'
									placeholder='Search'
									paddingLeft=''
									type='search'
									className='text-[#AEABD8] rounded-lg !border-0 !outline-none !bg-[#1D1D41] w-full'
									right={
										<div className='w-9 pl-3'>
											<Icons.Search />
										</div>
									}
								/>
							</div>
						</form>
					</FormProvider>
				</div>
			</header>
		</>
	);
};

export default Header;
