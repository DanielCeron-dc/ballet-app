import IMonthPaidInfo from "./MonthPaidInfo";

export default interface Student {
	name: string;
	email: string;
	born: string;
	smartphone: number;
	fatherName: string;
	fatherPhone: number;
	motherName: string;
	motherPhone: number;
	admissionDate: string;
	group: string;
	id?: string; //* it must be optional, beacuse when starts the id can't be assigned, just can be assigned when it gets the answer from firebase
	pendiente: IPendiente;
	mensualidad: IMensualidad;
	description: string;
}

export interface IPendiente {
	matricula: boolean;
	foto: boolean;
	registro: boolean;
	medico: boolean;
	salud: boolean;
	whatsapp: boolean;
	contrato: boolean;
}

export interface IMensualidad {
	febrero: IMonthPaidInfo;
	marzo: IMonthPaidInfo;
	abril: IMonthPaidInfo;
	mayo: IMonthPaidInfo;
	junio: IMonthPaidInfo;
	julio: IMonthPaidInfo;
	agosto: IMonthPaidInfo;
	septiembre: IMonthPaidInfo;
	octubre: IMonthPaidInfo;
	noviembre: IMonthPaidInfo;
}

export const mensualidadInitialState: IMensualidad = {
	febrero: {
		complete: false,
		description: "",
		paid: 0,
	},
	marzo: {
		complete: false,
		description: "",
		paid: 0,
	},
	abril: {
		complete: false,
		description: "",
		paid: 0,
	},
	mayo: {
		complete: false,
		description: "",
		paid: 0,
	},
	junio: {
		complete: false,
		description: "",
		paid: 0,
	},
	julio: {
		complete: false,
		description: "",
		paid: 0,
	},
	agosto: {
		complete: false,
		description: "",
		paid: 0,
	},
	septiembre: {
		complete: false,
		description: "",
		paid: 0,
	},
	octubre: {
		complete: false,
		description: "",
		paid: 0,
	},
	noviembre: {
		complete: false,
		description: "",
		paid: 0,
	},
};
