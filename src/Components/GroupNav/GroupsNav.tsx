import React from "react";
import IconButton from "../UI/IconButton/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Button from "../UI/ButtonTypeTwo/ButtonTypeTwo";
import colors, { Icolors } from "../../tools/colors";
import Group from "../../interfaces/Group";

interface Props {
	groups: Group[];
	onCLicked: () => void;
	selectGroup: (group: Group) => void;
	selectedGroupName: string;
}

const GroupsNav: React.FC<Props> = (props) => {
	console.log("Rendering Groups Nav" + props.groups);
	let selected: boolean = false;
	let Groups: React.ReactNode;

	Groups = props.groups.map((group) => {
		group.name === props.selectedGroupName ? (selected = true) : (selected = false);

		return (
			<Button
				key={group.name}
				color={colors[group.color as keyof Icolors][0]}
				selected={selected}
				onCLick={() => {
					props.selectGroup(group);
				}}>
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

function areEqual(
	prevProps: Readonly<React.PropsWithChildren<Props>>,
	nextProps: Readonly<React.PropsWithChildren<Props>>
): boolean {
	return (
		prevProps.groups.length === nextProps.groups.length && prevProps.selectedGroupName === nextProps.selectedGroupName
	);
}

export default React.memo(GroupsNav, areEqual);
