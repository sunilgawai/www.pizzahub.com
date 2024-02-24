import { ProductsList } from "@/components/products-list";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { FilterIcon, SortDescIcon } from "lucide-react";
import mainBackgroundImage from "@/assets/home-background.webp";

export default function Home() {
	return (
		<main
			className="container flex min-h-screen flex-col items-start justify-between p-24 background-image"
		>
			<div className="flex flex-col justify-center items-start gap-6">
				<h1 className="text-6xl font-sans font-black">
					Order Delicious items in Only
					<span className="text-orange-500"> 45 Minutes!</span>
				</h1>
				<p className="font-sans font-semibold text-2xl">
					Enjoy a free meal if your order takes <br /> more than 45 minutes!
				</p>
				<Button className="py-6 bg-orange-500 rounded-xl text-base font-semibold hover:bg-orange-600 text-white ">
					Get Your Pizza Now!
				</Button>
			</div>

			<Separator className="my-6" />

			<div className="w-full flex-1 items-center justify-between p-1">
				<h1 className="text-2xl font-serif mb-2">Categories</h1>
				<div className="flex justify-between gap-4 text-lg">
					<Toggle
						aria-label="Toggle italic"
						className="w-full border border-pink-400"
					>
						Veg
					</Toggle>
					<Toggle
						aria-label="Toggle italic"
						className="w-full border border-pink-400"
					>
						Non Veg
					</Toggle>
					<Toggle
						aria-label="Toggle italic"
						className="w-full border border-pink-400"
					>
						Breakfast
					</Toggle>
					<Toggle
						aria-label="Toggle italic"
						className="w-full border border-pink-400"
					>
						Lunch
					</Toggle>
					<Toggle
						aria-label="Toggle italic"
						className="w-full border border-pink-400"
					>
						Dinner
					</Toggle>
					<Toggle
						aria-label="Toggle italic"
						className="w-full border border-pink-400"
					>
						<SortDescIcon fill="black" className="h-4 w-4 mr-2" />
						Price
					</Toggle>
					<Toggle
						aria-label="Toggle italic"
						className="w-full border border-pink-400"
					>
						<FilterIcon fill="black" className="h-4 w-4 mr-2" />
						Menu
					</Toggle>
				</div>
			</div>

			<Separator className="my-6 border border-gray-300 h-[1px]" />

			<div className="w-full">
				<ProductsList />
			</div>
		</main>
	);
}
