import { useState, useEffect, useRef } from "react";
import './index.css';
import { API_URL } from './constants.js';
import { ListBox, MovieList } from './components/ListBox.js';
import { WatchedMoviesList, WatchedSummary } from './components/WatchedBox.js';
import { Loader } from "./components/Loader.js";
import ErrorMessage from "./components/ErrorMessage.js";
import MovieDetails from "./components/MovieDetails.js";

function App() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [selectedId, setSelectedId] = useState(null);
	
	const [watched, setWatched] = useState(() => {
		const storedValue = localStorage.getItem('watched');
		return JSON.parse(storedValue);
	});

	function handleSelectMovie(id) {
		setSelectedId(selectedId => id === selectedId ? null : id);
	}

	function handleCloseMovie() {
		setSelectedId(null);
	}

	function handleAddWatched(movie) {
		setWatched((watched) => [...watched, movie]);
	}

	function handleDeleteWatched(id) {
		setWatched((watched) => watched.filter((movie) => (movie.imdbID !== id)))
	}

	useEffect(() => {
		localStorage.setItem('watched', JSON.stringify(watched))
	}, [watched])

	useEffect(() => {
		const controller = new AbortController();

		async function fetchMovies() {
			try {
				setIsLoading(true);
				setError("");
				const res = await fetch(`${API_URL}&s=${query}`, { signal: controller.signal });
	
				if (!res.ok)
					throw new Error("Something went wrong with fetching movies")
	
				const data = await res.json();

				if (data.Response === 'False')
					throw new Error("Movie not found");

				setMovies(data.Search);
			} catch (error) {
				if (error.name !== "AbortError") {
					console.log(error.message);
					setError(error.message);
				}
			} finally {
				setIsLoading(false);
			}
		}

		if (query.length < 3) {
			setMovies([]);
			setError("")
			return ;
		}

		handleCloseMovie();
		fetchMovies();

		return () => {
			controller.abort();
		}
	}, [query])

	return (
		<div>
			<NavBar>
				<Search query={query} setQuery={setQuery} />
				<NumResults movies={movies} />
			</NavBar>
			<main className="main">
				<ListBox>
					{isLoading && <Loader />}
					{!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
					{error && <ErrorMessage message={error} />}
				</ListBox>
				<ListBox>
					{selectedId ? (
						<MovieDetails
							selectedId={selectedId}
							onCloseMovie={handleCloseMovie}
							onAddWatched={handleAddWatched}
							watched={watched}
						/>
					) : (<>
							<WatchedSummary watched={watched} />
							<WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched} />
					</>)}
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

function Search({ query, setQuery }) {
	const inputEl = useRef(null);

	useEffect(() => {
		function callback(e) {
			if (document.activeElement === inputEl.current)
				return;
			if (e.code === "Enter") {
				inputEl.current.focus();
				setQuery("");
			}
		}

		document.addEventListener('keydown', callback);

		return () => document.removeEventListener("keydown", callback)
	}, [setQuery])

	return (
		<input
			className="search"
			type="text"
			placeholder="Search ..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			ref={inputEl}
		/>
	)
}

function NumResults({ movies }) {
	return (
		<p className="num-results">
			Found <strong>{movies?.length || 0}</strong> results
		</p>
	)
}

export default App;
