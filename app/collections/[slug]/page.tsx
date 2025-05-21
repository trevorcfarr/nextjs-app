"use client";

import { notFound } from "next/navigation";
import { portfolioItems } from "@/data/portfolio-items";
import CollectionGallery from "@/components/CollectionGallery";
import { use } from "react";

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
	// Unwrap params Promise with React.use()
	const resolvedParams = use(params);
	const { slug } = resolvedParams;

	const collection = portfolioItems.find((item) => item.path === slug);

	if (!collection) {
		notFound();
	}

	return <CollectionGallery collection={collection} />;
}
