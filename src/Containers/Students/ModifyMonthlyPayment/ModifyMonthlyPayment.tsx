bug import React, { useState, useEffect } from "react";
import useForm from "../../../Components/Forms/useForm";
import Form from "../../../Components/Forms/Form";
import { ModifyMonthlyPayment } from "../../../Components/Forms";
import ISelectedMonth from "../../../interfaces/selectedMonth";

interface Props {
	closeFormFunction: () => void;
	selectedMonth: ISelectedMonth;
}

const ModifyMonthlyPaymentForm: React.FC<Props> = (props) => {
	const [formMonthlyPayment, updateMonthlyPayment, clearMonthlyPayment] = useForm(ModifyMonthlyPayment);

	const submitHandler = () => {};
	let title = "actualizar " + props.selectedMonth.idStudent + " de " + props.selectedMonth.studentName;

	return (
		<Form
			form={formMonthlyPayment}
			updateValues={updateMonthlyPayment}
			submit={clearMonthlyPayment}
			title={title}
			button='actualizar mensualidad'></Form>
	);
};

export default ModifyMonthlyPaymentForm;
