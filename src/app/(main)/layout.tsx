import Navigation from "@/components/Layout/Navigation/Index";
import Header from "@/components/Layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "uifry",
};

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex w-full min-w-screen min-h-screen bg-[#141332]'>
			{/* Sidebar Navigation */}
			<aside className='w-[293px]  hidden lg:block'>
				<Navigation />
			</aside>

			{/* Main Content Area */}
			<div className='flex-1 flex flex-col'>
				{/* Header */}
				<header className='sticky top-0 w-full  z-[1000]   bg-[#141332] shadow-md'>
					<Header />
				</header>

				{/* Main Content */}
				<main className='flex-1 bg-[#141332] min-w-s overflow-hidden p-6 sm:p-8'>
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
