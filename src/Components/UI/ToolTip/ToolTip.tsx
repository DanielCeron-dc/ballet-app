import React from "react";
import Button from "../Button/Button";

interface Props {
	color?: string;
	hoverText: string;
	buttonColor?: string;
	hoverButtontext?: string;
}

const ToolTip: React.FC<Props> = (props) => {
	let hoverButton = props.hoverButtontext ? (
		<Button color={props.buttonColor ? props.buttonColor : "rgb(102, 172, 241)"}>{props.hoverButtontext}</Button>
	) : null;
	let style: React.CSSProperties = {
		top: "20px",
		width: "auto",
		left: "20px",
		background: props.color
			? "-webkit-linear-gradient(left, " + props.color + ", #fff)"
			: "-webkit-linear-gradient(left, #3589ff, #c3c7c700)",
		/* background: linear-gradient(to right, rgba(182, 184, 189, 0.129), #bfbebe); */
		color: "rgb(22, 24, 37)",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bolder",
		WebkitAlignItems: "end",
		justifyContent: "center",

		borderRadius: "0% 20% 20% 20%",

		borderColor: "#6a70e1",
		padding: "10px 20px 15px 20px",
		cursor: "initial",

		/* Position the tooltip  */
		position: "absolute",
		zIndex: 5,
	};

	return (
		<span style={style}>
			{props.hoverText} {hoverButton}
		</span>
	);
};

export default ToolTip;
