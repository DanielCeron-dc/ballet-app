import React from "react";
import classes from "./Table.module.css";

export interface Column {
	text?: string;
	width: number;
}

export interface Row {
	text: string;
	data: (React.ReactNode | string)[];
}

interface Props {
	totalrows?: number;
	rows: Row[];
	columns: Column[];
	color?: string;
}

const table: React.FC<Props> = (props) => {
	const { columns, rows } = props;
	let Columns = columns.map((column, index) => {
		return (
			<th key={index + Math.random() * 100} className={classes.th}>
				{column.text}
			</th>
		);
	});

	let Rows = rows.map((row, index) => {
		return (
			<tr key={index + Math.random() * 100} className={classes.tr}>
				{row.data.map((value, index) => (
					<td key={index + Math.random() * 100} className={classes.td}>
						{value}
					</td>
				))}
			</tr>
		);
	});

	let HeadStyle: React.CSSProperties = {
		borderRadius: "50%",
		marginTop: "5px",
		background: props.color
			? "linear-gradient(to right, #ffffff," + props.color + ")"
			: "linear-gradient(to right, #ffffff, #3589ff)",
		borderBottom: "solid 5px black",
	};

	return (
		<table className={classes.TablaCss}>
			<thead style={HeadStyle}>
				<tr>{Columns}</tr>
			</thead>
			<tbody>{Rows}</tbody>
		</table>
	);
};

export default table;
