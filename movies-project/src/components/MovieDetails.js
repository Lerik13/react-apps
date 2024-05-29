import { useEffect } from "react"

const MovieDetails = ({ selectedId, onCloseMovie }) => {

	return (
		<div className="details">
			<button className="btn-back" onClick={onCloseMovie}>&larr;</button>
			MovieDetails {selectedId}
		</div>
	)
}

export default MovieDetails