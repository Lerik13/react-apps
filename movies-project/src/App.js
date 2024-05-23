import { useState } from "react";
import './index.css';
//import { NavBar } from "./components/NavBar.js";
import { ListBox } from './components/ListBox.js';
import { WatchedBox } from './components/WatchedBox.js';
import { tempMovieData } from './data.js';

function App() {
	const [movies, setMovies] = useState(tempMovieData);

	return (
		<div>
			<NavBar>
				<Search />
				<NumResults movies={movies} />
			</NavBar>
			<main className="main">
				<ListBox movies={movies} />
				<WatchedBox />
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
