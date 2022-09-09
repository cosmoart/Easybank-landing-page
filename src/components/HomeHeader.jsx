import logo from "../assets/icons/logo.svg"
import iconHamburger from "../assets/icons/icon-hamburger.svg"
import iconClose from "../assets/icons/icon-close.svg"
import { useState } from "react";

export default function HomeHeader() {
	const [menu, setMenu] = useState(false);
	let isMobile = window.innerWidth < 640;

	return (
		<header className="bg-white">
			<div className="flex justify-between p-4 max-w-6xl mx-auto">
				<img src={logo} alt="logo" className="object-contain" />
				<nav className={`transition-all w-[80%] sm:w-auto rounded-md p-3 sm:p-0 justify-center absolute z-10 bg-white flex sm:static left-1/2 -translate-x-1/2 sm:-translate-x-0 ${menu ? "top-20" : " -top-56"}`}>
					<ul className="homeLinks flex gap-6 flex-col sm:flex-row items-center">
						<li><a href="#" className="opacity-80 hover:opacity-100">Home</a></li>
						<li><a href="#" className="opacity-80 hover:opacity-100">About</a></li>
						<li><a href="#" className="opacity-80 hover:opacity-100">Contact</a></li>
						<li><a href="#" className="opacity-80 hover:opacity-100">Blog</a></li>
						<li><a href="#" className="opacity-80 hover:opacity-100">Careers</a></li>
					</ul>
				</nav>
				{isMobile
					? <button title={menu ? "Close menu" : "Drop menu"} onClick={() => setMenu(!menu)}>
						<img src={iconHamburger} alt="drop menu" className={`transition-transform ${menu ? "scale-0" : "scale-100"}`} />
						<img src={iconClose} alt="close menu" className={`transition-transform ${menu ? "scale-100" : "scale-0"}`} />
					</button>
					: <button className="btn-primary">Request Invite</button>
				}
			</div>
		</header>
	)
}