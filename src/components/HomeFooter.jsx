import logoWhite from "../assets/icons/logo-white.svg"

import iconFacebook from "../assets/icons/icon-facebook.svg"
import iconYoutube from "../assets/icons/icon-youtube.svg"
import iconTwitter from "../assets/icons/icon-twitter.svg"
import iconPinterest from "../assets/icons/icon-pinterest.svg"
import iconInstagram from "../assets/icons/icon-instagram.svg"

export default function HomeFooter() {
	return (
		<footer className=" bg-DarkBlue text-white p-8">
			<div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between ">
				<div className="flex gap-16">
					<div className="flex flex-col justify-between">
						<img src={logoWhite} alt="" />
						<nav>
							<ul className="flex gap-2">
								<li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={iconFacebook} title="Facebok" /></a></li>
								<li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={iconYoutube} title="Youtube" /></a></li>
								<li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={iconTwitter} title="Twitter" /></a></li>
								<li><a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img src={iconPinterest} title="Pinterest" /></a></li>
								<li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={iconInstagram} title="Instagram" /></a></li>
							</ul>
						</nav>
					</div>
					<nav>
						<ul className="grid grid-cols-2 gap-4">
							<li><a className="hover:text-LimeGreen transition-colors" href="#">About Us</a></li>
							<li><a className="hover:text-LimeGreen transition-colors" href="#">Contact</a></li>
							<li><a className="hover:text-LimeGreen transition-colors" href="#">Blog</a></li>
							<li><a className="hover:text-LimeGreen transition-colors" href="#">Careers</a></li>
							<li><a className="hover:text-LimeGreen transition-colors" href="#">Support</a></li>
							<li><a className="hover:text-LimeGreen transition-colors" href="#">Privacy Policy</a></li>
						</ul>
					</nav>
				</div>
				<div className="flex flex-col">
					<button className="btn-primary">Request Invite</button>
					<small>© Easybank. All Rights Reserved</small>
					<p>Made with ♥️ by <a href="https://github.com/cosmoart">Cosmo</a> - <a href="https://github.com/cosmoart/Easybank-landing-page">Repository</a><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></p>
				</div>
			</div>
		</footer>
	)
}