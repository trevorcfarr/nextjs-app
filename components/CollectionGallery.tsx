"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/data/portfolio-items";
import Footer from "@/components/Footer";

// Import LightGallery
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

interface CollectionGalleryProps {
	collection: PortfolioItem;
}

export default function CollectionGallery({ collection }: CollectionGalleryProps) {
	const galleryRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className='flex flex-col items-center justify-center w-full mx-auto p-8'
			>
				<Link
					href='/'
					className='self-start mb-8 hover:underline'
				>
					← Back to Home
				</Link>

				<div className='pt-6 text-5xl text-center uppercase mb-4'>{collection.title}</div>

				<div className='p-4 text-center max-w-screen-md mx-auto mb-10'>
					<p>{collection.body}</p>
				</div>

				{collection.images.length > 0 ? (
					<div
						ref={galleryRef}
						className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl'
					>
						<LightGallery
							speed={500}
							plugins={[lgZoom]}
							elementClassNames='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
						>
							{collection.images.map((image, index) => (
								<a
									key={index}
									href={image}
									data-lg-size='1400-1400'
									className='gallery-item'
								>
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											ease: [0.25, 0.1, 0.25, 1],
											duration: 0.7,
											delay: index * 0.2
										}}
										className='relative h-[400px]'
									>
										<Image
											src={image}
											alt={`${collection.title} image ${index + 1}`}
											fill
											className='object-cover hover:opacity-80 hover:scale-105 transition-all cursor-zoom-in rounded-lg'
										/>
									</motion.div>
								</a>
							))}
						</LightGallery>
					</div>
				) : (
					<div className='border p-4 rounded-md bg-gray-100 text-center'>
						<p className='text-lg'>No gallery images available</p>
					</div>
				)}
			</motion.div>
			<Footer />
		</>
	);
}
