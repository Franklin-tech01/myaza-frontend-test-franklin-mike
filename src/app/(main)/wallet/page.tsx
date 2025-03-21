import RecentTransactions from "@/components/wallet/recent-transactions";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "uifry | Wallet",
};

const WalletPage = () => {
	return <RecentTransactions />;
};

export default WalletPage;
