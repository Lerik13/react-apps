import { useEffect, useReducer } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';
import { useQuiz } from './contexts/QuizContext';

export default function App() {
	const { questions, status, numQuestions, dispatch, secondsRemaining, maxPossiblePoints, index, highscore, points, answer } = useQuiz();

	return (
		<div className="app">
			<Header />

			<Main>
				{status === 'loading' && <Loader />}
				{status === 'error' && <ErrorMessage />}
				{status === 'ready' && <StartScreen />}
				
				{status === 'active' && (<>
					<Progress />
					<Question />
					<Footer>
						<Timer />
						<NextButton />
					</Footer>
				</>)}
				{status === 'finished' && (
					<FinishScreen />
				)}
			</Main>
		</div>
	);
}
