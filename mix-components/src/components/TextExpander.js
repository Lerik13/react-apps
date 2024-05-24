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
	const [isCollapsed, setIsCollapsed] = useState(!expanded);

	const buttonStyle = {
		color: buttonColor,
		paddingLeft: '5px',
	}

	return (
		<div className={className}>
			{isCollapsed ? children.substr(1, collapsedNumWords)+'...' : children}
			{isCollapsed
				? <a style={buttonStyle} href="#" onClick={() => setIsCollapsed(false)}>{expandButtonText}</a>
				: <a style={buttonStyle} href="#" onClick={() => setIsCollapsed(true)}>{collapseButtonText}</a>
			}
		</div>
	)
}