import React, { useState } from "react";

interface Props {
	onCLick?: () => void;
	color?: string;
	colorHover?: string;
	disable?: boolean;
}

const Button: React.FC<Props> = (props) => {
	const [hover, setHover] = useState(false);

	let style: React.CSSProperties = {
		backgroundColor: props.color ? props.color : "rgb(250, 151, 59)",
		borderRadius: "30%",
		border: "none",
		color: "white",
		padding: "8px 7px",
		fontSize: "16px",
		cursor: "pointer",
		margin: "none",
		outline: "none",
		bottom: "4px",
		display: "inline-block",
		position: "relative",
	};

	if (hover) {
		style = { ...style, backgroundColor: props.colorHover ? props.colorHover : "#93908e" };
	} else {
		style = { ...style, backgroundColor: props.color ? props.color : "rgb(250, 151, 59)" };
	}

	if (props.disable) {
		style = { ...style, backgroundColor: "#a09da0", cursor: "not-allowed" };
	}

	const onMauseClick = () => {
		if (props.onCLick) {
			props.onCLick();
		}
	};

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

export default Button;
