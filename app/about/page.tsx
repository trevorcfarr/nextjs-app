"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("@/components/layout/NavBar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function AboutPage() {
	return (
		<div className='flex flex-col min-h-screen'>
			<NavBar />
			<div className='flex flex-col items-center justify-center flex-grow p-8'>
				<h1 className='text-4xl font-bold mb-8'>About</h1>
				<div className='max-w-2xl text-center'>
					<p className='mb-4'>
						This page is coming soon. Please check back later for more information about Nicole Robitaille.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
