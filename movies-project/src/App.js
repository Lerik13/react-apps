import './index.css';
import { NavBar } from "./components/NavBar.js";
import { ListBox } from './components/ListBox.js';

function App() {
	return (
		<div>
			<NavBar />
			<main className="main">
				<ListBox />
			</main>
		</div>
	);
}



export default App;
