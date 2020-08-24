import { useReducer } from "react";

import formInterface from "./FormInterface";

type Action =
	| { type: "updateValues"; value: string; valid: boolean; key: string }
	| { type: "clean"; initialState: any };

type State = { [key: string]: formInterface };

function reducer(state: State, action: Action) {
	switch (action.type) {
		case "updateValues":
			let formCopy = { ...state };
			let elementInputCopy = { ...state[action.key] };
			elementInputCopy.value = action.value;
			elementInputCopy.valid = action.valid;
			formCopy[action.key] = elementInputCopy;
			return formCopy;
		case "clean":
			return action.initialState;
		default:
			break;
	}
}

const useForm = (prmForm: { [key: string]: formInterface }) => {
	const [form, dispatch] = useReducer(reducer, prmForm);
	//! with the fucking useState  this doesnt work  😡, i dont know why, 💚💚 but useReducer works better 💚💚💚💚💚,

	const updateValues = (key: string, value: string, valid: boolean) => {
		dispatch({ type: "updateValues", value, valid, key });
	};

	return [form, updateValues, () => dispatch({ type: "clean", initialState: prmForm })] as const; //*[actual form, function to update the form , function to clean the form]
};

export default useForm;
