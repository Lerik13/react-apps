import { useState, useEffect } from "react";

export function useMovies (apiUrl, query) {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		async function fetchMovies() {
			try {
				setIsLoading(true);
				setError("");
				const res = await fetch(`${apiUrl}&s=${query}`, { signal: controller.signal });
	
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
		
		fetchMovies();

		return () => {
			controller.abort();
		}
	}, [apiUrl, query])

	return { movies, isLoading, error }
}