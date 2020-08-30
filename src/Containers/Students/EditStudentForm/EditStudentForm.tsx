import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {editStudent} from "../../../store/StudentsSlice";

import IStudent, {IMensualidad} from "../../../interfaces/student";

import Form from "../../../Components/Forms/Form";
import formInterface from "../../../Components/Forms/FormInterface";
import {AddStudent} from "../../../Components/Forms";
import useForm from "../../../Components/Forms/useForm";
import Button from "../../../Components/UI/Button/Button";


interface Props  {
    student: IStudent,
    closeFormFunction: () => void,
}

const EditStudentForm:React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    console.log(props.student);

    const [form, updateForm, clearForm ] = useForm({
	name: {
		elementType: "input",
		elementConfig: {
			type: "text",
			placeholer: "nombre",
		},
		value: props.student.name,
		validation: {
			required: true,
		},
		valid: true,
	} as formInterface,

	email: {
		elementType: "input",
		elementConfig: {
			type: "text",
			placeholer: "correo",
		},
		value: props.student.email,
		validation: {
			isEmail: true,
			required: true,
		},
		valid: true,
	} as formInterface,

	born: {
		elementType: "input",
		elementConfig: {
			type: "date",
			placeholer: "fecha de nacimiento",
		},
		value: props.student.born,
		validation: {
			required: true,
		},
		valid: true,
	} as formInterface,

	phone: {
		elementType: "input",
		elementConfig: {
			type: "number",
			placeholer: "numero de celular",
		},
		value: "" + props.student.smartphone,
		validation: {
			required: true,
		},
		valid: true,
	} as formInterface,

	padreNombre: {
		elementType: "input",
		elementConfig: {
			type: "text",
			placeholer: "nombre del padre o responsable",
		},
		value: props.student.fatherName,
		validation: {
			required: true,
		},
		style: {
			width: "calc(50% - 3px)",
			float: "left",
			marginBottom: "10px",
		},
		valid: true,
	} as formInterface,

	padreNumero: {
		elementType: "input",
		elementConfig: {
			type: "number",
			placeholer: "numero de celular del padre",
		},
		value: "" + props.student.fatherPhone,
		validation: {
			required: true,
		},
		style: {
			width: "calc(50% - 3px)",
			float: "right",
			marginBottom: "10px",
		},
		valid: true,
	} as formInterface,

	madreNombre: {
		elementType: "input",
		elementConfig: {
			type: "text",
			placeholer: "nombre de la madre o responsable #2",
		},
		value: props.student.motherName,
		validation: {
			required: true,
		},
		style: {
			width: "calc(50% - 3px)",
			float: "left",
			marginBottom: "10px",
		},
		valid: true,
	} as formInterface,

	madreNumero: {
		elementType: "input",
		elementConfig: {
			type: "number",
			placeholer: "numero de celular de la Madre",
		},
		value: "" + props.student.motherPhone,
		validation: {},
		style: {
			width: "calc(50% - 3px)",
			float: "right",
			marginBottom: "10px",
		},
		valid: true,
	} as formInterface,

	dateAdmission: {
		elementType: "input",
		elementConfig: {
			type: "date",
			placeholer: "fecha de ingreso",
		},
		value: props.student.admissionDate,
		validation: {
			required: true,
		},
		valid: true,
	} as formInterface,
});
    const submitHandler = () => {
		const student: IStudent = {
			name: form["name"].value,
			email: form["email"].value,
			born: form["born"].value,
			smartphone: form["phone"].value,
			fatherName: form["padreNombre"].value,
			fatherPhone: form["padreNumero"].value,
			motherName: form["madreNombre"].value,
			motherPhone: form["madreNumero"].value,
			admissionDate: form["dateAdmission"].value,
			group: props.student.group,
			pendiente: {
				matricula: false,
				foto: false,
				registro: false,
				medico: false,
				salud: false,
				whatsapp: false,
				contrato: false,
			},
			mensualidad: props.student.mensualidad,
			description: props.student.description,
		};
		dispatch(editStudent(props.student.id ? props.student.id : "this should not happen :p", student));
		clearForm();
		props.closeFormFunction();
    }


    return <Form form={form} updateValues={updateForm} title= {"editar a " + props.student.name}  submit = {() => submitHandler()} button = "EDITAR" ></Form>


}

function  areEquals(prevProps: Readonly<React.PropsWithChildren<Props>>, nextProps: Readonly<React.PropsWithChildren<Props>>): boolean {
    return prevProps.student === nextProps.student;
}


export default React.memo(EditStudentForm, areEquals);
