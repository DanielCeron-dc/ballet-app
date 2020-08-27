import React, { useState, useCallback } from "react";
import { IelementConfig, Ivalidation, IOption } from "./FormInterface";
import classes from "./Input.module.css";

interface Props {
	inputType: string;
	id: string;
	inputConfig: IelementConfig;
	options?: IOption[];
	value: string;
	validation: Ivalidation;
	inputChanged: (key: string, value: string, valid: boolean) => void;
	label?: string;
	style?: React.CSSProperties;
}

const Input: React.FC<Props> = (props) => {
	const [valid, setValid] = useState(true);
	const [touched, settouched] = useState(false);
	const { inputChanged, validation, id } = props;
	let classesArray = [classes.InputElement];

	/* console.log("RENDERING CUSTOM INPUT"); */

	if (!valid && touched) {
		classesArray.push(classes.Invalid);
	}

	const checkValidity = (newValue: string, rules: Ivalidation) => {
		let isValid = true;
		if (rules.required) {
			isValid = newValue.trim() !== "" && isValid;
		}
		if (rules.minLenght) {
			isValid = newValue.length >= rules.minLenght && isValid;
		}
		if (rules.maxLenght) {
			isValid = newValue.length <= rules.maxLenght && isValid;
		}
		if (rules.isEmail) {
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			isValid = pattern.test(newValue) && isValid;
		}
		if (rules.isNumeric) {
			const pattern = /^\d+$/;
			isValid = pattern.test(newValue) && isValid;
		}
		setValid(isValid);
		return isValid;
	};

	const inputChangedHandler = useCallback(
		(event) => {
			event.preventDefault();
			settouched(true);

			let validCopy = checkValidity(event.target.value, validation);
			inputChanged(id, event.target.value, validCopy);
		},
		[inputChanged, validation, id]
	);

	let InputElement: React.ReactNode;
	switch (props.inputType) {
		case "input":
			InputElement = (
				<input
					className={classesArray.join(" ")}
					style={props.style}
					placeholder={props.inputConfig.placeholer}
					type={props.inputConfig.type}
					value={props.value}
					onChange={(e) => inputChangedHandler(e)}
				/>
			);
			break;
		case "textarea":
			InputElement = (
				<textarea
					rows={5}
					className={classesArray.join(" ")}
					placeholder={props.inputConfig.placeholer}
					value={props.value}
					onChange={(e) => inputChangedHandler(e)}
				/>
			);
			break;
		case "select":
			if (!props.options) break;
			InputElement = (
				<select value={props.value} onChange={(e) => inputChangedHandler(e)} className={classes.SelectElement}>
					{props.options.map((optionConfig) => (
						<option value={optionConfig.value} key={optionConfig.value}>
							{optionConfig.displayValue}
						</option>
					))}
				</select>
			);
			break;

		default:
			InputElement = <input className={classesArray.join(" ")} value={props.value} />;
	}

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{InputElement}
		</div>
	);
};

function areEqual(
	prevProps: Readonly<React.PropsWithChildren<Props>>,
	nextProps: Readonly<React.PropsWithChildren<Props>>
): boolean {
	return prevProps.value === nextProps.value;
}

export default React.memo(Input, areEqual);
