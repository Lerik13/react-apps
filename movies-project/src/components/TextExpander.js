import { useState } from "react";

export default function TextExpander({
	children,
	collapsedNumWords = 20,
	expanded = false,
	className = '',
	expandButtonText="Show more",
	collapseButtonText="Show less",
	buttonColor="blue",
}) {
	const [isCollapsed, setIsCollapsed] = useState(!expanded);

	const buttonStyle = {
		color: `${buttonColor}`,
		paddingLeft: '5px',
	}

	return (
		<div className={className}>
			{isCollapsed ? allText.substr(1, collapsedNumWords)+'...' : children}
			{isCollapsed
				? <a style={buttonStyle} href="#" onClick={() => setIsCollapsed(false)}>{expandButtonText}</a>
				: <a style={buttonStyle} href="#" onClick={() => setIsCollapsed(true)}>{collapseButtonText}</a>
			}
		</div>
	)
}