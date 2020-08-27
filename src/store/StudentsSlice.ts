import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import IStudent, { IPendiente, IMensualidad } from "../interfaces/student";
import IMonthPaidInfo from "../interfaces/MonthPaidInfo";
import IGroup from "../interfaces/Group";

const initialState: IStudent[] = [];

export const postStudentThunk = (student: IStudent) => async (dispatch: any) => {
	try {
		let response = await axios.post("https://ballet-react-app.firebaseio.com/students.json", student);
		student.id = response.data.name;
		console.log(student);
		dispatch(StudentsSlice.actions.Create(student));
	} catch (error) {
		console.log(error);
	}
};

export const FetchStudentsThunk = (prmGroup: IGroup) => async (dispatch: any) => {
	dispatch(loadingStudents.actions.switchLoading({ newState: true }));
	try {
		let queryOrderBy = '?orderBy="group"&equalTo="' + prmGroup.name + '"';
		let fetchedStudents: IStudent[] = [];
		let response = await axios.get("https://ballet-react-app.firebaseio.com/students.json" + queryOrderBy);
		for (let key in response.data) {
			fetchedStudents.push({
				...response.data[key],
				id: key,
			});
		}

		dispatch(StudentsSlice.actions.Fetchstudents({ students: fetchedStudents }));
		dispatch(loadingStudents.actions.switchLoading({ newState: false }));
	} catch (error) {
		console.log(error);
	}
};

export const ChangeCheckBoxPendienteThunk = (student: IStudent, PendienteKey: string) => async (dispatch: any) => {
	try {
		let newPendienteState = student.pendiente;
		if (newPendienteState && student.id) {
			newPendienteState = {
				...newPendienteState,
				[PendienteKey as keyof IPendiente]: !newPendienteState[PendienteKey as keyof IPendiente],
			};

			await axios.put(
				"https://ballet-react-app.firebaseio.com/students/" + student.id + "/pendiente.json",
				newPendienteState
			);
			dispatch(StudentsSlice.actions.EditPendiente({ key: PendienteKey, studentName: student.name }));
		}
	} catch (error) {
		console.log(error);
	}
};

export const editMonthlyPaymentInfo = (Monthkey: string, Month: IMonthPaidInfo, studentKey: string) => async (
	dispatch: any
) => {
	try {
		await axios.put(
			"https://ballet-react-app.firebaseio.com/students/" + studentKey + "/mensualidad/" + Monthkey + ".json",
			Month
		);
		dispatch(StudentsSlice.actions.editMonthlyPaymentInformation({ Monthkey, studentKey, Month }));
	} catch (error) {
		console.log(error);
	}
};

const StudentsSlice = createSlice({
	name: "students",
	initialState,
	reducers: {
		Create: (state, { payload }: PayloadAction<IStudent>) => {
			state.push(payload);
		},
		Fetchstudents: (state, { payload }: PayloadAction<{ students: IStudent[] }>) => {
			return payload.students;
		},
		EditPendiente: (state, { payload }: PayloadAction<{ key: string; studentName: string }>) => {
			let studentToModify = state.find((student) => student.name === payload.studentName);
			if (studentToModify && studentToModify.pendiente) {
				studentToModify.pendiente[payload.key as keyof IPendiente] = !studentToModify?.pendiente[
					payload.key as keyof IPendiente
				];
			}
		},
		editMonthlyPaymentInformation: (
			state,
			{ payload }: PayloadAction<{ Monthkey: String; studentKey: string; Month: IMonthPaidInfo }>
		) => {
			let studentToModify = state.find((student) => student.id === payload.studentKey);
			if (studentToModify) {
				studentToModify.mensualidad[payload.Monthkey as keyof IMensualidad] = payload.Month;
			}
		},
	},
});

const loadingStudents = createSlice({
	name: "loadingStudent",
	initialState: true,
	reducers: {
		switchLoading: (state, { payload }: PayloadAction<{ newState: boolean }>) => {
			return payload.newState;
		},
	},
});

export const studentsReducer = { Students: StudentsSlice.reducer, loadingStudents: loadingStudents.reducer };
