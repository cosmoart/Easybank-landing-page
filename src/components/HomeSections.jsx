import iconOnline from "../assets/icons/icon-online.svg"
import iconBudgeting from "../assets/icons/icon-budgeting.svg"
import iconOnboarding from "../assets/icons/icon-onboarding.svg"
import iconApi from "../assets/icons/icon-api.svg"

const SECTIONS = [
	[iconOnline, "Online Banking", "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."],
	[iconBudgeting, "Simple Budgeting", "See exactly where your money goes each month.Receive notifications when you’re close to hitting your limits."],
	[iconOnboarding, "Fast Onboarding", "We don’t do branches.Open your account in minutes online and start taking control of your finances right away."],
	[iconApi, "Open API", "Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier."]
]

export default function HomeSections() {
	return (
		<article>
			<h2>Why choose Easybank?</h2>
			<p>
				We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
			</p>
			<div className="flex flex-col sm:flex-row text-center sm:text-left">
				{
					SECTIONS.map((sec, i) =>
						<section key={i + 120}>
							<img src={sec[0]} alt="" className="m-auto sm:m-0" />
							<h3>{sec[1]}</h3>
							<p>{sec[2]}</p>
						</section>
					)
				}
			</div>
		</article>
	)
}