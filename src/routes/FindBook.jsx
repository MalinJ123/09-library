import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const FindBook = () => {
	const books = useLoaderData();
	const [matches, setMatches] = useState([]);


	//Min handleChange ser inte identisk ut som davids. . . 
	const handleChange = (event) => {
		let searchString = event.target.value.toLowerCase();
		let matches = books.filter(
			(book) =>
				book.title.toLowerCase().includes(searchString) ||
				book.author.toLowerCase().includes(searchString)
		);
		setMatches(matches);
	};

	return (
		<div className="content">
			<h2> Find a book </h2>
			<input
				onChange={handleChange}
				className="search-input"
				type="text"
				placeholder="Book or author name"
			/>
			<p>Matches:</p>
			
			<ul>
				{matches.map((book) => (
					<li key={book.id}>
						{book.title}, {book.author}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FindBook;
