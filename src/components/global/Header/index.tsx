"use client";

import Input from "@/components/global/Input";
import Icons from "@/components/icons";

// import { useState } from "react";
// import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { usePathname } from "next/navigation"; // Import usePathname

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

	const pathname = usePathname(); // Get the current path

	// Define the mapping for paths
	const routeConfig = {
		"/dashboard": {
			title: "Welcome Back, Ali 👋",
			subText: "Here’s what’s happening with your store today.",
		},
		"/wallet": {
			title: "Wallet",
			subText: "Manage all your wallets from here.",
		},
		// Add more routes as needed
	} as const;

	type RouteConfigKeys = keyof typeof routeConfig; // Define RouteConfigKeys as the keys of routeConfig

	const currentRoute = routeConfig[pathname as RouteConfigKeys] || {
		title: "Page Not Found",
		subText: "",
	};
	return (
		<>
			<header className='flex p-10 bg-[#141332] justify-between items-center sticky top-0 w-full  z-0'>
				<div className='mb-4 lg:mb-0'>
					<header className=''>
						<h1 className='text-2xl text-white font-bold'>
							{currentRoute.title}
						</h1>
						<p className='text-[#C1C1C1]'>{currentRoute.subText}</p>
					</header>
				</div>
				<div>
					<FormProvider {...methods}>
						<form className='max-lg:max-w-[300px] lg:!ml-0 flex-1'>
							<div className='lg:w-[300px]'>
								<Input
									name='search'
									placeholder='Search'
									paddingLeft=''
									type='search'
									className='text-[#AEABD8] rounded-lg !border-0 !outline-none !bg-[#1D1D41]'
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
				{/* </div> */}
			</header>
		</>
	);
};

export default Header;
