

const Root = () => {

	return (
		<>
		<header>
	<h1> RR library </h1>
	<nav>
		<ul>
			<li className="selected"> Home </li>
			<li> The toplist </li>
			<li> Find a book </li>
			<li> My favorites </li>
			<li> Get a library card </li>
		</ul>
	</nav>
</header>
<main>
	<div className="content">
		<h2> Home </h2>
		<p>Welcome to the library!</p>
		<p>If you're new here, why not check out <a href="#"> The toplist</a>? </p>
	</div>

	<div className="content">
		<h2> The toplist </h2>
		<p>Most searched for books right now!</p>
		<ol>
			<li> The Great Gatsby, F. Scott Fitzgerald <button> ❤️ Add to favorites </button> </li>
			<li> The Great Gatsby, F. Scott Fitzgerald <button> ❤️ Add to favorites </button> </li>
			<li> The Great Gatsby, F. Scott Fitzgerald <button> ❤️ Add to favorites </button> </li>
		</ol>
	</div>

	<div className="content">
		<h2> Find a book </h2>
		<input className="search-input" type="text" placeholder="Book or author name" />
		<p>Matches:</p>
		<ul>
			<li>To Kill a Mockingbird, Harper Lee</li>
		</ul>
	</div>

	<div className="content">
		<h2> My favorites </h2>
		<p>These are your favorited books.</p>
		<ul>
			<li> To Kill a Mockingbird, Harper Lee 
				<button>👎 Actually, I hate it now (unfavorite) </button>
			</li>
		</ul>
	</div>

	<div className="content">
		<h2> Get a library card </h2>
		<p>Please register to receive a library account.</p>
		<form action="#">
			<label htmlFor="username"> Name </label>
			<input id="username" type="text" />

			<label htmlFor="password"> Password </label>
			<input id="password" type="text" />

			<button type="button"> Give me that card! </button>
		</form>
	</div>

</main>
 
		</>
	)
}
export default Root 