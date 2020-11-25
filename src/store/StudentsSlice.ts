import { createSlice, PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";
import axios from "axios";
import IStudent, { IPendiente, IMensualidad } from "../interfaces/student";
import IMonthPaidInfo from "../interfaces/MonthPaidInfo";
import IGroup from "../interfaces/Group";
import { firestore } from "../firebase";

const initialState: IStudent[] = [];

export const postStudentThunk = (student: IStudent) => async (dispatch: any) => {
  try {
    const newStudentRef = await firestore.collection("students").add(student);

    student.id = newStudentRef.id;
    console.log(student);
  } catch (error) {
    console.log(error);
  }
};

export const FetchStudentsThunk = (prmGroup: IGroup) => async (dispatch: any) => {
  dispatch(loadingStudents.actions.switchLoading({ newState: true }));
  let fetchedStudents: IStudent[] = [];
  try {
    const students = await firestore.collection("students").where("group", "==", prmGroup.name).get();
    students.forEach((student) => {
      fetchedStudents.push({
        name: student.get("name"),
        email: student.get("email"),
        born: student.get("born"),
        smartphone: student.get("smartphone"),
        fatherName: student.get("fatherName"),
        fatherPhone: student.get("fatherPhone"),
        motherName: student.get("motherName"),
        motherPhone: student.get("motherPhone"),
        admissionDate: student.get("admissionDate"),
        group: student.get("group"),
        id: student.id,
        pendiente: student.get("pendiente"),
        mensualidad: student.get("mensualidad"),
        description: student.get("description"),
      });
    });

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

      await firestore.collection("students").doc(student.id).update({ pendiente: newPendienteState });
    }
  } catch (error) {
    console.log(error);
  }
};

export const editMonthlyPaymentInfo = (Monthkey: string, Month: IMonthPaidInfo, studentKey: string) => async (dispatch: any) => {
  try {
    await firestore
      .collection("students")
      .doc(studentKey)
      .update({ [`mensualidad.${Monthkey}`]: Month });
  } catch (error) {
    console.log(error);
  }
};

export const postDescriptionThunk = (studentID: string, newDescription: string) => async (dispatch: any) => {
  try {
    await firestore.collection("students").doc(studentID).update({ "description.value": newDescription });
  } catch (error) {
    console.log(error);
  }
};

export const editStudent = (studentID: string, student: IStudent) => async (dispatch: any) => {
  delete student.id;
  try {
    await firestore.collection("students").doc(studentID).set(student);
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudentThunk = (studentID: string) => async (dispatch: any) => {
  try {
    await firestore.collection("students").doc(studentID).delete();
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
  },
});

const loadingStudents = createSlice({
  name: "loadingStudent",
  initialState: true,
  reducers: {
    switchLoading: (
      state,
      {
        payload,
      }: PayloadAction<{
        newState: boolean;
      }>
    ) => {
      return payload.newState;
    },
  },
});

export const { Fetchstudents } = StudentsSlice.actions;

export const studentsReducer = {
  Students: StudentsSlice.reducer,
  loadingStudents: loadingStudents.reducer,
};
