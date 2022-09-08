import HomeFooter from './components/HomeFooter';
import HomeArticles from './components/HomeArticles';
import HomeSections from './components/HomeSections';
import HomeHeader from './components/HomeHeader';
import HomePage from "./components/HomePage"

function App() {
	let observer = new IntersectionObserver(cards => {
		cards.forEach(card => {
			if (card.isIntersecting) card.target.classList.add("scale-100", "opacity-100", "translate-y-0")
		})
	}, { threshold: 0.17 });

	document.querySelectorAll(".scrollAnimation").forEach(card => observer.observe(card));

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
