
const ViewBook = ({ book }) => {

	const addToFavorites = (book) => {
		console.log("ViewBook: add to favorites", book);
		//TODO: lägg till bok i favorites-atom
		//TODO: använd viewbook i <findbook> också 
		
	};
	return (
		<li key={book.id}>
			{book.title},{book.author}
			<button onClick={() => addToFavorites(book)}>
				❤️ Add to favorites
			</button>
		</li>
	);
};

export default ViewBook;