"use client";

import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import NavigationLink from "../NavigationLink";÷

const Navigation = () => {
	const pathname = usePathname();

	const router = useRouter();

	const links = [
		{
			name: "Dashboard",
			to: "/dashboard",
			icon: <Icons.Dashboard className='fill-inherit' />,
		},
		{
			name: "Wallet",
			to: "/wallet",
			icon: <Icons.Wallet className='fill-inherit' />,
		},
		{
			name: "Analytics",
			to: "/analytics",
			icon: <Icons.Analytics className='fill-inherit' />,
		},
		{
			name: "account",
			to: "/account",
			icon: <Icons.User className='fill-inherit' />,
		},
		{
			name: "Settings",
			to: "/settings",
			icon: <Icons.Settings className='fill-inherit' />,
		},
		{
			name: "Help",
			to: "/help",
			icon: <Icons.Help className='fill-inherit' />,
		},
		{
			name: "Dark",
			to: "/dark",
			icon: <Icons.Dark className='fill-inherit' />,
		},
	];

	const mobileLinks = [
		{
			name: "Dashboard",
			to: "/dashboard",
			icon: <Icons.Dashboard className='fill-inherit' />,
		},
		{
			name: "Wallet",
			to: "/wallet",
			icon: <Icons.Wallet className='fill-inherit' />,
		},
		{
			name: "Analytics",
			to: "/analytics",
			icon: <Icons.Analytics className='fill-inherit' />,
		},
		{
			name: "account",
			to: "/account",
			icon: <Icons.User className='fill-inherit' />,
		},
		{
			name: "Settings",
			to: "/settings",
			icon: <Icons.Settings className='fill-inherit' />,
		},
		{
			name: "Help",
			to: "/help",
			icon: <Icons.Help className='fill-inherit' />,
		},
		{
			name: "Dark",
			to: "/dark",
			icon: <Icons.Dark className='fill-inherit' />,
		},
	];

	return (
		<>
			<nav className='hidden lg:block w-[278px] h-screen fixed bg-[#1D1D41] pt-5'>
				<Link
					href='/dashboard'
					className='flex justify-center items-center pb-6'>
					<Icons.Logo className='w-[99px] h-[74px]' />
				</Link>
				<div className='flex flex-col h-[calc(100%-198px)] justify-between'>
					<ul className='px-2.5 space-y-2 mt-8'>
						{links.map((link) => {
							return (
								<li key={link.name}>
									<Link href={link.to}>
										<Link
											href={""}
											className='block transition-all  hover:bg-[#CBC8FF] hover:text-white rounded-lg w-full text-white px-4 py-3'>
											<div className='flex items-center space-x-6'>
												<div className={cn("fill-white transition-all", {})}>
													{link.icon}
												</div>
												<div className=''>{link.name}</div>
											</div>
											<div></div>
										</Link>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className='px-2.5'>
					<button
						onClick={() => {
							router.push("/auth/login");
						}}
						className={cn(
							"block transition-all rounded-lg w-full text-white px-4 py-3"
						)}>
						<div className='flex items-center space-x-6'>
							<div className={cn("fill-white transition-all", {})}>
								{/* <Icons.LogoutIcon className='fill-inherit' /> */}
							</div>
							<div className=''>Logout</div>
						</div>
						<div></div>
					</button>
				</div>
			</nav>
			{/* <div className='relative'>
				<nav className='lg:hidden bg-[#173E62] w-screen fixed z-50 bottom-0 left-0 right-0'>
					<div className='flex items-center space-x-8 justify-between py-2'>
						<ul className='flex items-center'>
							{mobileLinks.slice(0, 2).map((link) => {
								return <NavigationLink key={link.name} link={link} />;
							})}
						</ul>
						<ul className='flex items-center'>
							{mobileLinks.slice(2, 4).map((link) => {
								return <NavigationLink key={link.name} link={link} />;
							})}
						</ul>
					</div>
					<div className='flex justify-center items-center absolute -top-1/2 left-1/2 transform -translate-x-1/2 size-16 rounded-full bg-white'>
						<div className='flex justify-center items-center shadow-2xl border-2 border-gray-100 size-14 rounded-full'>
							<Icons.PlusIcon className='fill-primary' />
						</div>
					</div>
				</nav>
			</div> */}
		</>
	);
};

export default Navigation;
