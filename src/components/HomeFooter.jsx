import logo from "../assets/icons/logo.svg"

import iconFacebook from "../assets/icons/icon-facebook.svg"
import iconYoutube from "../assets/icons/icon-youtube.svg"
import iconTwitter from "../assets/icons/icon-twitter.svg"
import iconPinterest from "../assets/icons/icon-pinterest.svg"
import iconInstagram from "../assets/icons/icon-instagram.svg"

export default function HomeFooter() {
	return (
		<footer className="flex bg-DarkBlue">
			<div>
				<img src={logo} alt="" />
				<nav>
					<ul className="flex">
						<li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={iconFacebook} title="Facebok" /></a></li>
						<li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={iconYoutube} title="Youtube" /></a></li>
						<li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={iconTwitter} title="Twitter" /></a></li>
						<li><a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img src={iconPinterest} title="Pinterest" /></a></li>
						<li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={iconInstagram} title="Instagram" /></a></li>
					</ul>
				</nav>
			</div>
			<nav>
				<ul className="grid">
					<li><a href="#">About Us</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Careers</a></li>
					<li><a href="#">Support</a></li>
					<li><a href="#">Privacy Policy</a></li>
				</ul>
			</nav>
			<div>
				<button>Request Invite</button>
				<small>© Easybank. All Rights Reserved</small>
			</div>
		</footer>
	)
}