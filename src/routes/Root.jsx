import Header from "../components/Header.jsx";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet/>
			</main>
		</>
	);
};

export default Root;
