import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import { AuroraText } from "../magicui/aurora-text";

const Header = () => {
	return (
		<header
			className="bg-background/10 absolute top-0 right-0 left-0 border-b border-white/10 backdrop-blur"
			aria-label="app-header">
			<div className="container mx-auto flex items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<h1
						className="text-3xl font-bold"
						aria-label="App Name">
						<AuroraText> Digial Clock</AuroraText>
					</h1>
				</Link>

				<nav className="flex items-center gap-4">
					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
