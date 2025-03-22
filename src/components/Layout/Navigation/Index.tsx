"use client";

import React from "react";
import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserDropdown from "@/components/global/user-dropdown";

const Navigation = () => {
	const pathname = usePathname();

	const links = [
		{
			name: "Dashboard",
			to: "/dashboard",
			icon: {
				active: <Icons.DashboardDark />,
				inactive: <Icons.Dashboard />,
			},
		},
		{
			name: "Analytics",
			to: "/analytics",
			icon: {
				active: <Icons.Analytics />,
				inactive: <Icons.Analytics />,
			},
		},
		{
			name: "My Wallet",
			to: "/wallet",
			icon: {
				active: <Icons.WalletDark />,
				inactive: <Icons.Wallet />,
			},
		},
		{
			name: "Accounts",
			to: "/account",
			icon: {
				active: <Icons.User />,
				inactive: <Icons.User />,
			},
		},
		{
			name: "Settings",
			to: "/settings",
			icon: {
				active: <Icons.Settings />,
				inactive: <Icons.Settings />,
			},
		},
		{
			name: "Help Centre",
			to: "/help",
			icon: {
				active: <Icons.Help />,
				inactive: <Icons.Help />,
			},
		},
		{
			name: "Dark Mode",
			to: "/dark",
			icon: {
				active: <Icons.Dark />,
				inactive: <Icons.Dark />,
			},
		},
	];

	return (
		<>
			{/* Sidebar Navigation for Desktop */}
			<nav className='w-[294px] h-screen overflow-hidden fixed bg-[#1D1D41]  px-6'>
				<div className='flex flex-col justify-between h-full'>
					<ul className='mt-10  space-y-2'>
						<div className='px-6'>
							<Link href='/dashboard'>
								<Icons.Logo className='w-[99px] h-[74px]' />
							</Link>
						</div>
						{links.map((link, index) => {
							const isActive = pathname === link.to;
							const isSeparator =
								index ===
								links.findIndex((item) => item.name === "Help Centre") - 1;

							return (
								<React.Fragment key={link.name}>
									{/* Navigation Links */}
									<li key={link.name}>
										<Link
											href={link.to}
											className={cn(
												"flex items-center px-6 py-3 rounded-lg transition-all group",
												isActive
													? "bg-[#CBC8FF] text-[#141332]"
													: "text-white hover:bg-[#CBC8FF] hover:text-[#141332]"
											)}>
											{/* Icon */}
											<div className='mr-4'>
												{isActive ? link.icon.active : link.icon.inactive}
											</div>
											{/* Text */}
											<span className='font-medium'>{link.name}</span>
										</Link>
									</li>

									{/* Separator Line */}
									{isSeparator && (
										<hr className='border-t border-[#2F2F54] my-3 mx-6' />
									)}
								</React.Fragment>
							);
						})}
					</ul>

					<UserDropdown />
				</div>
			</nav>

			{/* Bottom Navigation for Mobile */}
			<nav className='lg:hidden fixed bottom-0 w-full bg-[#1D1D41] p-3 flex justify-around items-center'>
				{links.map((link) => {
					const isActive = pathname === link.to;
					return (
						<Link
							key={link.name}
							href={link.to}
							className='flex flex-col items-center'>
							<div
								className={cn(
									"p-2 rounded-lg",
									isActive ? "bg-[#CBC8FF]" : "text-white"
								)}>
								{isActive ? link.icon.active : link.icon.inactive}
							</div>
							<span className='text-xs text-white'>{link.name}</span>
						</Link>
					);
				})}
			</nav>
		</>
	);
};

export default Navigation;
