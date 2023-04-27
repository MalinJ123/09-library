import Header from "../components/Header.jsx";
import Home from "./Home.jsx";
import Toplist from "./Toplist.jsx";
import FindBook from "./FindBook.jsx";
import Favorites from "./Favorites.jsx";
import RegisterCard from "./RegisterCard.jsx";

const Root = () => {
	return (
		<>
			<Header />
			<main>
				<Home />
				<Toplist />
				<FindBook />
				<Favorites />
				<RegisterCard />
			</main>
		</>
	);
};

export default Root;
