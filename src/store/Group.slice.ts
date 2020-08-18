import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

export interface Group {
	name: string;
	color: string;
}

//*Thunk
export const PostGroupThunk = ({ name, color, id }: { name: string; color: string; id: string }) => async (
	dispatch: (action: { payload: { name: string; color: string; id: string }; type: string }) => void
) => {
	try {
		await axios.post("https://ballet-react-app.firebaseio.com/groups.json", { name, color });
		dispatch(GroupSlice.actions.Create({ name, color, id }));
	} catch (error) {
		console.log(error);
	}
};

//*trunk
export const FetchGroupsFromFirebase = () => async (dispatch: any) => {
	let fetchedGroups: Group[] = [];
	dispatch(loadingGroup.actions.switchLoading({ newState: true }));
	try {
		let response = await axios.get("https://ballet-react-app.firebaseio.com/groups.json");
		for (let key in response.data) {
			fetchedGroups.push({
				...response.data[key],
			});
		}
		dispatch(GroupSlice.actions.FetchGroups({ groups: fetchedGroups }));
		dispatch(loadingGroup.actions.switchLoading({ newState: false }));
	} catch (error) {
		console.log("hola");
	}
};

const initialState: Group[] = [];

const GroupSlice = createSlice({
	name: "groups",
	initialState,
	reducers: {
		Create: (state, { payload }: PayloadAction<{ name: string; color: string; id: string }>) => {
			state.push(payload);
		},
		FetchGroups: (state, { payload }: PayloadAction<{ groups: Group[] }>) => {
			return payload.groups;
		},
	},
});

const loadingGroup = createSlice({
	name: "loadingGroup",
	initialState: true,
	reducers: {
		switchLoading: (state, { payload }: PayloadAction<{ newState: boolean }>) => {
			return payload.newState;
		},
	},
});

export const { Create: CreateGroupActionCreator } = GroupSlice.actions;
export const Reducer = { Groups: GroupSlice.reducer, LoadingGroup: loadingGroup.reducer };
