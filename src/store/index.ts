import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

//* SLICES:
import { groupReducers } from "./Group.slice";
import { studentsReducer } from "./StudentsSlice";

import IStudent from "../interfaces/student";
import IGroup from "../interfaces/Group";
import IReceipt from "../interfaces/Receipt";

export interface IRootState {
  Groups: IGroup[];
  LoadingStudents: boolean;
  LoadingGroup: boolean;
  Students: IStudent[];
  Receipts: IReceipt[];
}

const Reducer = {
  Groups: groupReducers.Groups,
  LoadingGroup: groupReducers.LoadingGroup,
  Students: studentsReducer.Students,
  LoadingStudents: studentsReducer.loadingStudents,
};

export default configureStore({
  reducer: Reducer,
});

export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;
