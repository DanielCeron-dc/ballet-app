import React, { useState } from "react";
import ToolTip from "../ToolTip/ToolTip";

interface Props {
	displayHoverElement: boolean;
	hoverText?: string;
	buttonHoverELement?: string;
	buttonColor?: string;
	buttonColorHover?: string;
	onClick?: any;
	tooltipColor: string;
	tooltipButtonColor?: string;
}

const IconButton: React.FC<Props> = (props) => {
	const [hover, sethover] = useState(false);

	let buttonColor = props.buttonColor ? props.buttonColor : "DodgerBlue";
	let buttonColorHover = props.buttonColorHover ? props.buttonColorHover : "RoyalBlue";

	return (
		<div
			style={{
				borderRadius: "30%",
				border: "none",
				padding: "none",
				display: "inline-block",
				position: "relative",
				outline: "none",
				marginLeft: "3px",
			}}
			onMouseEnter={() => sethover(true)}
			onMouseLeave={() => sethover(false)}>
			<button
				onClick={() => props.onClick()}
				style={{
					backgroundColor: hover ? buttonColorHover : buttonColor,
					borderRadius: "30%",
					border: "none",
					color: "white",
					padding: "2px 7px",
					fontSize: "16px",
					cursor: "pointer",
					position: "relative",
					outline: "none",
					margin: "none",
				}}>
				{props.children}
			</button>
			{hover && props.hoverText && (
				<ToolTip
					hoverText={props.hoverText}
					hoverButtontext={props.buttonHoverELement}
					color={props.tooltipColor}
					buttonColor={props.tooltipButtonColor}
				/>
			)}
		</div>
	);
};

export default IconButton;
