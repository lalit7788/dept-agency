import { loadWorkData } from "./workReducer";

const getWorkData = () => {
	return async (dispatch) => {
		const response = await fetch("/work.json");
		const workData = await response.json();
		dispatch(loadWorkData(workData));
	}
};

export {
	getWorkData
};
