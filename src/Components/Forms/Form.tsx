import React, { useCallback, useState, useEffect } from "react";
import formInterface from "./FormInterface";
import Input from "./Input";
import Button from "../UI/Button/Button";

interface Props {
	title?: string;
	form: { [key: string]: formInterface };
	button?: string;
	updateValues: (key: string, value: string, valid: boolean) => void;
	submit: () => void;
}

const Form: React.FC<Props> = (props) => {
	let InputElements: React.ReactNodeArray = [];

	const [valid, setvalid] = useState(false);
	const { form, updateValues } = props;

	const checkValidity = useCallback((prmform) => {
		for (let key in prmform) {
			if (prmform[key].validation) {
				if (prmform[key].valid === false) {
					return false;
				}
			}
		}
		return true;
	}, []);

	useEffect(() => {
		setvalid(checkValidity(form));
	}, [form, checkValidity]);

	const loadForm = useCallback(() => {
		for (let key in form) {
			InputElements.push(
				<Input
					key={key}
					id={key}
					value={form[key].value}
					inputType={form[key].elementType}
					inputConfig={form[key].elementConfig}
					options={form[key].options}
					inputChanged={updateValues}
					validation={form[key].validation}
					style={form[key].style}
				/>
			);
		}
	}, [InputElements, form, updateValues]);

	loadForm();

	const SubmitHanlder = (event: React.FormEvent) => {
		event.preventDefault();
		if (valid) {
			props.submit();
		}
	};

	return (
		<React.Fragment>
			<h4>{props.title}</h4>
			<form onSubmit={SubmitHanlder}>{InputElements}</form>
			<div style={{ marginTop: "20px" }}>
				{props.button && (
					<Button disable={!valid} color='#6e6edf' onCLick={props.submit}>
						{props.button}
					</Button>
				)}
			</div>
		</React.Fragment>
	);
};

function areEqual(
	prevProps: Readonly<React.PropsWithChildren<Props>>,
	nextProps: Readonly<React.PropsWithChildren<Props>>
): boolean {
	let result: boolean = true;
	for (let key in nextProps.form) {
		if (prevProps.form[key].value !== nextProps.form[key].value) {
			result = false;
		}
	}

	return result;
}

export default React.memo(Form, areEqual);
