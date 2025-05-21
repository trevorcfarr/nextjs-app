"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("@/components/layout/NavBar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function ContactPage() {
	return (
		<div className='flex flex-col min-h-screen'>
			<NavBar />
			<div className='flex flex-col items-center justify-center flex-grow p-8'>
				<h1 className='text-4xl font-bold mb-8'>Contact</h1>
				<div className='max-w-2xl text-center'>
					<p className='mb-4'>For inquiries, please contact Nicole at:</p>
					<p className='font-bold'>ahoy.nicole.robitaille@gmail.com</p>
					<p className='font-bold'>208.691.2670</p>
					<p>Coeur d&apos;Alene, ID</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
