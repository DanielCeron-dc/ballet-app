import React from "react";
import Table, { Column as InterfaceColumn, Row as InterfaceRow } from "../UI/Table/Table";
import CheckBox from "../UI/CheckBox/CheckBox";
import colors, { Icolors } from "../../tools/colors";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import IconButton from "../UI/IconButton/IconButton";
import PaymentIcon from "@material-ui/icons/Payment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CallIcon from "@material-ui/icons/Call";
import LockIcon from "@material-ui/icons/Lock";
import BuildIcon from "@material-ui/icons/Build";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

interface Props {
	tableColor: string;
}

const StudentsTable: React.FC<Props> = (props) => {
	let color = colors[props.tableColor as keyof Icolors];

	let arrayColumns: InterfaceColumn[] = [
		{ width: 4, text: "" },
		{ width: 4, text: "n°" },
		{ width: 6, text: "Ingreso" },
		{ width: 5, text: "Matricula" },
		{ width: 5, text: "nombre" },
		{ width: 5, text: "edad" },
		{ width: 5, text: "pendiente" },
		{ width: 6, text: "Nacimiento" },
		{ width: 6, text: "Mensualidad" },
	];

	let arrayRows: InterfaceRow[] = [
		{
			text: "column",
			data: [
				<React.Fragment>
					<IconButton
						displayHoverElement={false}
						buttonColor='rgba(80, 82, 88, 0.401)'
						buttonColorHover='rgb(80, 82, 88)'
						tooltipColor={color[0]}>
						<BuildIcon fontSize='small' />
					</IconButton>
					<IconButton
						displayHoverElement={true}
						buttonHoverELement='+'
						hoverText='si'
						tooltipColor={color[0]}
						buttonColor={color[0]}
						tooltipButtonColor={color[0]}
						buttonColorHover={color[0]}>
						<QuestionAnswerIcon fontSize='small' />
					</IconButton>
				</React.Fragment>,
				"1",
				"30-ene.-20",
				"$ 150,000",
				"JUANITO ZARDIVIA HORMAZA",
				"4",
				<div>
					<CheckBox hoverText='matricula' hoverColor={color[2]} selectedColor={color[0]}>
						<PaymentIcon style={{ color: "white", fontSize: 20 }}></PaymentIcon>{" "}
					</CheckBox>
					<CheckBox hoverText='foto' hoverColor={color[2]} selectedColor={color[0]}>
						<AssignmentIndIcon style={{ color: "white", fontSize: 20 }}></AssignmentIndIcon>{" "}
					</CheckBox>
					<CheckBox hoverText='registro civil' hoverColor={color[2]} selectedColor={color[0]}>
						<AccountBalanceIcon style={{ color: "white", fontSize: 20 }}></AccountBalanceIcon>{" "}
					</CheckBox>
					<CheckBox hoverText='medico' hoverColor={color[2]} selectedColor={color[0]}>
						<LocalHospitalIcon style={{ color: "white", fontSize: 20 }}></LocalHospitalIcon>{" "}
					</CheckBox>
					<CheckBox hoverText='salud' hoverColor={color[2]} selectedColor={color[0]}>
						<EmojiEmotionsIcon style={{ color: "white", fontSize: 20 }}></EmojiEmotionsIcon>{" "}
					</CheckBox>
					<CheckBox hoverText='WhatsApp' hoverColor={color[2]} selectedColor={color[0]}>
						<CallIcon style={{ color: "white", fontSize: 20 }}></CallIcon>{" "}
					</CheckBox>
					<CheckBox hoverText='contrato' hoverColor={color[2]} selectedColor={color[0]}>
						<LockIcon style={{ color: "white", fontSize: 20 }}></LockIcon>{" "}
					</CheckBox>
				</div>,
				"29/09/2015",
				<div>
					<CheckBox hoverText='febrero' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>F</h2>
					</CheckBox>
					<CheckBox hoverText='marzo' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>M</h2>
					</CheckBox>
					<CheckBox hoverText='abril' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>A</h2>
					</CheckBox>
					<CheckBox hoverText='mayo' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>M</h2>
					</CheckBox>
					<CheckBox hoverText='junio' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>J</h2>
					</CheckBox>
					<CheckBox hoverText='julio' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>J</h2>
					</CheckBox>
					<CheckBox hoverText='agosto' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>A</h2>
					</CheckBox>
					<CheckBox hoverText='septiembre' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>S</h2>
					</CheckBox>
					<CheckBox hoverText='octubre' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>O</h2>
					</CheckBox>
					<CheckBox hoverText='noviembre' buttonHoverText='editar' hoverColor={color[2]} selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>N</h2>
					</CheckBox>
				</div>,
			],
		},
	];

	return <Table rows={arrayRows} columns={arrayColumns} color={color[0]} />;
};
export default StudentsTable;
