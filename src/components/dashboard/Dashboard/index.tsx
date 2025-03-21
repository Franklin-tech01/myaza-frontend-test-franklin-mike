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

// import AnalyticsChart from "../charts";
// import Transaction from "../transaction";
// import RecentTransaction from "../recent-transaction";
// import MyCard from "../user-card";
// // import ActivityChart from "../activity"; // New activity component

// const Dashboard = () => {
// 	return (
// 		<div className='grid lg:grid-cols-2 lg:gap-[40px] max-lg:space-y-4 p-4 '>
// 			{/* Left Section */}
// 			<div className='lg:col-span-1 '>
// 				<Transaction />
// 				<AnalyticsChart />
// 				<RecentTransaction />
// 			</div>

// 			{/* Right Section */}
// 			<div className='lg:col-span-1'>
// 				<MyCard />
// 				{/* <ActivityChart /> */}
// 			</div>
// 		</div>
// 	);
// };

// export default Dashboard;
