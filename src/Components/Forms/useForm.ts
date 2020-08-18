import { useState } from "react";

import formInterface from "./FormInterface";

const useForm = (prmForm: { [key: string]: formInterface }) => {
	const [form, setform] = useState(prmForm);

	const updateValues = (key: string, value: string, valid: boolean) => {
		let formCopy = { ...form };
		let elementInputCopy = { ...form[key] };
		elementInputCopy.value = value;
		elementInputCopy.valid = valid;
		formCopy[key] = elementInputCopy;
		setform(formCopy);
	};

	return { form: form as { [key: string]: formInterface }, updateValues, clear: () => setform(prmForm) };
};

export default useForm;
