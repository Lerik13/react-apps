import './index.css';
import { NavBar } from "./components/NavBar.js";
import { ListBox } from './components/ListBox.js';
import { WatchedBox } from './components/WatchedBox.js';

function App() {
	return (
		<div>
			<NavBar />
			<main className="main">
				<ListBox />
				<WatchedBox />
			</main>
		</div>
	);
}



export default App;
