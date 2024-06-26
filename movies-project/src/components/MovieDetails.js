import { useEffect, useState } from "react"
import { API_URL } from '../constants.js';
import StarRating from "./StarRating.js";
import { Loader } from "./Loader.js";
import ErrorMessage from "./ErrorMessage.js";
import { useKey } from "../hooks/useKey.js";

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [userRating, setUserRating] = useState("");

	const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
	const watchedUserRating = watched.find((movie) => movie.imdbID === selectedId)?.userRating;

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

	function handleAdd() {
		const newWatchedMovie = {
			imdbID: selectedId,
			title,
			year,
			poster,
			imdbRating: Number(imdbRating),
			runtime: Number(runtime.split(" ").at(0)),
			userRating,
		}
		onAddWatched(newWatchedMovie);
		onCloseMovie();
	}

	useKey("Escape", onCloseMovie);

	useEffect(() => {
		async function getMovieDetails() {
			try {
				setIsLoading(true);
				setError("");
				const res = await fetch(`${API_URL}&i=${selectedId}`);
				const data = await res.json();
				setMovie(data);
			} catch (error) {
				console.error(error.message);
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		}

		getMovieDetails();
	}, [selectedId])

	useEffect(() => {
		if (!title) return;
		document.title = `Movie | ${title}`;
		return () => {
			document.title = "Movies app"
		}
	}, [title])


	return (
		<div className="details">
			{isLoading && <Loader />}
			{error && <ErrorMessage message={error} />}
			{!isLoading && !error && (<>
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
					<div className="rating">
						{!isWatched ? (<>
							<StarRating maxRating={10} size={24} onSetRating={setUserRating} />
		
							{userRating > 0 && (
								<button className="btn-add" onClick={handleAdd}>
									+ Add to List
								</button>
							)}
						</>) : (
							<p>
								You rated with movie {watchedUserRating} <span>⭐</span>
							</p>
						)}
					</div>

					<p>
						<em>{plot}</em>
					</p>
					<p>Starring {actors}</p>
					<p>Directed by {director}</p>
				</section>
			</>)}
		</div>
	)
}

export default MovieDetails;