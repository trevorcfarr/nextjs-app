export interface PortfolioItem {
	title: string;
	subtitle: string;
	description: string;
	body: string;
	path: string;
	logo: string;
	images: string[];
}

export const portfolioItems: PortfolioItem[] = [
	{
		title: "Gas & Grain",
		subtitle: "Vintage for the people.",
		description: "A high-end curated vintage shop in Coeur d'Alene, ID.",
		body: "Vintage for the people. Gas & Grain is a high-end currated vintage shop in Coeur d'Alene, ID. With a shop expansion and new owners, G&G was looking to refresh their logo and overall brand to reflect their new objectives. The overall objective of the brand refresh was consistent use in a variety of situations, clean and simple, modern but with a vintage inspired look and feel.",
		path: "gas-and-grain",
		logo: "/images/gas-and-grain/logo.jpg",
		images: [
			"/images/gas-and-grain/1.png",
			"/images/gas-and-grain/2.jpg",
			"/images/gas-and-grain/3.jpg",
			"/images/gas-and-grain/4.jpg",
			"/images/gas-and-grain/5.jpg"
		]
	},
	{
		title: "CDA Flea",
		subtitle: "Flea Market",
		description: "Community event for local & regional small business.",
		body: "The idea of having a local Flea Market in Coeur d'Alene stemmed from our tight-knit lake town community. Many of have seen how impactful Flea Markets can be for small businesses. We decided we wanted to create an event to showcase all of the amazing artists and makers in this region. CDA Flea features 50+ creatively curated vendors dealing all sorts of vintage finds, handmade crafts, slow-method goods, and small batch eats & drinks, live music along with other amusing interactive arts.",
		path: "cda-flea",
		logo: "/images/cda-flea/logo.png",
		images: ["/images/cda-flea/1.png", "/images/cda-flea/2.jpg", "/images/cda-flea/3.jpg"]
	},
	{
		title: "Hazy Petals",
		subtitle: "Pop-up Shop.",
		description: "Small batch falafel & hummus bowls.",
		body: "Hazy Petals is a small batch falafel & hummus bowl pop-up shop. As a new local small-business, they needed to develope a brand which included a logo, color pallette  & icon set. The ask was a friendly psychedelic desert vibe with warm earhy shades to reflect falafel's Middle Eastern origin. We wanted to be sure that standing out at markets or pop-up events was considered while also creating an accomodating but quirky environment.",
		path: "hazy-petals",
		logo: "/images/hazy-petals/logo.jpg",
		images: ["/images/hazy-petals/1.jpg", "/images/hazy-petals/2.png", "/images/hazy-petals/3.jpg"]
	},
	{
		title: "Yamaha Ranch",
		subtitle: "Yeehaw.",
		description: "Event for vintage motorcycle lovers to gather.",
		body: "Yeehaw! Yamaha Ranch Roundup was an event for vintage motorcylce lovers to gather and enjoy eachothers pride and joys. The creative direction was to be an inclusive motorcycle vibe including Harley Davidson or off-road motorcyclists as well as have a western cowboy feel. It's intended use was for flyers, posters and social media posts.",
		path: "yamaha-ranch",
		logo: "/images/yamaha-ranch/logo.jpg",
		images: ["/images/yamaha-ranch/1.jpg"]
	}
];
