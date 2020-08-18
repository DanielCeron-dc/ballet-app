import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

interface Group {
	name: string;
	color: string;
}

//*Thunk
export const PostGroupThunk = ({ name, color, id }: { name: string; color: string; id: string }) => async (
	dispatch: (arg0: { payload: { name: string; color: string; id: string }; type: string }) => void
) => {
	try {
		await axios.post("https://ballet-react-app.firebaseio.com/groups.json", { name, color });
		dispatch(GroupSlice.actions.Create({ name, color, id }));
	} catch (error) {
		console.log(error);
	}
};

const initialState: Group[] = [
	{
		name: "Learn React",
		color: "arroz",
	},
	{
		name: "Learn React",
		color: "arroz",
	},
	{
		name: "Learn React",
		color: "arroz",
	},
];

const GroupSlice = createSlice({
	name: "groups",
	initialState,
	reducers: {
		Create: (state, { payload }: PayloadAction<{ name: string; color: string; id: string }>) => {
			state.push(payload);
		},
	},
});

export const { Create: CreateGroupActionCreator } = GroupSlice.actions;
export const Reducer = { Group: GroupSlice.reducer };
