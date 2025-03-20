import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
	variable: "--font-karla",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={` ${karla.variable}  antialiased`}>{children}</body>
		</html>
	);
}
