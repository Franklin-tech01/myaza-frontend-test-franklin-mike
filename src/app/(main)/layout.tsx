import Navigation from "@/components/Layout/Navigation/Index";
import Header from "@/components/global/Header";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<section className='flex   bg-[#141332] h-screen'>
			<Navigation />
			<div className='w-full lg:ml-[278px] lg:w-[calc(100%-278px)]'>
				<Header />
				<main className='bg-[#141332] p-10 max-lg:container lg:w-full min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] py-4 lg:p-10   max-lg:pb-20'>
					{children}
				</main>
			</div>
		</section>
	);
};

export default Layout;
