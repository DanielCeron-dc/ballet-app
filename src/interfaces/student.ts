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
	mensualidad?: IMensualidad;
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

interface IMensualidad {
	febrero: boolean;
	marzo: boolean;
	abril: boolean;
	mayo: boolean;
	junio: boolean;
	julio: boolean;
	agosto: boolean;
	septiembre: boolean;
	octubre: boolean;
	noviembre: boolean;
}
