import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	workData: [],
	selectedCategories: ["all-work"],
	selectedIndustries: ["all-industries"]
}

export const workSlice = createSlice({
	name: "work",
	initialState,
	reducers: {
		loadWorkData: (state, action) => {
			state.workData = action.payload;
		},
		setSelectedCategories: (state, { payload }) => {
			if (payload.length > 1) {
				const allCategoriesIndex = payload.indexOf("all-work");

				if (allCategoriesIndex >= 0) {
					if (allCategoriesIndex === 0) {
						const newCategories = payload.slice();
						newCategories.splice(0, 1);
						state.selectedCategories = newCategories;
					} else {
						state.selectedCategories = ["all-work"];
					}
				} else {
					state.selectedCategories = payload;
				}
			} else {
				if (!payload.length || payload.indexOf("all-work") >= 0) {
					//  If nothing or all-work has been selected
					state.selectedCategories = ["all-work"];
				} else {
					state.selectedCategories = payload;
				}
			}
		},
		setSelectedIndustries: (state, { payload }) => {
			if (payload.length > 1) {
				const allIndustriesIndex = payload.indexOf("all-industries");

				if (allIndustriesIndex >= 0) {
					if (allIndustriesIndex === 0) {
						const newIndustries = payload.slice();
						newIndustries.splice(0, 1);
						state.selectedIndustries = newIndustries;
					} else {
						state.selectedIndustries = ["all-industries"];
					}
				} else {
					state.selectedIndustries = payload;
				}
			} else {
				if (!payload.length || payload.indexOf("all-industries") >= 0) {
					state.selectedIndustries = ["all-industries"];
				} else {
					state.selectedIndustries = payload;
				}
			}
		}
  },
})

// Action creators are generated for each case reducer function
export const { loadWorkData, setSelectedCategories, setSelectedIndustries } = workSlice.actions;

export default workSlice.reducer;
