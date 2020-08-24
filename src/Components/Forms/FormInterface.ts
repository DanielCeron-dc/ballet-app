import React from "react";

export default interface IForm {
	elementType: string;
	elementConfig: IelementConfig;
	options: IOption[];
	style?: React.CSSProperties;
	value: string;
	validation: Ivalidation;
	valid: boolean;
}

export interface Ivalidation {
	required?: boolean;
	isEmail?: boolean;
	isNumeric?: boolean;
	maxLenght?: number;
	minLenght?: number;
}

export interface IOption {
	value: string;
	displayValue: string;
}

export interface IelementConfig {
	type: string;
	placeholer: string;
}
