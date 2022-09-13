import HomeFooter from './components/HomeFooter';
import HomeArticles from './components/HomeArticles';
import HomeSections from './components/HomeSections';
import HomeHeader from './components/HomeHeader';
import HomePage from "./components/HomePage"
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		let observer = new IntersectionObserver(cards => {
			cards.forEach(card => {
				if (card.isIntersecting) card.target.classList.add("!scale-100", "!opacity-100", "!translate-y-0")
			})
		}, { threshold: 0.15 });

		document.querySelectorAll(".scrollAnimation").forEach(card => {
			card.classList.add("scale-50", "opacity-20", "translate-y-8", "transition-all")
			observer.observe(card)
		});
		document.querySelectorAll(`[class^="scrollAnimation-"]`).forEach(card => {
			card.classList.add("scale-50", "opacity-20", "translate-y-8", "transition-all", window.innerWidth > 640 && `delay-${Array.from(card.classList).find(c => c.includes("scrollAnimation-")).split("-")[1] * 100}`)
			observer.observe(card)
		});
	}, []);

	return (
		<>
			<HomeHeader />
			<HomePage />
			<HomeSections />
			<HomeArticles />
			<HomeFooter />
		</>
	)
}

export default App
