"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Icons from "@/components/icons"; // Adjust this import to match your project structure
import { UserCog, LogOut } from "lucide-react"; //
import { useRouter } from "next/navigation";

const UserDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const router = useRouter();
	// Toggle dropdown
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = () => {
		router.push("/auth/login");
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!(dropdownRef.current as HTMLElement).contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className='px-6 pb-[82px]'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center space-x-2'>
					<div className='w-10 h-10 bg-[#CBC8FF] rounded-full flex items-center justify-center'>
						<Image
							src='/assets/icons/admins.jpg'
							width={40}
							height={40}
							alt='user-avatar '
							className='rounded-full'
						/>
					</div>
					<div>
						<p className='text-white font-medium'>Franklin Mike</p>
						<p className='text-sm text-[#C1C1C1]'>Frontend Engineer</p>
					</div>
				</div>
				<div className='relative' ref={dropdownRef}>
					{/* Dropdown trigger */}
					<div className='cursor-pointer' onClick={toggleDropdown}>
						<Icons.Drop />
					</div>

					{/* Dropdown Menu - positioned above the icon */}
					{isOpen && (
						<div className='absolute  right-0  bottom-full mb-6 w-48 bg-[#1D1D41] rounded-lg shadow-lg'>
							<ul className='border-[#CBC8FF] border  rounded-lg'>
								<li>
									<button className='w-full cursor-pointer text-left px-4 py-2 text-white hover:bg-[#CBC8FF] hover:text-[#141332] rounded-t-lg flex items-center space-x-2'>
										<UserCog size={18} />
										<span>Switch User</span>
									</button>
								</li>
								<li>
									<button
										onClick={handleLogout}
										className='w-full  cursor-pointer text-left px-4 py-2 text-white hover:bg-[#CBC8FF] hover:text-[#141332] rounded-b-lg flex items-center space-x-2'>
										<LogOut size={18} />
										<span>Logout</span>
									</button>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserDropdown;
