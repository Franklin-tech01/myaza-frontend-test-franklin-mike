import { div } from "framer-motion/client";
import AnalyticsChart from "../charts";

const Dashboard = () => {
	return (
		<div className='g:grid lg:grid-cols-3 lg:gap-8 max-lg:space-y-4'>
			{/* <div className='flex items-center justify-between'>
				<h1 className='text-2xl font-semibold text-gray-800'>Analytics</h1>
				<div className='flex items-center space-x-4'>
					<button className='bg-indigo-500 text-white px-4 py-2 rounded-md'>
						Last Month
					</button>
					<button className='bg-gray-200 text-gray-800 px-4 py-2 rounded-md'>
						Last Year
					</button>
				</div>
			</div> */}
			<AnalyticsChart />
		</div>
	);
};

export default Dashboard;
