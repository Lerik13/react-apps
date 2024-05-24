import { useState } from "react";
import './styles.css';
import './styles-text-expander.css';
import TextExpander from './components/TextExpander';
import StarRating from './components/StarRating';
import { faqs } from './data-accordion.js';
import './styles-accordion.css';
import Accordion from './components/Accordion';
import './styles-tab.css';
import { content as tab_content } from './data-tabs.js';
import { Tabbed } from "./components/Tabbed.js";

function App() {
	const [rate, setRate] = useState(0);

	return (<>
		<div className="text-expander">
			<h2>Text Expander component</h2>
			<TextExpander>
				Space travel is the ultimate adventure! Imagine soaring past the stars
				and exploring new worlds. It's the stuff of dreams and science fiction,
				but believe it or not, space travel is a real thing. Humans and robots
				are constantly venturing out into the cosmos to uncover its secrets and
				push the boundaries of what's possible.
			</TextExpander>

			<TextExpander
				collapsedNumWords={40}
				expandButtonText="Show text"
				collapseButtonText="Collapse text"
				buttonColor="#ff6622"
			>
				Space travel requires some seriously amazing technology and
				collaboration between countries, private companies, and international
				space organizations. And while it's not always easy (or cheap), the
				results are out of this world. Think about the first time humans stepped
				foot on the moon or when rovers were sent to roam around on Mars.
			</TextExpander>

			<TextExpander expanded={true} className="box">
				Space missions have given us incredible insights into our universe and
				have inspired future generations to keep reaching for the stars. Space
				travel is a pretty cool thing to think about. Who knows what we'll
				discover next!
			</TextExpander>
		</div>

		<div>
			<h2>Star Rating component</h2>
			
			<StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} onSetRating={setRate} />
			your rate is {rate}
			{/*
			<StarRating maxRating={5} size={24} color="red" className="test" defaultRating={3} />
			*/}
		</div>

		<div>
			<h2>FAQ Accordion component</h2>
			<Accordion data={faqs} />
		</div>

		<div>
			<h2>Tabs</h2>
			<Tabbed content={tab_content} />
		</div>
	</>);
}

export default App;
