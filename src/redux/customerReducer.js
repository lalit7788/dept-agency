import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	customers: []
}

export const customersSlice = createSlice({
	name: "work",
	initialState,
	reducers: {
		loadCustomers: (state, action) => {
			state.customers = action.payload;
		}
  },
})

// Action creators are generated for each case reducer function
export const { loadCustomers } = customersSlice.actions;

export default customersSlice.reducer;
