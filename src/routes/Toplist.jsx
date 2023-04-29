import { useLoaderData } from "react-router-dom";
import { data } from "../data/books.js";
import ViewBook from "../components/ViewBook.jsx";

export const loader = () => data;

const Toplist = () => {
	const books = useLoaderData();
	console.log("Toplist, books", books);

	return (
		<div className="content">
			<h2> The toplist </h2>
			<p>Most searched for books right now!</p>
			<ol>
				{books.map((book) => (
					<ViewBook key ={book.id} book ={book} />
				))}
			</ol>
		</div>
	);
};

export default Toplist;

