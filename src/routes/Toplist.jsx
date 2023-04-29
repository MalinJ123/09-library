import { useLoaderData } from "react-router-dom";
import { data } from "../data/books.js";

export const loader = () => data;

const Toplist = () => {
	const books = useLoaderData();
	console.log("Toplist, books", books);

	const addToFavorites = (book) => {
		console.log("Toplist: add to favorites", book);
	};

	return (
		<div className="content">
			<h2> The toplist </h2>
			<p>Most searched for books right now!</p>
			<ol>
				{books.map((book) => (
					<li key={book.id}>
						{book.title},{book.author}
						<button onClick={() => addToFavorites(book)}>
							❤️ Add to favorites
						</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Toplist;
