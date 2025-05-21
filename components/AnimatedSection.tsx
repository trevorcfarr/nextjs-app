"use client";

import { motion } from "framer-motion";

function AnimatedSection() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				ease: [0.55, 0.1, 0.25, 1],
				duration: 1,
				delay: 0.1
			}}
			className='absolute inset-0 flex flex-col items-center justify-center italic text-3xl'
		>
			<span className='animate-bounce leading-loose spacing tracking-[0.3em] text-center'>
				Want to know more?
			</span>
			<svg
				width='32'
				height='32'
				viewBox='0 0 512 512'
				className='animate-bounce text-4xl'
			>
				<path
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='48'
					d='M112 268l144 144 144-144M256 392V100'
				/>
			</svg>
		</motion.div>
	);
}

export default AnimatedSection;
