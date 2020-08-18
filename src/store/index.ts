import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { Reducer, Group } from "./Group.slice";

export interface IRootState {
	Groups: Group[];
	LoadingGroup: boolean;
}

export default configureStore({
	reducer: Reducer,
});
export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;
