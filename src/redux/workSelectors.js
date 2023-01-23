import { createSelector } from "@reduxjs/toolkit";

const filteredWorkCategories = createSelector(
	(state) => state.work,
	(workState) => {
		const { workData, selectedIndustries } = workState;

		// Return a unique set of categories, filtered based on the currently selected industry names
		return new Set(workData
			.filter((workItem) => {
				if (selectedIndustries && selectedIndustries.indexOf("all-industries") === 0) {
					return true;
				}
				return selectedIndustries.indexOf(workItem.industry) >= 0;
			})
			.flatMap((workItem) => workItem.categories)
		);
	}
);

const filteredWorkIndustries = createSelector(
	(state) => state.work,
	(workState) => {
		const { workData, selectedCategories } = workState;

		// Return a unique set of industry names, filtered based on the currently selected categories
		return new Set(workData
			.filter((workItem) => selectedCategories && selectedCategories.indexOf("all-work") === 0 ? true
				: workItem.categories.some((wCat) => selectedCategories.indexOf(wCat) >= 0))
			.map((workItem) => workItem.industry)
		);
	}
);

export {
	filteredWorkCategories,
	filteredWorkIndustries
};
