"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HomeItemProps {
	title: string;
	subtitle: string;
	description: string;
	body: string;
	index: number;
	path: string;
	logo: string;
	images: string[];
}

function HomeItem({ title, subtitle, description, index, path, logo }: HomeItemProps) {
	const isEven = index % 2 === 0;

	return (
		<motion.div
			initial={{ opacity: 0, x: isEven ? 90 : -90 }}
			whileInView={{
				opacity: 1,
				x: 0,
				transition: { duration: 1, delay: 0.2 }
			}}
			viewport={{ once: true }}
			className={`flex flex-col ${
				isEven ? "md:flex-row" : "md:flex-row-reverse"
			} justify-center gap-12 items-center`}
		>
			<Image
				src={logo}
				alt={`${path} Logo`}
				className='aspect-[3/4] h-[400px] w-[300px] object-cover'
				width={300}
				height={400}
			/>
			<div className='flex flex-col gap-2 px-4 md:px-0 max-w-[300px] hover:scale-105 transition-all duration-300'>
				<div className={`text-2xl md:text-4xl uppercase ${!isEven && "text-right"}`}>{title}</div>
				<hr className='bg-black text-black'></hr>
				<div className='flex flex-col'>
					<div className={`text-md ${!isEven ? "text-right" : "text-left"} font-bold`}>{subtitle}</div>
					<div className={`text-md ${!isEven ? "text-right" : "text-left"} text-wrap`}>{description}</div>
				</div>
				{/* Desktop */}
				<div className='w-full'>
					<Link
						href={`/collections/${path}`}
						className={`hidden md:flex my-12 flex-row gap-2 items-center ${
							!isEven ? "ml-auto" : "mr-auto"
						} cursor-pointer hover:font-bold w-fit`}
					>
						{isEven && (
							<svg
								width='20'
								height='20'
								viewBox='0 0 512 512'
							>
								<path
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='48'
									d='M244 400L100 256l144-144M120 256h292'
								/>
							</svg>
						)}
						<div>View Collection</div>
						{!isEven && (
							<svg
								width='20'
								height='20'
								viewBox='0 0 512 512'
							>
								<path
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='48'
									d='M268 112l144 144-144 144M392 256H100'
								/>
							</svg>
						)}
					</Link>
				</div>
				{/* Mobile */}
				<div className='w-full'>
					<Link
						href={`/collections/${path}`}
						className={`md:hidden my-6 flex flex-row gap-2 items-center ${
							!isEven ? "justify-end" : "justify-start"
						} cursor-pointer hover:font-bold`}
					>
						<svg
							width='20'
							height='20'
							viewBox='0 0 512 512'
						>
							<path
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='48'
								d='M112 244l144-144 144 144M256 120v292'
							/>
						</svg>
						<div>View Collection</div>
					</Link>
				</div>
			</div>
		</motion.div>
	);
}

export default HomeItem;
