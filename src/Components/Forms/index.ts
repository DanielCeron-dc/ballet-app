import formInterface, { IOption } from "./FormInterface";
import colors from "../../tools/colors";

let options: IOption[] = Object.keys(colors).map((color) => ({ value: color, displayValue: color }));

export const AddGroup = {
	name: {
		elementType: "input",
		elementConfig: {
			type: "text",
			placeholer: "nombre",
		},
		value: "",
		validation: {
			required: true,
		},
		valid: false,
	} as formInterface,
	color: {
		elementType: "select",
		elementConfig: {},
		options,

		value: "azul",
		validation: {
			required: true,
		},
		valid: true,
	} as formInterface,
};
