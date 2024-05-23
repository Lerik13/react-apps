import { useState } from "react";
import './index.css';
import { NavBar } from "./components/NavBar.js";
import { ListBox } from './components/ListBox.js';
import { WatchedBox } from './components/WatchedBox.js';
import { tempMovieData } from './data.js';

function App() {
	const [movies, setMovies] = useState(tempMovieData);

	return (
		<div>
			<NavBar movies={movies} />
			<main className="main">
				<ListBox movies={movies} />
				<WatchedBox />
			</main>
		</div>
	);
}



export default App;
