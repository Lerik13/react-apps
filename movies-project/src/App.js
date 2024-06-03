import { useState, useRef } from "react";
import './index.css';
import { API_URL } from './constants.js';
import { ListBox, MovieList } from './components/ListBox.js';
import { WatchedMoviesList, WatchedSummary } from './components/WatchedBox.js';
import { Loader } from "./components/Loader.js";
import ErrorMessage from "./components/ErrorMessage.js";
import MovieDetails from "./components/MovieDetails.js";
import { useMovies } from "./hooks/useMovies.js";
import { useLocalStorageState } from "./hooks/useLocalStorageState.js";
import { useKey } from "./hooks/useKey.js";

function App() {
	const [query, setQuery] = useState("");
	const [selectedId, setSelectedId] = useState(null);

	const { movies, isLoading, error } = useMovies(API_URL, query);
	
	const [watched, setWatched] = useLocalStorageState([], "watched");

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

	useKey("Enter", () => {
		if (document.activeElement === inputEl.current)
			return;
		inputEl.current.focus();
		setQuery("");
	});

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
