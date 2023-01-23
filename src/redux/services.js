import { loadCustomers } from "./customerReducer";
import { loadWorkData } from "./workReducer";

const getWorkData = () => {
	return async (dispatch) => {
		const response = await fetch("/work.json");
		const workData = await response.json();
		dispatch(loadWorkData(workData));
	}
};

const getCustomerData = () => {
	return async (dispatch) => {
		const response = await fetch("/customers.json");
		const customerData = await response.json();
		dispatch(loadCustomers(customerData));
	}
};

export {
	getWorkData,
	getCustomerData
};
