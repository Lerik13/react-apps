import { useState, useEffect } from "react";
import './index.css';
import { ListBox, MovieList } from './components/ListBox.js';
import { WatchedMoviesList, WatchedSummary } from './components/WatchedBox.js';
import { Loader } from "./components/Loader.js";

const I_KEY = "tt3896198";
const KEY = "d0b3ba81";

function App() {
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const query = "interstellar";

	useEffect(() => {
		setIsLoading(true);
		async function fetchMovies() {
			const res = await fetch(`http://www.omdbapi.com/?i=${I_KEY}&apikey=${KEY}&s=${query}`);
			const data = await res.json();
			setMovies(data.Search);
			setIsLoading(false);
		}
		fetchMovies();
	}, [])

	return (
		<div>
			<NavBar>
				<Search />
				<NumResults movies={movies} />
			</NavBar>
			<main className="main">
				<ListBox>
					{isLoading ? <Loader />: <MovieList movies={movies} />}
				</ListBox>
				<ListBox>
					<WatchedSummary watched={watched} />
					<WatchedMoviesList watched={watched} />
				</ListBox>
			</main>
		</div>
	);
}

function NavBar({ children }) {
	return (
		<nav className="nav-bar">
			<Logo />
			{children}
		</nav>
	)
}

function Logo() {
	return (
		<div className="logo">
			<span role="img">😎</span>
			<h1>Favorite Movies</h1>
			<span role="img">🎥</span>
		</div>
	)
}

function Search() {
	const [query, setQuery] = useState("");

	return (
		<input
			className="search"
			type="text"
			placeholder="Search ..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	)
}

function NumResults({ movies }) {
	return (
		<p className="num-results">
			Found <strong>{movies.length}</strong> results
		</p>
	)
}

export default App;
