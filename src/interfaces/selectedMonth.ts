import Istudent from "./student";

export default interface IMonthSelectedInfo {
	studentName: string;
	idStudent: string;
	Month: string;
	student?: Istudent;
}
