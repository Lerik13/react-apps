import { useState, useEffect } from "react";
import './index.css';
import { ListBox, MovieList } from './components/ListBox.js';
import { WatchedMoviesList, WatchedSummary } from './components/WatchedBox.js';
import { Loader } from "./components/Loader.js";
import ErrorMessage from "./components/ErrorMessage.js";

const I_KEY = "tt3896198";
const KEY = "d0b3ba81";

function App() {
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const query = "lksdlksd";//"interstellar";

	useEffect(() => {
		async function fetchMovies() {
			try {
				setIsLoading(true);
				const res = await fetch(`http://www.omdbapi.com/?i=${I_KEY}&apikey=${KEY}&s=${query}`);
	
				if (!res.ok)
					throw new Error("Something went wrong with fetching movies")
	
				const data = await res.json();
				
				if (data.Response === 'False')
					throw new Error("Movie not found");

				setMovies(data.Search);
			} catch (error) {
				console.error(error.message);
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
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
					{isLoading && <Loader />}
					{!isLoading && !error && <MovieList movies={movies} />}
					{error && <ErrorMessage message={error} />}
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
