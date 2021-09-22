import { types } from '../type/types';

const initialstate = {
	clothes: [],
	gender: null,
	page: Number(localStorage.getItem('pageState' || 1)),
};

export const filterReducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.filterBygender:
			return {
				...state,
				clothes: action.payload.clothes,
				gender: action.payload.gender,
			};
		case types.filterByType:
			return {
				...state,
				clothes: action.payload,
			};
		case types.filterByColor:
			return {
				...state,
				clothes: action.payload,
			};
		case types.filterByPrice:
			return {
				...state,
				clothes: action.payload,
			};
		case types.filterLogoutCleaning:
			return initialstate;

		case types.filterSearchMenu:
			return {
				...state,
				clothes: action.payload,
				gender: null,
			};
		case types.filterPaginationState:
			return {
				...state,
				page: action.payload,
			};
		case types.filterResetPaginationState:
			return {
				...state,
				page: 1,
			};

		default:
			return state;
	}
};
