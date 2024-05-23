import { useState } from "react";
import { tempMovieData } from '../data.js';

export const ListBox = () => {
	const [movies, setMovies] = useState(tempMovieData);
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="box">
			<button
				className="btn-toggle"
				onClick={() => setIsOpen((open) => !open)}
			>
				{isOpen ? "–" : "+"}
			</button>
			{isOpen && (
				<ul className="list">
					{movies?.map((movie) => (
						<li key={movie.imdbID}>
							<img src={movie.Poster} alt={`${movie.Title} poster`} />
							<h3>{movie.Title}</h3>
							<div>
								<p>
									<span>🗓</span>
									<span>{movie.Year}</span>
								</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
