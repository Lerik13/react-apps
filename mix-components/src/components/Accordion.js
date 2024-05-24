import { useState } from "react";

export default function Accordion({ data }) {
	const [curOpen, setCurOpen] = useState(null);

	return (
		<div className="accordion">
			{data.map((el, i) => 
				<AccordionItem
					curOpen={curOpen}
					onOpen={setCurOpen}
					num={i}
					title={el.title}
					key={el.title} 
				>
					{el.text}
				</AccordionItem>
			)}
		</div>
	)
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
	//const [isOpen, setIsOpen] = useState(false);
	const isOpen = num === curOpen;

	function handleToggle() {
		//setIsOpen((isOpen) => !isOpen);
		onOpen(isOpen ? null : num);
	}

	return (
		<div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
			<p className="number">{num < 10 ? `0${num + 1}` : num + 1}</p>
			<p className="title">{title}</p>
			<p className="icon">
				{isOpen ? "-" : "+"}
			</p>
			{isOpen && <div className="content-box">{children}</div>}
		</div>
	)
}