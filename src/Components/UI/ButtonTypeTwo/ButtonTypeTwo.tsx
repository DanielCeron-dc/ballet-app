import React, { useState } from "react";

interface Props {
	onCLick?: () => void;
	color?: string;
	colorHover?: string;
	disable?: boolean;
	selected?: boolean;
}

const ButtonTypeTwo: React.FC<Props> = (props) => {
	const [hover, setHover] = useState(false);

	let style: React.CSSProperties = {
		backgroundColor: "#a5a5ac00",
		borderRadius: "30%",
		borderBottomStyle: "solid",
		borderBottomColor: props.color ? props.color : "black",
		borderBottomWidth: "10px",
		borderTopStyle: "unset",
		borderLeftStyle: "unset",
		borderRightStyle: "unset",
		color: props.color ? props.color : "white",
		padding: "4px 20px",
		fontSize: "16px",
		cursor: "pointer",
		margin: "3px",
		outline: "none",
		bottom: "10px",
		display: "inline-block",
		position: "relative",
	};

	if (hover) {
		style = { ...style, fontSize: "18px" };
	} else {
		style = { ...style, borderBottomColor: props.color ? props.color : "rgb(250, 151, 59)" };
	}

	if (props.disable) {
		style = { ...style, borderBottomColor: "#a09da0", cursor: "not-allowed" };
	}
	if (props.selected) {
		style = style = { ...style, fontSize: "23px" };
	}
	return (
		<button
			style={style}
			disabled={props.disable}
			onClick={props.onCLick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			{props.children}
		</button>
	);
};

export default ButtonTypeTwo;
