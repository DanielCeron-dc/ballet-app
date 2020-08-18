import React from "react";
import IconButton from "../UI/IconButton/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Button from "../UI/Button/Button";

export interface Group {
	name: string;
	color: string;
}

interface Props {
	groups: Group[];
	onCLicked: () => void;
}

const GroupsNav: React.FC<Props> = (props) => {
	let Groups: React.ReactNode = props.groups.map((group) => {
		return (
			<Button key={group.name} onCLick={() => {}}>
				{group.name}
			</Button>
		);
	});

	return (
		<div style={{ display: "block", marginBottom: 15, alignItems: "center" }}>
			{Groups}
			<IconButton displayHoverElement={false} onClick={() => props.onCLicked()} tooltipColor='red'>
				<AddIcon></AddIcon>
			</IconButton>
		</div>
	);
};

export default GroupsNav;
