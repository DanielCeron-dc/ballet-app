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

import Group from "../../interfaces/Group";
import IStudent from "../../interfaces/student";
import ISelectedMonth from "../../interfaces/selectedMonth";

interface Props {
	tableColor: string;
	students: IStudent[];
	selectedGroup: string | Group;
	changePendienteState: (student: IStudent, PendienteKey: string) => void;
	openMonthlyPayment: (student: ISelectedMonth) => void;
}

const StudentsTable: React.FC<Props> = (props) => {
	console.log("RENDERING STUDENTS TABLE" + props.students);

	const { students } = props;

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

	let dataRows: InterfaceRow[] = students.map((student, index) => {
		return {
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
				index,
				student.born,
				"150.000",
				student.name,
				"edad",
				<div>
					<CheckBox
						onClick={() => props.changePendienteState(student, "matricula")}
						hoverText='matricula'
						hoverColor={color[2]}
						selectedColor={color[0]}
						selected={student.pendiente?.matricula}>
						<PaymentIcon style={{ color: "white", fontSize: 20 }}></PaymentIcon>{" "}
					</CheckBox>
					<CheckBox
						onClick={() => props.changePendienteState(student, "foto")}
						hoverText='foto'
						hoverColor={color[2]}
						selectedColor={color[0]}
						selected={student.pendiente?.foto}>
						<AssignmentIndIcon style={{ color: "white", fontSize: 20 }}></AssignmentIndIcon>{" "}
					</CheckBox>
					<CheckBox
						onClick={() => props.changePendienteState(student, "registro")}
						hoverText='registro civil'
						hoverColor={color[2]}
						selectedColor={color[0]}
						selected={student.pendiente?.registro}>
						<AccountBalanceIcon style={{ color: "white", fontSize: 20 }}></AccountBalanceIcon>{" "}
					</CheckBox>
					<CheckBox
						onClick={() => props.changePendienteState(student, "medico")}
						hoverText='medico'
						hoverColor={color[2]}
						selectedColor={color[0]}
						selected={student.pendiente?.medico}>
						<LocalHospitalIcon style={{ color: "white", fontSize: 20 }}></LocalHospitalIcon>{" "}
					</CheckBox>
					<CheckBox
						onClick={() => props.changePendienteState(student, "salud")}
						hoverText='salud'
						hoverColor={color[2]}
						selectedColor={color[0]}
						selected={student.pendiente?.salud}>
						<EmojiEmotionsIcon style={{ color: "white", fontSize: 20 }}></EmojiEmotionsIcon>{" "}
					</CheckBox>
					<CheckBox
						onClick={() => props.changePendienteState(student, "whatsapp")}
						hoverText='WhatsApp'
						hoverColor={color[2]}
						selectedColor={color[0]}
						selected={student.pendiente?.whatsapp}>
						<CallIcon style={{ color: "white", fontSize: 20 }}></CallIcon>{" "}
					</CheckBox>
					<CheckBox
						onClick={() => props.changePendienteState(student, "contrato")}
						hoverText='contrato'
						hoverColor={color[2]}
						selectedColor={color[0]}
						selected={student.pendiente?.contrato}>
						<LockIcon style={{ color: "white", fontSize: 20 }}></LockIcon>{" "}
					</CheckBox>
				</div>,
				student.admissionDate,
				<div>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "febrero",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='febrero'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>F</h2>
					</CheckBox>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "marzo",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='marzo'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>M</h2>
					</CheckBox>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "abril",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='abril'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>A</h2>
					</CheckBox>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "mayo",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='mayo'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>M</h2>
					</CheckBox>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "junio",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='junio'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>J</h2>
					</CheckBox>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "julio",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='julio'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>J</h2>
					</CheckBox>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "agosto",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='agosto'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>A</h2>
					</CheckBox>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "septiembre",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='septiembre'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>S</h2>
					</CheckBox>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "octubre",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='octubre'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>O</h2>
					</CheckBox>
					<CheckBox
						onClick={() =>
							props.openMonthlyPayment({
								studentName: student.name,
								Month: "noviembre",
								idStudent: student.id ? student.id : "it should not happen",
							})
						}
						hoverText='noviembre'
						buttonHoverText='editar'
						hoverColor={color[2]}
						selectedColor={color[0]}>
						<h2 style={{ display: "inline" }}>N</h2>
					</CheckBox>
				</div>,
			],
		};
	});

	console.log(dataRows);

	return students.length !== 0 ? (
		<Table rows={dataRows} columns={arrayColumns} color={color[0]} />
	) : (
		<h1>
			no hay estudiantes en este grupo
			<span role='img' aria-label='carita zi'>
				🤔
			</span>
		</h1>
	);
};

function areEqual(
	prevProps: Readonly<React.PropsWithChildren<Props>>,
	nextProps: Readonly<React.PropsWithChildren<Props>>
): boolean {
	return prevProps.students === nextProps.students;
}

export default React.memo(StudentsTable, areEqual);
