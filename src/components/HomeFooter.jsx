import logoWhite from "../assets/icons/logo-white.svg"

import IconFacebook from "../assets/icons/social-media/icon-facebook.jsx"
import IconYoutube from "../assets/icons/social-media/icon-youtube.jsx"
import IconTwitter from "../assets/icons/social-media/icon-twitter.jsx"
import IconPinterest from "../assets/icons/social-media/icon-pinterest.jsx"
import IconInstagram from "../assets/icons/social-media/icon-instagram.jsx"

export default function HomeFooter() {
	return (
		<footer className=" bg-DarkBlue text-white p-12 text-center sm:text-left">
			<div className="mx-auto max-w-[70rem] flex flex-col sm:flex-row justify-between ">
				<div className="flex gap-10 lg:gap-32 flex-col sm:flex-row">
					<div className="flex flex-col justify-between items-center gap-4">
						<img src={logoWhite} alt="" className="max-w-[10rem] sm:max-w-none" />
						<nav>
							<ul className="flex gap-3 sm:gap-4 flex-wrap justify-center">
								<li><a href="https://www.facebook.com" title="Facebok" target="_blank" rel="noopener noreferrer">
									<IconFacebook />
								</a></li>
								<li><a href="https://www.youtube.com" title="Youtube" target="_blank" rel="noopener noreferrer">
									<IconYoutube />
								</a></li>
								<li><a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
									<IconTwitter />
								</a></li>
								<li><a href="https://www.pinterest.com" title="Pinterest" target="_blank" rel="noopener noreferrer">
									<IconPinterest />
								</a></li>
								<li><a href="https://www.instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer">
									<IconInstagram />
								</a></li>
							</ul>
						</nav>
					</div>
					<nav>
						<ul className="grid xsm:grid-cols-2 gap-4 lg:gap-x-24 mb-6 sm:mb-0">
							<li><a className="hover:text-LimeGreen transition-colors" href="#">About Us</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105" href="#">Contact</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105" href="#">Blog</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105" href="#">Careers</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105" href="#">Support</a></li>
							<li><a className="hover:text-LimeGreen transition-colors inline-block hover:scale-105" href="#">Privacy Policy</a></li>
						</ul>
					</nav>
				</div>
				<div className="flex flex-col my-4 sm:my-0 gap-2 sm:items-end">
					<button className="btn-primary max-w-sm">Request Invite</button>
					<small className="opacity-75">© Easybank. All Rights Reserved</small>
					<small className="opacity-75">
						Made with ♥️ by <a href="https://github.com/cosmoart" target="_blank" rel="noopener noreferrer" className="font-bold inline-block hover:scale-105">Cosmo</a> - <a className="font-bold inline-block hover:scale-105" href="https://github.com/cosmoart/Easybank-landing-page" target="_blank" rel="noopener noreferrer">Repository<svg className="inline" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
					</small>
				</div>
			</div>
		</footer>
	)
}