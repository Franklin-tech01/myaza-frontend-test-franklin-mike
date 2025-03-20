import { div } from "framer-motion/client";
import AnalyticsChart from "../charts";
import Transaction from "../transaction";
import RecentTransaction from "../recent-transaction";
const Dashboard = () => {
	return (
		<div className='g:grid lg:grid-cols-3 lg:gap-8 max-lg:space-y-4'>
			<div className='lg:col-span-2 w-[588px]'>
				<Transaction />
				<AnalyticsChart />
				<RecentTransaction />
			</div>
		</div>
	);
};

export default Dashboard;
