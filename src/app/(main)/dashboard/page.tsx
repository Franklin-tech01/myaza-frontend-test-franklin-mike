import Dashboard from "@/components/dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "uifry | Dashboard",
};

const DashboardPage = () => {
	return <Dashboard />;
};

export default DashboardPage;
