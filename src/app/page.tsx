import Clock from "@/components/Clock";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Digital Clock App",
	description: "Digital Clock App",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<div className="rounded-lg p-20 backdrop-blur-sm">
					<Clock />
				</div>
			</section>
		</>
	);
};

export default page;
