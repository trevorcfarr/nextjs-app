import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono"
});

export const metadata: Metadata = {
	title: "Nicole Robitaille Portfolio",
	description: "Graphic Designer + Digital Ads Manager"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
