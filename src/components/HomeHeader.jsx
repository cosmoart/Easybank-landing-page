import logo from "../assets/icons/logo.svg"
import iconHamburger from "../assets/icons/icon-hamburger.svg"
import iconClose from "../assets/icons/icon-close.svg"
import { useState } from "react";

export default function HomeHeader() {
	const [menu, setMenu] = useState(false);
	let isMobile = window.innerWidth < 640;

	return (
		<header className="flex justify-between p-3">
			<img src={logo} alt="logo" className="object-contain" />
			<nav className={`transition-all absolute z-10 bg-white flex sm:static left-1/2 -translate-x-1/2 ${menu ? "-top-52" : " top-8"}`}>
				<ul className="flex gap-4 flex-col sm:flex-row text-center">
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Careers</a></li>
				</ul>
			</nav>
			{isMobile
				? <button title={menu ? "Close menu" : "Drop menu"} onClick={() => setMenu(!menu)}>
					<img src={iconHamburger} alt="drop menu" className={`transition-transform ${menu ? "scale-0" : "scale-100"}`} />
					<img src={iconClose} alt="close menu" className={`transition-transform ${menu ? "scale-100" : "scale-0"}`} />
				</button>
				: <button className="btn-primary">Request Invite</button>
			}
		</header>
	)
}