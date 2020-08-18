export default interface IForm {
	elementType: string;
	elementConfig: IelementConfig;
	options: IOption[];
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

export interface IelementConfigSelect {
	options: IOption[]; //!probablemente esta no sirve pa nada
}
export interface IOption {
	value: string;
	displayValue: string;
}

export interface IelementConfig {
	type: string;
	placeholer: string;
}
