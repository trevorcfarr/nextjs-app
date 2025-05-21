"use client";

import dynamic from "next/dynamic";

// Dynamically import client components
const Bio = dynamic(() => import("@/components/Bio"), { ssr: false });
const HomeItem = dynamic(() => import("@/components/HomeItem"), { ssr: false });
const Banner = dynamic(() => import("@/components/layout/Banner"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const AnimatedSection = dynamic(() => import("@/components/AnimatedSection"), { ssr: false });
const NavBar = dynamic(() => import("@/components/layout/NavBar"), { ssr: false });

// Define the type of items
interface Item {
	title: string;
	subtitle: string;
	description: string;
	body: string;
	path: string;
	logo: string;
	images: string[];
}

interface HomePageProps {
	items: Item[];
}

export default function HomePage({ items }: HomePageProps) {
	return (
		<div className='flex flex-col min-h-screen'>
			<NavBar />
			<div className='flex flex-col items-center justify-center w-full mx-auto flex-grow'>
				<Banner />
				<AnimatedSection />
				<Bio />
				<div className='my-10 text-4xl uppercase py-4 font-semibold z-10 w-full text-center'>My Work</div>
				<div className='flex flex-col items-center justify-center w-full gap-10 pb-16'>
					{items.map((item, index) => (
						<HomeItem
							key={item.title}
							title={item.title}
							subtitle={item.subtitle}
							description={item.description}
							body={item.body}
							path={item.path}
							logo={item.logo}
							images={item.images}
							index={index}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
