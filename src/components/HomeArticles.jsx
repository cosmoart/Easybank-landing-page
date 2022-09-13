import imgConfetti from "../assets/images/articles/image-confetti.jpg"
import imgCurrency from "../assets/images/articles/image-currency.jpg"
import imgPlane from "../assets/images/articles/image-plane.jpg"
import imgRestaurant from "../assets/images/articles/image-restaurant.jpg"

export default function HomeArticles() {
	const ARTICLES = [
		[imgCurrency, "By Claire Robinson", "Receive money in any currency with no fees", "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"],
		[imgRestaurant, "By Wilson Hutton", "Treat yourself without worrying about money", "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"],
		[imgPlane, "By Wilson Hutton", "Take your Easybank card wherever you go", "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"],
		[imgConfetti, "By Claire Robinson", "Our invite-only Beta accounts are now live!", "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."]
	]

	return (
		<article className="p-8 mx-auto max-w-6xl mt-32 mb-16">
			<h2 className="scrollAnimation font-medium text-4xl mb-16">Latest Articles</h2>
			<div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
				{
					ARTICLES.map((art, i) =>
						<figure key={i + 325} className={`${"scrollAnimation-" + i} bg-white transition-transform rounded-lg overflow-hidden cursor-pointer hover:!scale-105 mx-auto min-w-[14rem] max-w-[22rem] sm:max-w-[17rem] md:max-w-[20rem] lg:max-w-[16rem]`}>
							<img src={art[0]} alt="article" className="h-[45%] w-full object-cover" />
							<div className="px-4 py-6">
								<p className="text-sm">{art[1]}</p>
								<figcaption><h3>{art[2]}</h3></figcaption>
								<p className="text-sm">{art[3]}</p>
							</div>
						</figure>
					)
				}
			</div>
		</article>
	)
}