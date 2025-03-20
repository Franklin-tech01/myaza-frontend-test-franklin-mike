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
			{/* <header className='container  lg:px-8 p-10 mb-10 w-full fixed  top-0 right-0 lg:w-[calc(100%-278px)] shadow-sm'>
				<div className='flex  w-[1067px] items-center !justify-between '>
					<div>
						<header className='  shadow-md'>
							<h1 className='text-2xl text-white font-bold'>
								{currentRoute.title}
							</h1>
							<p className='text-[#C1C1C1]'>{currentRoute.subText}</p>
						</header>
					</div>
					<FormProvider {...methods}>
						<form className='max-lg:max-w-[300px] lg:!ml-0 flex-1'>
							<div className='lg:w-[300px]'>
								<Input
									name='search'
									placeholder='Search'
									paddingLeft=''
									type='search'
									className=' text-[#AEABD8] rounded-lg !border-0 !outline-none !bg-[#1D1D41]'
									right={
										<div className='w-9 pl-3'>
											{" "}
											<Icons.Search />{" "}
										</div>
									}
								/>
							</div>
						</form>
					</FormProvider>
				</div>
			</header> */}
			{/* <header className='container lg:px-10 p-10 mb-10 w-full fixed top-0 right-0 lg:w-[calc(100%-278px)] shadow-sm'> */}
			<header className='flex p-10 bg-[#141332] justify-between items-center sticky top-0 w-full  z-10'>
				{/* <div className='flex flex-wrap w-[1067px] gap-[365px] items-center !justify-between'> */}
				<div className='mb-4 lg:mb-0'>
					{" "}
					{/* Add margin-bottom to create spacing */}
					<header className='shadow-md'>
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

// ("use client");

// import Input from "@/components/global/Input";
// import Icons from "@/components/icons";

// import { useState } from "react";
// import { FormProvider, useForm } from "react-hook-form";
// import { useRouter } from "next/router"; // Import useRouter

// const Header = () => {
// 	const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
// 	const methods = useForm({
// 		mode: "onChange",
// 		defaultValues: {
// 			search: "",
// 		},
// 	});

// 	const {
// 		formState: { errors, isValid },
// 		watch,
// 	} = methods;

// 	return (
// 		<>
// 			<header className='p-4 bg-white shadow-md'>
// 				<h1 className='text-2xl font-bold'>{currentRoute.title}</h1>
// 				<p className='text-gray-500'>{currentRoute.subText}</p>
// 			</header>
// 			{/* Additional header components like search or actions */}
// 			<div className='p-4'>
// 				<FormProvider {...methods}>
// 					<Input
// 						name='search'
// 						placeholder='Search...'
// 						className='w-full'
// 						errors={errors}
// 					/>
// 				</FormProvider>
// 			</div>
// 		</>
// 	);
// };

// export default Header;
