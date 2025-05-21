import HomePage from "@/components/HomePage";
import { portfolioItems } from "@/data/portfolio-items";

export default function Home() {
	return <HomePage items={portfolioItems} />;
}
