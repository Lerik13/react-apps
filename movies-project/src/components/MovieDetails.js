import { useEffect, useState } from "react"
import { API_URL } from '../constants.js';

const MovieDetails = ({ selectedId, onCloseMovie }) => {
	const [movie, setMovie] = useState({});

	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
		Plot: plot
	} = movie;

	useEffect(() => {
		async function getMovieDetails() {
			const res = await fetch(`${API_URL}&i=${selectedId}`);
			const data = await res.json();
			setMovie(data);
		}

		getMovieDetails();
	}, [selectedId])

	return (
		<div className="details">
			<header>
				<button className="btn-back" onClick={onCloseMovie}>&larr;</button>
				<img src={poster} alt={`Poster of {title}`} />
				<div className="details-overview">
					<h2>{title}</h2>
					<p>
						{released} &bull; {runtime}
					</p>
					<p>{genre}</p>
					<p>
						<span>⭐</span>
						{imdbRating} IMDb rating
					</p>
				</div>
			</header>

			<section>
				<p>
					<em>{plot}</em>
				</p>
				<p>Starring {actors}</p>
				<p>Directed by {director}</p>
			</section>
		</div>
	)
}

export default MovieDetails;