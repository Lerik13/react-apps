import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
	collapsedNumWords: PropTypes.number,
	expandButtonText: PropTypes.string,
	collapseButtonText: PropTypes.string,
	buttonColor: PropTypes.string,
	expanded: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.string,
}

export default function TextExpander({
	collapsedNumWords = 20,
	expandButtonText="Show more",
	collapseButtonText="Show less",
	buttonColor="#1f09cd",
	expanded = false,
	className = '',
	children,
}) {
	const [isExpanded, setIsExpanded] = useState(expanded);

	const displayText = isExpanded
		? children
		: children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

	const buttonStyle = {
		background: "none",
		border: "none",
		font: "inherit",
		cursor: "pointer",
		marginLeft: "6px",
		color: buttonColor
	};

	return (
		<div className={className}>
			<span>{displayText}</span>
			<button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
				{isExpanded ? collapseButtonText : expandButtonText}
			</button>
		</div>
	);
}