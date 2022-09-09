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
				</div>
			</div>
		</footer>
	)
}