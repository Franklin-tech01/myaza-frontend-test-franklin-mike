import RecentTransactions from "@/components/wallet/recent-transactions";
import Wallets from "@/components/wallet/user-wallets";
import { div } from "framer-motion/client";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "uifry | Wallet",
};

const WalletPage = () => {
	return (
		<div>
			<Wallets />
			<RecentTransactions />
		</div>
	);
};

export default WalletPage;
