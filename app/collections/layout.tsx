"use client";

import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("@/components/layout/NavBar"), { ssr: false });

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
}
