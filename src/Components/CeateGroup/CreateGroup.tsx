import React from "react";
import Button from "../UI/Button/Button";

interface Props {
	onCLick: () => void;
}
const CreateGroup: React.FC<Props> = (props) => {
	return (
		<div>
			<h2>Nuevo Grupo</h2>
			<input type='text' placeholder='nombre' />
			<input type='text' placeholder='color' />
			<Button onCLick={() => props.onCLick()}>Crear Grupo</Button>
		</div>
	);
};

export default React.memo(CreateGroup);
