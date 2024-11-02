const StartScreen = ({ numQuestions, dispatch }) => {
	return (
		<div className="start">
			<h2>Welcome to Animal Quiz!</h2>
			<h3>{numQuestions} questions to test your knowledge about our live life in the planet</h3>
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "start" })}
			>
				Let's start
			</button>
		</div>
	);
}

export default StartScreen;
