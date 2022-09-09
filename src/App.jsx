import HomeFooter from './components/HomeFooter';
import HomeArticles from './components/HomeArticles';
import HomeSections from './components/HomeSections';
import HomeHeader from './components/HomeHeader';
import HomePage from "./components/HomePage"

function App() {
	let observer = new IntersectionObserver(cards => {
		cards.forEach(card => {
			console.log(card);
			// card.target.classList.add("scale-50", "opacity-20", "translate-y-8")
			if (card.isIntersecting) card.target.classList.add("scale-100", "opacity-100", "translate-y-0")
			if (card.isIntersecting) console.log(card);
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
			{/* <img src="design/desktop-design.jpg" alt="bg" className='absolute top-0 left-0 opacity-50 z-50' /> */}
		</>
	)
}

export default App
