import React, { useCallback } from "react";
import { AddStudent } from "../../../Components/Forms";
import Form from "../../../Components/Forms/Form";
import useForm from "../../../Components/Forms/useForm";

import Group from "../../../interfaces/Group";
import IStudent, { mensualidadInitialState } from "../../../interfaces/student";
import { useDispatch } from "react-redux";
import { postStudentThunk } from "../../../store/StudentsSlice";

interface Props {
	closeFormFunction: () => void;
	selectedGroup: Group | string;
}

const AddStudentForm: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const [formStudent, updateStudentFormValues, clearStudentForm] = useForm(AddStudent);

	const { closeFormFunction, selectedGroup } = props;

	const onStudentFormSubmit = useCallback(() => {
		if (typeof selectedGroup === "string") {
			return;
		}

		const student: IStudent = {
			name: formStudent["name"].value,
			email: formStudent["email"].value,
			born: formStudent["born"].value,
			smartphone: formStudent["phone"].value,
			fatherName: formStudent["padreNombre"].value,
			fatherPhone: formStudent["padreNumero"].value,
			motherName: formStudent["madreNombre"].value,
			motherPhone: formStudent["madreNumero"].value,
			admissionDate: formStudent["dateAdmission"].value,
			group: selectedGroup.name,
			pendiente: {
				matricula: false,
				foto: false,
				registro: false,
				medico: false,
				salud: false,
				whatsapp: false,
				contrato: false,
			},
			mensualidad: mensualidadInitialState,
			description: {value: ""},
		};
		dispatch(postStudentThunk(student));
		clearStudentForm();
		closeFormFunction();
	}, [closeFormFunction, clearStudentForm, dispatch, formStudent, selectedGroup]);

	return (
		<Form
			form={formStudent}
			title='NUEVO ESTUDIANTE'
			button='matricular'
			submit={onStudentFormSubmit}
			updateValues={updateStudentFormValues}
		/>
	);
};

function areEqual(
	prevProps: Readonly<React.PropsWithChildren<Props>>,
	nextProps: Readonly<React.PropsWithChildren<Props>>
): boolean {
	return prevProps.selectedGroup === nextProps.selectedGroup;
}

export default React.memo(AddStudentForm, areEqual);
