import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerReducer";
import workReducer from "./workReducer";

export const store = configureStore({
	reducer: {
		work: workReducer,
		customers: customerReducer
	},
});
