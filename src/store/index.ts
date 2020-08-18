import { configureStore } from "@reduxjs/toolkit";

import { Reducer } from "./Group.slice";

export default configureStore({
	reducer: Reducer,
});
