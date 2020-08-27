import React, { useState, useEffect } from "react";
import useForm from "../../../Components/Forms/useForm";
import Form from "../../../Components/Forms/Form";
import { ModifyMonthlyPayment } from "../../../Components/Forms";
import ISelectedMonth from "../../../interfaces/selectedMonth";

import { IMensualidad } from "../../../interfaces/student";
import IMonth from "../../../interfaces/MonthPaidInfo";
import { editMonthlyPaymentInfo } from "../../../store/StudentsSlice";
import { useDispatch } from "react-redux";

interface Props {
	closeFormFunction: () => void;
	selectedMonth: ISelectedMonth;
}

const ModifyMonthlyPaymentForm: React.FC<Props> = (props) => {
	const dispatch = useDispatch();
	const { selectedMonth } = props;
	const [formMonthlyPayment, updateMonthlyPayment, clearMonthlyPayment] = useForm(ModifyMonthlyPayment);

	useEffect(() => {
		updateMonthlyPayment(
			"description",
			selectedMonth.student
				? selectedMonth.student.mensualidad[selectedMonth.Month as keyof IMensualidad].description
				: "",
			true
		);
		updateMonthlyPayment(
			"amount",
			selectedMonth.student
				? selectedMonth.student.mensualidad[selectedMonth.Month as keyof IMensualidad].paid.toString()
				: "",
			true
		);
	}, [selectedMonth, updateMonthlyPayment]);

	const submitHandler = () => {
		let monthPaid: IMonth = {
			complete: true,
			description: formMonthlyPayment["description"].value,
			paid: formMonthlyPayment["amount"].value,
		};
		dispatch(editMonthlyPaymentInfo(selectedMonth.Month, monthPaid, selectedMonth.idStudent));
		clearMonthlyPayment();
		props.closeFormFunction();
	};
	let title = "actualizar " + selectedMonth.Month + " de " + selectedMonth.studentName;

	return (
		<Form
			form={formMonthlyPayment}
			updateValues={updateMonthlyPayment}
			submit={submitHandler}
			title={title}
			button='actualizar mensualidad'></Form>
	);
};

export default ModifyMonthlyPaymentForm;
