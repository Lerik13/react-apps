import { useState } from "react";

export function Tabbed({ content }) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className="tab-container">
			<div className="tabs">
				<Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
				<Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
				<Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
				<Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
			</div>

			{activeTab <= 2 ? (
				<TabContent
					item={content.at(activeTab)}
					key={content.at(activeTab).summary}
				/>
			) : (
				<DifferentContent />
			)}
		</div>
	);
}

function Tab({ num, activeTab, onClick }) {
	return (
		<button
			className={activeTab === num ? "tab active" : "tab"}
			onClick={() => onClick(num)}
		>
			Tab {num + 1}
		</button>
	);
}

function TabContent({ item }) {
	const [showDetails, setShowDetails] = useState(true);
	const [likes, setLikes] = useState(0);

	function handleInc() {
		setLikes((likes) => likes + 1);
	}

	function handleTripleInc() {
		setLikes((likes) => likes + 1);
		setLikes((likes) => likes + 1);
		setLikes((likes) => likes + 1);
	}

	function handleUndo() {
		setShowDetails(true);
		setLikes(0);
	}

	function handleUndoLater() {
		setTimeout(handleUndo, 2000);
	}

	return (
		<div className="tab-content">
			<h4>{item.summary}</h4>
			{showDetails && <p>{item.details}</p>}

			<div className="tab-actions">
				<button onClick={() => setShowDetails((h) => !h)}>
					{showDetails ? "Hide" : "Show"} details
				</button>

				<div className="hearts-counter">
					<span>{likes} ❤️</span>
					<button onClick={handleInc}>+</button>
					<button onClick={handleTripleInc}>+++</button>
				</div>
			</div>

			<div className="tab-undo">
				<button onClick={handleUndo}>Undo</button>
				<button onClick={handleUndoLater}>Undo in 2s</button>
			</div>
		</div>
	);
}

function DifferentContent() {
	return (
		<div className="tab-content">
			<h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
		</div>
	);
}