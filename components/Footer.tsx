"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Footer() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: [0.25, 0.1, 0.25, 1],
				duration: 0.7
			}}
			className='w-full bg-black mt-auto'
		>
			<div className='flex py-8 flex-col sm:flex-row gap-8 items-center justify-center'>
				<Image
					src='/images/nicole_text.png'
					alt='Nicole Text'
					className='h-20 sm:h-32 w-auto'
					width={128}
					height={32}
				/>
				<div className='flex flex-col items-center justify-center text-center text-white'>
					<div>Nicole Robitaille</div>
					<div>ahoy.nicole.robitaille@gmail.com</div>
					<div>208.691.2670</div>
					<div>Coeur d&apos;Alene, ID</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Footer;
