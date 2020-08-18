export interface Icolors {
	rojo: string[];
	verde: string[];
	azul: string[];
	naranja: string[];
	dorado: string[];
	rosado: string[];
	purpura: string[];
}

const colors = {
	rojo: ["#e43b3b", "#872525", "#eb9797"],
	verde: ["#3beb81", "#248c4e", "#9bebae"],
	azul: ["#3589ff", "#1c457e", "#9bb3eb"],
	naranja: ["rgb(250, 151, 59)", "#9d7917", "#f0c8a3"],
	dorado: ["#ab7d2a", "#6f5713", "#ddcfb0"],
	rosado: ["#da34c9", "#952489", "#ddb0d9"],
	purpura: ["#a038e6", "#6e289d", "#de9dec"],
} as Icolors;
export default colors;

//* [0] normal
//* [1] mas oscuro
//* [2] mas claro
