import AnalyticsChart from "../charts";
import Transaction from "../transaction";
import RecentTransaction from "../recent-transaction";
import MyCard from "../user-card";
import Activity from "../activity";
import React from "react";
const Dashboard = () => {
	return (
		<React.Fragment>
			<div className='grid lg:grid-cols-3 lg:gap-10'>
				<div className='grid gap-10 lg:col-span-2 '>
					<Transaction />
					<AnalyticsChart />
					<RecentTransaction />
				</div>
				<div className=' gap-10 grid lg:col-span-1 '>
					<MyCard />
					<Activity />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
