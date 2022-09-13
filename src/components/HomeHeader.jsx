import logo from "../assets/icons/logo.svg"
import iconHamburger from "../assets/icons/icon-hamburger.svg"
import iconClose from "../assets/icons/icon-close.svg"
import { useEffect, useState } from "react";

export default function HomeHeader() {
	const [menu, setMenu] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

	useEffect(() => {
		let underline = document.getElementById("nav__underline");
		let prevScrollpos = window.pageYOffset;

		document.addEventListener("scroll", () => {
			let currentScrollPos = window.pageYOffset;
			document.getElementById("home-header").style.top = prevScrollpos > currentScrollPos ? "0" : "-200px";
			if (!(prevScrollpos > currentScrollPos)) setMenu(false);
			prevScrollpos = currentScrollPos;
		})

		document.querySelectorAll(".nav__link").forEach((link, i) => {
			link.addEventListener("mouseover", () => {
				underline.style.transform = `translateX(${i * 100}%)`;
			});
		});

		window.addEventListener("resize", () => window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false))
	}, []);

	return (
		<header id="home-header" className="bg-white sm:overflow-hidden fixed w-full transition-all z-50">
			<div className="flex justify-between py-4 px-9 xl:px-[20px] max-w-6xl mx-auto shadow-sm">
				<img src={logo} alt="logo" className="object-contain" />
				<nav className={`transition-all w-[80%] sm:w-auto rounded-md p-3 sm:p-0 justify-center absolute z-10 bg-white flex sm:static left-1/2 -translate-x-1/2 sm:-translate-x-0 ${menu ? "top-20" : " -top-[18rem]"} ${isMobile && "shadow-sm"}`}>
					<ul className={`homeLinks flex w-[clamp(18rem,47vw,23rem)] flex-col sm:flex-row items-center text-center ${isMobile && "gap-6"}`}>
						<li className="sm:w-1/5"><a href="#" className="nav__link opacity-80 hover:opacity-100">Home</a></li>
						<li className="sm:w-1/5"><a href="#" className="nav__link opacity-80 hover:opacity-100">About</a></li>
						<li className="sm:w-1/5"><a href="#" className="nav__link opacity-80 hover:opacity-100">Contact</a></li>
						<li className="sm:w-1/5"><a href="#" className="nav__link opacity-80 hover:opacity-100">Blog</a></li>
						<li className="sm:w-1/5"><a href="#" className="nav__link opacity-80 hover:opacity-100">Careers</a></li>
						{!isMobile && <div id="nav__underline" />}
					</ul>
				</nav>
				{isMobile
					? <button title={menu ? "Close menu" : "Drop menu"} className="w-[24px] h-[24px] flex items-center justify-center" onClick={() => setMenu(!menu)}>
						<img src={iconHamburger} alt="drop menu" className={`transition-transform absolute ${menu ? "scale-0" : "scale-100"}`} />
						<img src={iconClose} alt="close menu" className={`transition-transform absolute ${menu ? "scale-100" : "scale-0"}`} />
					</button>
					: <button className="btn-primary">Request Invite</button>
				}
			</div>
		</header>
	)
}