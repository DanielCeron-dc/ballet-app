import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AddGroup } from "../../../Components/Forms";
import { PostGroupThunk } from "../../../store/Group.slice";
import Form from "../../../Components/Forms/Form";
import useForm from "../../../Components/Forms/useForm";

interface Props {
	closeFormFunction: () => void;
}

const AddGroupForm: React.FC<Props> = (props) => {
	const [formGroup, updateFormValues, clearFormGroup] = useForm(AddGroup);

	const dispatch = useDispatch();
	const { closeFormFunction } = props;

	const onFormGroupSubmit = useCallback(() => {
		clearFormGroup();
		dispatch(
			PostGroupThunk({ name: formGroup["name"].value, color: formGroup["color"].value, id: formGroup["name"].value })
		);
		closeFormFunction();
	}, [clearFormGroup, dispatch, formGroup, closeFormFunction]);

	return (
		<Form
			form={formGroup}
			title='NUEVO GRUPO'
			button='Crear Grupo'
			submit={onFormGroupSubmit}
			updateValues={updateFormValues}
		/>
	);
};

export default React.memo(AddGroupForm);
