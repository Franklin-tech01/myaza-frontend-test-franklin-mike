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
			{/* Sidebar Navigation (Desktop Only) */}
			<aside className='w-[294px] z-[1000] overflow-x-hidden hidden lg:block'>
				<Navigation />
			</aside>

			{/* Main Content Area */}
			<div className='flex-1 flex flex-col'>
				{/* Header */}
				<header className='sticky top-0 w-full z-[1000] bg-[#141332] shadow-md'>
					<Header />
				</header>

				{/* Main Content */}
				<main className='flex-1 bg-[#141332] min-w-s overflow-hidden px-6  py-20 xl:p-8'>
					{children}
				</main>

				{/* Bottom Navigation (Mobile Only) */}
				<div className='lg:hidden fixed bottom-0 w-full'>
					<Navigation />
				</div>
			</div>
		</div>
	);
};

export default Layout;

// import Header from "@/components/Layout/Header";
// import Navigation from "@/components/Layout/Navigation/Index";

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
// 	return (
// 		<div className='h-full relative'>
// 			<div className='hidden h-full md:flex md:w-[288px] md:flex-col md:fixed md:inset-y-0  bg-[#FFF]'>
// 				<Navigation />
// 			</div>

// 			<main className='md:pl-72 !h-[100vh]'>
// 				<Header />
// 				{children}
// 			</main>
// 		</div>
// 	);
// };
// export default DashboardLayout;
