// import Navigation from "@/components/Layout/Navigation/Index";
// import Header from "@/components/global/Header";

// type LayoutProps = {
// 	children: React.ReactNode;
// };

// const Layout = ({ children }: LayoutProps) => {
// 	return (
// 		<section className='flex w-full bg-[#141332] '>
// 			<Navigation />

// 			<div>
// 				<Header />
// 				<main className='bg-[#141332]  overflow-hidden   p-10  '>
// 					{children}
// 				</main>
// 			</div>
// 		</section>
// 	);
// };

// export default Layout;

import Navigation from "@/components/Layout/Navigation/Index";
import Header from "@/components/global/Header";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex w-full min-h-screen bg-[#141332]'>
			{/* Sidebar Navigation */}
			<aside className='w-[293px]  hidden lg:block'>
				<Navigation />
			</aside>

			{/* Main Content Area */}
			<div className='flex-1 flex flex-col'>
				{/* Header */}
				<header className='sticky top-0   bg-[#141332] shadow-md'>
					<Header />
				</header>

				{/* Main Content */}
				<main className='flex-1 overflow-hidden p-6 sm:p-8'>{children}</main>
			</div>
		</div>
	);
};

export default Layout;
