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
				if (card.isIntersecting) card.target.classList.add("scale-100", "opacity-100", "translate-y-0")
			})
		}, { threshold: 0.15 });

		document.querySelectorAll(".scrollAnimation").forEach(card => {
			observer.observe(card)
			card.classList.add("scale-50", "opacity-20", "translate-y-8", "transition-all")
		});
	}, []);
	return (
		<>
			<HomeHeader />
			<HomePage />
			<HomeSections />
			<HomeArticles />
			<HomeFooter />
			<img src="design/desktop-design.jpg" alt="bg" className='absolute top-0 left-0 opacity-50 z-50 hidden' />
		</>
	)
}

export default App
